import React from "react"
import { Container, ContainerFluid } from "@layouts/Container"
import { BodyHead, Paragraph } from "@includes/Texts"
import styles from "@components/BlogPost/Blog.module.scss"
import moment from "moment"
import Link from "next/link"

const PostHero = ({ data }) => {
  return (
    <>
      {/* Breadcrumb and Header Section */}
      <div className="bg-white pt-10 md:pt-16 md:pb-2">
        <Container>
          {/* Breadcrumb */}
          <div className="mb-8 flex items-center gap-2">
            <Link href={"/blog"}>
              <a className="text-sm text-gray-500 hover:text-purple-600 transition-colors">
                Blog
              </a>
            </Link>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p className="text-sm text-gray-900 font-medium truncate">{data.title}</p>
          </div>

          {/* Article Header */}
          <div className="text-center mb-12">
            <BodyHead className="mb-6 md:my-8 !font-bold leading-tight">
              {data.title}
            </BodyHead>
            
            {/* Author and Meta Info */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-4">
                <img
                  src={data.author_image}
                  alt={data.author}
                  className="w-12 h-12 rounded-full ring-2 ring-purple-100"
                />
                <div className="text-left">
                  <p className="text-gray-900 font-semibold">{data.author}</p>
                  <p className="text-gray-600 text-sm">{data.author_role}</p>
                </div>
              </div>
              
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              
              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                    <rect x="2" y="3" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 1v4M11 1v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M2 7h12" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                  <span>{moment(data.date).format("MMM DD, YYYY")}</span>
                </div>
                <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-gray-400">
                    <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12Z" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 6v2l1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span>{data.ttr} min read</span>
                </div>
              </div>
              
              {data.author_twitter && (
                <>
                  <div className="hidden md:block w-px h-12 bg-gray-300"></div>
                  <Link href={`https://twitter.com/${data.author_twitter}`}>
                    <a 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM17.767 9.04554C17.775 9.17143 17.775 9.30268 17.775 9.43125C17.775 13.3634 14.7804 17.8929 9.30804 17.8929C7.62054 17.8929 6.05625 17.4027 4.73839 16.5589C4.97946 16.5857 5.20982 16.5964 5.45625 16.5964C6.84911 16.5964 8.12946 16.125 9.15 15.3268C7.84286 15.3 6.74464 14.4429 6.36964 13.2643C6.82768 13.3313 7.24018 13.3313 7.71161 13.2107C7.03855 13.074 6.43359 12.7084 5.99951 12.1762C5.56542 11.644 5.32898 10.9779 5.33036 10.2911V10.2536C5.72411 10.4759 6.1875 10.6125 6.67232 10.6313C6.26476 10.3596 5.93051 9.99164 5.69923 9.5599C5.46794 9.12817 5.34676 8.64603 5.34643 8.15625C5.34643 7.60179 5.49107 7.09554 5.75089 6.65625C6.49795 7.5759 7.43017 8.32806 8.48696 8.86384C9.54375 9.39961 10.7014 9.70702 11.8848 9.76607C11.4643 7.74375 12.975 6.10714 14.7911 6.10714C15.6482 6.10714 16.4196 6.46607 16.9634 7.04464C17.6357 6.91875 18.2786 6.66696 18.8518 6.32946C18.6295 7.01786 18.1634 7.59911 17.5446 7.96607C18.1446 7.90179 18.7232 7.73571 19.2589 7.50268C18.8545 8.09732 18.3482 8.625 17.767 9.04554Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="hidden sm:inline">Follow</span>
                    </a>
                  </Link>
                </>
              )}
            </div>
          </div>
        </Container>
      </div>

      {/* Featured Image Section */}
      {data.blog_image && (
        <div className="relative">
          <Container>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
              <img
                src={data.blog_image}
                alt={data.title}
                className="w-full h-auto object-cover"
              />
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
              <div className="absolute bottom-6 left-6 w-6 h-6 bg-white/30 rounded-full backdrop-blur-sm"></div>
            </div>
          </Container>
        </div>
      )}
    </>
  )
}

export { PostHero }
