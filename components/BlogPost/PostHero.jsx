import React from "react"
import { Container, ContainerFluid } from "@layouts/Container"
import styles from "@components/BlogPost/Blog.module.scss"
import Image from "next/image"
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
              <Image
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
              <p className="text-xs text-litmus">{data.date}</p>
              <p className="text-xs text-primary">{data.ttr} Minute Read</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            {data.author_twitter !== "" && (
              <Link href={data.author_twitter}>
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
            {data.author_linkedIn !== "" && (
              <Link href={data.author_linkedIn}>
                <a target="_blank" rel="noopener noreferrer">
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1 2.838C1 2.35053 1.19365 1.88303 1.53834 1.53834C1.88303 1.19365 2.35053 1 2.838 1H21.16C21.4016 0.999608 21.6409 1.04687 21.8641 1.13907C22.0874 1.23127 22.2903 1.36661 22.4612 1.53734C22.6322 1.70807 22.7677 1.91083 22.8602 2.13401C22.9526 2.3572 23.0001 2.59643 23 2.838V21.16C23.0003 21.4016 22.9529 21.6409 22.8606 21.8642C22.7683 22.0875 22.6328 22.2904 22.462 22.4613C22.2912 22.6322 22.0884 22.7678 21.8651 22.8602C21.6419 22.9526 21.4026 23.0001 21.161 23H2.838C2.59655 23 2.35746 22.9524 2.1344 22.86C1.91134 22.7676 1.70867 22.6321 1.53798 22.4613C1.3673 22.2905 1.23193 22.0878 1.13962 21.8647C1.04731 21.6416 0.999869 21.4025 1 21.161V2.838ZM9.708 9.388H12.687V10.884C13.117 10.024 14.217 9.25 15.87 9.25C19.039 9.25 19.79 10.963 19.79 14.106V19.928H16.583V14.822C16.583 13.032 16.153 12.022 15.061 12.022C13.546 12.022 12.916 13.111 12.916 14.822V19.928H9.708V9.388ZM4.208 19.791H7.416V9.25H4.208V19.79V19.791ZM7.875 5.812C7.88105 6.08668 7.83217 6.35979 7.73124 6.61532C7.63031 6.87084 7.47935 7.10364 7.28723 7.30003C7.09511 7.49643 6.8657 7.65248 6.61246 7.75901C6.35921 7.86554 6.08724 7.92042 5.8125 7.92042C5.53776 7.92042 5.26579 7.86554 5.01255 7.75901C4.7593 7.65248 4.52989 7.49643 4.33777 7.30003C4.14565 7.10364 3.99469 6.87084 3.89376 6.61532C3.79283 6.35979 3.74395 6.08668 3.75 5.812C3.76187 5.27286 3.98439 4.75979 4.36989 4.38269C4.75539 4.00558 5.27322 3.79442 5.8125 3.79442C6.35178 3.79442 6.86961 4.00558 7.25512 4.38269C7.64062 4.75979 7.86313 5.27286 7.875 5.812Z"
                      fill="#0A3364"
                    />
                  </svg>
                </a>
              </Link>
            )}
          </div>
        </div>
        <img
          src={data.blog_image}
          alt={data.title}
          className="w-full h-auto block mt-6"
        />
      </Container>
    </ContainerFluid>
  )
}

export { PostHero }
