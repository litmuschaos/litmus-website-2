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
                Exploring litmusctl: A Comprehensive Guide
              </h2>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src={
                    "https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F719060%2F98312c30-e184-453d-8d53-bdb55c9a84c3.jpeg"
                  }
                  className="rounded-full"
                  alt="Alt Text"
                  height={44}
                  width={44}
                />
                <div>
                  <p className="text-primary text-sm font-medium">
                    Nagesh Bansal
                  </p>
                  {/* <p className="text-hint text-xs">
                    Engineering Manager at Harness.io
                  </p> */}
                </div>
              </div>
              <Paragraph className="mt-4">
                This blog is a guide that explains how to run LitmusChaos on a
                remote cluster using Litmusctl. It&apos;s not just about
                scheduling Chaos Scenarios on your main cluster – Litmus also
                lets you set up Chaos on a remote cluster. Litmusctl, a
                command-line utility developed by the LitmusChaos community,
                offers a powerful set of commands to manage, configure, and
                control various aspects of chaos engineering experiments. In
                this guide, we will dive into the syntax, usage, and
                capabilities of litmusctl, making it easier for you to leverage
                this tool effectively.
              </Paragraph>
              <TextLink
                href="https://dev.to/nageshbansal/exploring-litmusctl-a-comprehensive-guide-170k"
                className="mt-4 inline-block"
                external
              >
                Read More
              </TextLink>
            </div>
            <div className="md:w-1/2 relative">
              <img
                src={
                  "https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft9p6v7hw2ry49bgko60k.png"
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
