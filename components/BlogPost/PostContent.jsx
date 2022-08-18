import { OutlinedButton } from "@includes/CTA"
import { Container } from "@layouts/Container"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import styled from "@components/BlogPost/Blog.module.scss"

const PostContent = ({ links, body, data }) => {
  return (
    <Container>
      <div className="pb-12">
        <article className="relative prose max-w-none">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            className={styled.markdownCont}
          >
            {body}
          </ReactMarkdown>
        </article>
      </div>
      <div className="flex flex-row justify-between mt-2 md:mt-10">
        {links?.back?.slug ? (
          <div className="flex flex-col items-start w-5/12 md:w-2/12 text-sm">
            <div className="mt-2 mb-4">
              <OutlinedButton
                className="inline-block"
                href={"/blog/" + links.back.slug}
              >
                Prev
              </OutlinedButton>
            </div>
            <div className="text-left font-medium line-clamp-3">
              {links.back.title}
            </div>
          </div>
        ) : (
          <div />
        )}
        {links?.next?.slug ? (
          <div className="flex flex-col w-5/12 md:w-2/12 items-end text-sm">
            <div className="mt-2 mb-4">
              <OutlinedButton
                className="inline-block"
                href={"/blog/" + links.next.slug}
              >
                Next
              </OutlinedButton>
            </div>
            <div className="text-right font-medium line-clamp-3">
              {links.next.title}
            </div>
          </div>
        ) : (
          <div />
        )}
      </div>
    </Container>
  )
}

export default PostContent
