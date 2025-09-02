import { TextLink, RegularButton } from "@includes/CTA"
import { HeroHead, Paragraph, SubHeading, BodyHead } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"
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
            Discover the latest insights, tutorials, and best practices in chaos engineering. 
            Learn from our community of experts and practitioners who are pushing the boundaries 
            of system resilience.
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
                <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4 leading-tight">
                  Exploring litmusctl: A Comprehensive Guide
                </h2>
                
                <div className="flex items-center gap-3 mb-6 justify-center lg:justify-start">
                  <img
                    src="https://media.dev.to/cdn-cgi/image/width=50,height=50,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F719060%2F98312c30-e184-453d-8d53-bdb55c9a84c3.jpeg"
                    className="rounded-full w-12 h-12"
                    alt="Nagesh Bansal"
                  />
                  <div className="text-left">
                    <p className="text-primary text-sm font-medium">Nagesh Bansal</p>
                    <p className="text-hint text-xs">Chaos Engineering Expert</p>
                  </div>
                </div>

                <Paragraph className="text-gray-600 mb-6 text-lg leading-relaxed">
                  This comprehensive guide explains how to run LitmusChaos on a remote cluster using Litmusctl. 
                  Learn about scheduling Chaos Scenarios, managing remote clusters, and leveraging the powerful 
                  command-line utility developed by the LitmusChaos community.
                </Paragraph>
                
                <RegularButton
                  href="https://dev.to/nageshbansal/exploring-litmusctl-a-comprehensive-guide-170k"
                  external
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
                    src="https://media.dev.to/cdn-cgi/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Ft9p6v7hw2ry49bgko60k.png"
                    alt="Exploring litmusctl Guide"
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
