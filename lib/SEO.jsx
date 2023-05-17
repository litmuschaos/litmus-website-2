import { NextSeo } from "next-seo"
import Head from "next/head"

const SeoKeywords = ({ blog }) => {
  const keywords = [
    "chaos engineering",
    "Litmus Chaos",
    "litmus",
    "devOps",
    "SRE",
    "Cloud-Native",
    "CNCF",
    "openebs",
    "Kubernetes",
    "Docker",
    "containerized",
    "dataMonitoring",
    "DataStorage",
    "workload",
    "deployment",
    "ci/cd",
    "cd",
    "ci",
    "DataAgility",
    "multicloud"
  ]
  blog && keywords.push(blog.tag)
  return (
    <Head>
      <meta property="keywords" content={keywords} />
    </Head>
  )
}

const SEO = ({ page, blog, adopter }) => {
  return (
    <>
      <SeoKeywords blog={blog} />
      <NextSeo
        title={
          blog ? page : "LitmusChaos - Open Source Chaos Engineering Platform"
        }
        description={
          "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast."
        }
        canonical={
          blog
            ? `https://litmuschaos.io/blog/${blog.localSlug}`
            : adopter
            ? `https://litmuschaos.io/adopters/${adopter.name}`
            : `https://litmuschaos.io/${page}`
        }
        openGraph={{
          url: blog
            ? `https://litmuschaos.io/blog/${blog.localSlug}`
            : adopter
            ? `https://litmuschaos.io/adopters/${adopter.name}`
            : `https://litmuschaos.io/${page}`,
          title: blog
            ? page
            : "LitmusChaos - Open Source Chaos Engineering Platform",
          description: [
            "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast."
          ],
          images: [
            {
              url: [
                blog ? blog.seoImage : "https://litmuschaos.io/siteImage.png"
              ],
              width: "",
              height: "",
              alt: ""
            }
          ],
          site_name: "LitmusChaos"
        }}
        twitter={{
          handle: "@LitmusChaos",
          site: "@LitmusChaos",
          cardType: "summary_large_image"
        }}
      />
    </>
  )
}

export default SEO
