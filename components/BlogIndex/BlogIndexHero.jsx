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
                height="auto"
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
