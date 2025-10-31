import { Container } from "@layouts/Container"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"
import styled from "@components/BlogPost/Blog.module.scss"
import { RegularButton } from "@includes/CTA"
import Link from "next/link"

const PostContent = ({ links, body }) => {
  return (
    <>
      {/* Main Content */}
      <div className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto">
            <article className="relative prose prose-lg max-w-none">
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                className={styled.markdownCont}
              >
                {body}
              </ReactMarkdown>
            </article>
          </div>
        </Container>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-purple-100 to-blue-200 py-16">
        <Container>
          <div className="text-center text-black">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Chaos Engineering Journey?
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of engineers who are building more resilient
              systems with LitmusChaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <RegularButton
                href="https://github.com/litmuschaos/litmus"
                className="bg-white text-purple-600 border-white"
              >
                <span className="flex items-center">
                  Get Started
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="ml-2"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </RegularButton>
              <RegularButton
                href="/blog"
                className="bg-transparent border-white text-white"
              >
                Read More Articles
              </RegularButton>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default PostContent
