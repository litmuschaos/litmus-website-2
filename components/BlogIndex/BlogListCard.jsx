import { Container } from "@layouts/Container"
import Image from "next/image"
import Link from "next/link"
// import { useState } from "react";

const BlogListCard = ({ data, slug }) => {
  // const [arrowHover, setArrowHOver] = useState(false);
  const {
    blog_image,
    image_alt,
    author_image,
    tag,
    date,
    author,
    author_role,
    title,
    content,
    ttr
  } = data
  return (
    <Container>
      <Link href={`/blog/${slug}`}>
        <a>
          <div
            className={
              "flex flex-col my-14 hover:shadow-xl rounded-xl px-6 pt-2"
            }
          >
            <div className={"flex"}>
              <div className={"w-3/5"}>
                <span className={"text-highlight text-sm"}>
                  <strong>| {tag}</strong>
                </span>
              </div>
              <div>
                <span className={"text-highlight "}>
                  <strong>|</strong>
                </span>{" "}
                <span className="text-sm">{date}</span>
              </div>
            </div>
            <div className={"flex py-4"}>
              <div className={"w-3/5 px-2"}>
                <Link href={`/blog/${slug}`}>
                  <a>
                    <div className={" text-2xl lg:text-3xl font-medium"}>
                      {title}
                    </div>
                  </a>
                </Link>
                <span className={"text-sm opacity-60"}>{ttr} MIN READ</span>
              </div>
              <div>
                <div className={"flex items-center"}>
                  <div className={"px-2 "}>
                    <Image
                      src={author_image}
                      width="44"
                      height="44"
                      alt={author}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <div className={"text-sm"}>
                      <strong>{author}</strong>
                    </div>
                    <div className={"opacity-60 text-xs lg:text-sm"}>
                      {author_role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"flex pt-4 pb-10"}>
              <div className={"w-5/12"}>
                <div className={"px-2 opacity-60 text-sm lg:text-base"}>
                  {content}
                </div>
                <div className="py-6 px-2">
                  <a href={`/blog/${slug}`}>Read More</a>
                </div>
              </div>
              <div className={"w-7/12 px-10"}>
                <Link href={`/blog/${slug}`}>
                  <a>
                    <Image
                      src={blog_image}
                      alt={image_alt}
                      height={327}
                      width={582}
                      loading="eager"
                      layout="responsive"
                      className="shadow-2xl object-cover rounded-xl bg-black"
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div>
            <hr className={" mx-auto opacity-10"} />
          </div>
        </a>
      </Link>
    </Container>
  )
}

export default BlogListCard
