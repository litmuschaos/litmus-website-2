import axios from "axios"

const websiteURL = "https://dev.to/litmus-chaos/"

const sanitizeDevToMarkdown = markdown => {
  let correctedMarkdown = ""
  const replaceSpaceCharRegex = new RegExp(String.fromCharCode(160), "g")
  correctedMarkdown = markdown.replace(replaceSpaceCharRegex, " ")
  const addSpaceAfterHeaderHashtagRegex = /##(?=[a-z|A-Z])/g
  return correctedMarkdown.replace(addSpaceAfterHeaderHashtagRegex, "$& ")
}

const getMarkdownForArticle = async articleID => {
  const { data } = await axios.get(`https://dev.to/api/articles/${articleID}`)
  return data.body_markdown
}

const convertDevtoResponseToArticle = async article => {
  const localSlug = convertCanonicalURLToRelative(article.url)
  const articleMarkdown = await getMarkdownForArticle(article.id)
  const markdown = sanitizeDevToMarkdown(articleMarkdown)
  return { ...article, localSlug, markdown }
}

export const getAllArticles = async () => {
  const params = { per_page: 1000 }
  const { data } = await axios.get(
    `https://dev.to/api/organizations/litmus-chaos/articles`,
    { params }
  )
  const articles = data
  return Promise.all(articles.map(convertDevtoResponseToArticle))
}

export const convertCanonicalURLToRelative = canonicalURL => {
  return canonicalURL.replace(websiteURL, "")
}

export const getArticleFromCache = async (cache, localSlug) => {
  const cachedArticle = cache.find(
    cachedArticle => cachedArticle.localSlug === localSlug
  )
  return cachedArticle
}
