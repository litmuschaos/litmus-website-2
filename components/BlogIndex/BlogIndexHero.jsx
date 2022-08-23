import { TextLink } from "@includes/CTA"
import { HeroHead, Paragraph, SubHeading } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const BlogIndexHero = () => {
  return (
    <ContainerFluid>
      <Container className="pt-20 pb-16">
        <HeroHead>All Blogs</HeroHead>
        <Paragraph hint className="mt-4">
          Blogs on LitmusChaos posted by community members
        </Paragraph>
      </Container>
      <Container>
        <SubHeading>Featured</SubHeading>
      </Container>
      <ContainerFluid
        style={{
          background: 'url("/blog/blogBack.svg")',
          backgroundSize: "100% auto",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        className="mt-8"
      >
        <Container>
          <div className="flex flex-col-reverse md:flex-row justify-between md:items-center gap-4 rounded-xl shadow-2xl py-6 px-4 md:p-8 bg-white">
            <div className="md:w-1/2">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-medium">
                Introducing Litmus 2.0 - Simplify Chaos Engineering
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src={
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--IByWRkFd--/c_fill,f_auto,fl_progressive,h_640,q_auto,w_640/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/401544/4b0b2b9a-b9fb-4453-a49f-f3dde0628f9a.jpeg"
                  }
                  className="rounded-full"
                  alt="Alt Text"
                  height={44}
                  width={44}
                />
                <div>
                  <p className="text-primary text-sm font-medium">Ajesh Baby</p>
                  <p className="text-hint text-xs">
                    Engineering Manager at Harness.io
                  </p>
                </div>
              </div>
              <Paragraph className="mt-4">
                I am feeling delighted to write this blog on the eve of the
                announcement of LitmusChaos 2.0. We had spent a bit more than a
                year planning on adding additional features and making the user
                journey better and simpler. While more requirements and
                improvements are flowing in, we are encouraged by the
                possibilities and feedback. The principles and features of 2.0
                have been solidified over many months of beta.
              </Paragraph>
              <TextLink
                href="blog/introducing-litmus-2-0-simplify-chaos-engineering-4g5e"
                className="mt-4 inline-block"
              >
                Read More
              </TextLink>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src={
                  "https://res.cloudinary.com/practicaldev/image/fetch/s--BBGOXwg_--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/d32jkr4usdblv43zo0ys.png"
                }
                alt="Alt"
                width={506}
                height={325}
                className="max-w-full max-h-full"
              />
            </div>
          </div>
        </Container>
      </ContainerFluid>
    </ContainerFluid>
  )
}

export default BlogIndexHero

const Card = () => {
  const [arrowHover, setArrowHOver] = useState(false)
  return (
    <Container className="flex items-center">
      <div
        className={
          "w-full mx-auto max-w-sm md:max-w-md lg:max-w-none lg:w-3/5 lg:mx-0 mt-14 mb-24 md:my-0"
        }
      >
        <div className={"text-white pb-2 flex items-center"}>
          <img
            src={"/blog_images/featured_symbol.svg"}
            alt="LitmusChaos moves to CNCF Incubator"
          />
          &nbsp;&nbsp;
          <span className={"opacity-70"}>Featured Blog</span>
        </div>
        <div
          className={"w-full h-full accent-bg rounded-xl relative mt-2"}
          style={{
            boxShadow: "0px 30px 60px -12px rgba(50, 50, 93, 0.5)",
            padding: "1.5px"
          }}
        >
          <Link href={"/blog/chaosnative_joins_harness"}>
            <a>
              <div
                className={"rounded-xl py-6 px-8"}
                style={{ backgroundColor: "#000000" }}
              >
                <div className={"flex justify-between md:pb-10"}>
                  <p className={"accent text-sm"}>
                    ChaosNative&nbsp;&nbsp;
                    <span className={"text-white opacity-60"}>
                      |&nbsp; Mar 22, 2022
                    </span>
                  </p>
                  <p className={"hidden lg:flex text-white text-sm opacity-80"}>
                    4 MIN READ
                  </p>
                </div>
                <div className={"text-white"}>
                  <div className={"flex justify-between my-5"}>
                    <p
                      className={
                        "text-2xl md:text-3xl xl:text-4xl text-white font-medium"
                      }
                    >
                      ChaosNative is joining Harness!
                    </p>
                    <p className={"lg:hidden text-sm opacity-90 mt-1 md:mt-0"}>
                      4 MIN READ
                    </p>
                  </div>
                  <p className={"opacity-60 text-sm md:text-base"}>
                    Today, we are thrilled to announce to the LitmusChaos
                    community that ChaosNative, the primary sponsor of the
                    LitmusChaos project, is joining forces with Harness to
                    extend scalable chaos engineering to enterprises.
                  </p>
                  <div
                    className="my-4 h-4 text-base flex items-center font-medium accent outline-none focus:outline-none"
                    aria-label="like"
                    onMouseEnter={() => setArrowHOver(true)}
                    onMouseLeave={() => setArrowHOver(false)}
                  >
                    Check out this blog&nbsp;&nbsp;
                    <img
                      alt="ChaosNative Blog"
                      src={"/blog_images/arrow_right.svg"}
                      className={`${arrowHover ? "block" : "hidden"}`}
                    />
                    <div
                      className={`text-xl ${arrowHover ? "hidden" : "block"}`}
                    >
                      &gt;
                    </div>
                  </div>
                </div>
                <div className={"flex py-2 lg:justify-end lg:py-0"}>
                  <div className={"flex items-center"}>
                    <Image
                      height={44}
                      width={44}
                      layout="intrinsic"
                      alt="Uma Mukkara"
                      src={"/blog_images/blog_harness/uma_headshot.png"}
                    />
                    <div className={"pl-2 text-white text-sm lg:text-base"}>
                      <p>Uma Mukkara</p>
                      <p className={"opacity-90 text-xs lg:text-sm"}>
                        CEO of ChaosNative
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}
