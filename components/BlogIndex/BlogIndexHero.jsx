import { TextLink, RegularButton } from "@includes/CTA"
import { HeroHead, Paragraph, SubHeading, BodyHead } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
import { LAUNCH_POST } from "@components/litmuslite/data"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const BlogIndexHero = () => {
  return (
    <>
      <Container className="pt-8 md:py-16">
        <div className="text-center">
          <HeroHead className="mb-4 !font-bold">
            Insights & Knowledge Hub
          </HeroHead>
          <Paragraph className="mb-8 max-w-3xl mx-auto">
            Discover the latest insights, tutorials, and best practices in chaos
            engineering. Learn from our community of experts and practitioners
            who are pushing the boundaries of system resilience.
          </Paragraph>
        </div>
      </Container>

      {/* Featured Blog Section */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-16">
        <Container>
          <div className="text-center mb-12">
            <SubHeading className="mb-4">Featured Article</SubHeading>
          </div>

          <div className="relative rounded-2xl shadow-xl p-8 lg:p-12 bg-white">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Content */}
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block mb-3 px-3 py-1 rounded-full bg-[#ffb547] text-[#1c0732] text-xs font-bold uppercase tracking-wide">
                  New: litmus-lite launch
                </span>
                <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4 leading-tight">
                  Break it before you merge it: introducing litmus-lite
                </h2>

                <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                  <img
                    src="/litmus-lite/pip-head.svg"
                    className="rounded-full w-12 h-12 bg-[#fdeb8c]"
                    alt="Pip, the litmus-lite mascot"
                  />
                  <div className="text-left">
                    <p className="text-primary text-sm font-medium">
                      Uma Mukkara & Karthik Satchitanand
                    </p>
                    <p className="text-hint text-xs">
                      Co-creators of LitmusChaos
                    </p>
                  </div>
                </div>

                <Paragraph className="text-gray-600 mb-6 text-lg leading-relaxed">
                  Chaos testing for developers and their agents. Ask for a
                  failure in Cursor, keep the test as a file in your repo, and
                  get a verdict you can trust before you merge. One binary, no
                  cluster, no account.
                </Paragraph>

                <RegularButton
                  href={LAUNCH_POST}
                  className="mt-4 w-full text-center sm:w-auto"
                >
                  <span className="flex items-center">
                    Read Full Article
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
              </div>

              {/* Featured Image */}
              <div className="flex-shrink-0 w-full lg:w-96">
                <div className="relative rounded-xl overflow-hidden shadow-lg">
                  <img
                    src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fh0g0r0lleus0sy58tw7z.png"
                    alt="Break it before you merge it: introducing litmus-lite"
                    className=" object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-8 h-8 bg-purple-100 rounded-full opacity-60"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 bg-purple-200 rounded-full opacity-40"></div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default BlogIndexHero
