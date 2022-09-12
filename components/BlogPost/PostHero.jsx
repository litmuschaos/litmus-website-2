import React from "react"
import { Container, ContainerFluid } from "@layouts/Container"
import styles from "@components/BlogPost/Blog.module.scss"
import moment from "moment"
import Link from "next/link"

const PostHero = ({ data }) => {
  return (
    <ContainerFluid className={styles.postHeroContFluid}>
      <Container className={styles.postHeroCont}>
        <div className="mb-8 flex items-center gap-2">
          <Link href={"/blog"}>
            <a className="text-sm text-hint">Blog</a>
          </Link>
          <p className="text-sm text-hint">&gt;</p>
          <p className="text-sm text-primary font-medium">{data.title}</p>
        </div>
        <div className="flex md:items-center justify-between gap-4 md:flex-row flex-col">
          <div className="flex items-center gap-8 md:justify-start justify-between">
            <div className="flex items-center gap-2">
              <img
                src={data.author_image}
                alt={data.author}
                height={44}
                width={44}
                className="rounded-full"
              />
              <div>
                <p className="text-primary text-sm font-medium">
                  {data.author}
                </p>
                <p className="text-hint text-xs">{data.author_role}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 md:gap-2 flex-col md:flex-row">
              <p className="text-xs text-litmus">
                {moment(data.date).format("Do MMMM YYYY")}
              </p>
              <p className="text-xs text-primary">{data.ttr} Minute Read</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {data.author_twitter !== null && (
              <Link href={`https://twitter.com/${data.author_twitter}`}>
                <a target="_blank" rel="noopener noreferrer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM17.767 9.04554C17.775 9.17143 17.775 9.30268 17.775 9.43125C17.775 13.3634 14.7804 17.8929 9.30804 17.8929C7.62054 17.8929 6.05625 17.4027 4.73839 16.5589C4.97946 16.5857 5.20982 16.5964 5.45625 16.5964C6.84911 16.5964 8.12946 16.125 9.15 15.3268C7.84286 15.3 6.74464 14.4429 6.36964 13.2643C6.82768 13.3313 7.24018 13.3313 7.71161 13.2107C7.03855 13.074 6.43359 12.7084 5.99951 12.1762C5.56542 11.644 5.32898 10.9779 5.33036 10.2911V10.2536C5.72411 10.4759 6.1875 10.6125 6.67232 10.6313C6.26476 10.3596 5.93051 9.99164 5.69923 9.5599C5.46794 9.12817 5.34676 8.64603 5.34643 8.15625C5.34643 7.60179 5.49107 7.09554 5.75089 6.65625C6.49795 7.5759 7.43017 8.32806 8.48696 8.86384C9.54375 9.39961 10.7014 9.70702 11.8848 9.76607C11.4643 7.74375 12.975 6.10714 14.7911 6.10714C15.6482 6.10714 16.4196 6.46607 16.9634 7.04464C17.6357 6.91875 18.2786 6.66696 18.8518 6.32946C18.6295 7.01786 18.1634 7.59911 17.5446 7.96607C18.1446 7.90179 18.7232 7.73571 19.2589 7.50268C18.8545 8.09732 18.3482 8.625 17.767 9.04554Z"
                      fill="#0A3364"
                    />
                  </svg>
                </a>
              </Link>
            )}
          </div>
        </div>
        {data.blog_image && (
          <img
            src={data.blog_image}
            alt={data.title}
            className="w-full h-auto block mt-6"
          />
        )}
      </Container>
    </ContainerFluid>
  )
}

export { PostHero }
