import { BodyHead } from "@includes/Texts"
import { Container, SkewedContainerFluid } from "@layouts/Container"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RegularButton } from "@includes/CTA"
import styles from "@includes/scss/Adopters.module.scss"

const Adopters = () => {
  const AdopterList = [
    "intuit",
    "okteto",
    "netapp",
    "redhat",
    "wescale",
    "kublr",
    "lenskart",
    "halodoc",
    "keptn",
    "vmware",
    "kitopi",
    "anuta_networks",
    "wipro",
    "zebrium",
    "kubeflare",
    "orange",
    "openebs",
    "intertech",
    "pravega",
    "kubesphere",
    "klanik",
    "neudesic",
    "iter8",
    "pole_emploi",
    "cnf_test_suite",
    "containersolutions",
    "iFood",
    "FIS",
    "adidas",
    "cyren",
    "ab-inbev",
    "ci&t",
    "hcl",
    "infracloud",
    "apisix",
    "baobab",
    "flipkart",
    "delivery_hero",
    "talend",
    "ericsson",
    "infor",
    "navwar",
    "nuBank",
    "outsystems",
    "wingie",
    "emirates-nbd"
  ]

  // Distribute logos across 4 rows (11-12 logos per row)
  const getRowLogos = rowIndex => {
    const logosPerRow = Math.ceil(AdopterList.length / 4)
    const startIndex = rowIndex * logosPerRow
    const endIndex = Math.min(startIndex + logosPerRow, AdopterList.length)
    return AdopterList.slice(startIndex, endIndex)
  }

  const LogoRow = ({ logos, direction, rowIndex }) => {
    // Create enough duplicates to ensure seamless infinite scroll
    const duplicatedLogos = [
      ...logos,
      ...logos,
      ...logos,
      ...logos,
      ...logos,
      ...logos
    ]

    const animationClass =
      direction === "left" ? styles.scrollLeft : styles.scrollRight

    return (
      <div className="overflow-hidden mb-2 md:mb-4 w-full h-[60px]">
        <div
          className={`flex items-center space-x-8 whitespace-nowrap ${animationClass}`}
          style={{
            width: "max-content",
            willChange: "transform"
          }}
        >
          {duplicatedLogos.map((adopter, index) => (
            <img
              key={`${adopter}-${index}`}
              src={`/landing_images/adopter_logos/${adopter}.png`}
              alt={adopter}
              className="h-10 md:h-12 w-auto object-contain flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
              draggable={false}
              style={{ minWidth: "100px" }}
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <Container className="py-8 md:pt-32 md:pb-16">
      <BodyHead className="text-center max-w-5xl mx-auto">
        Trusted by startups and enterprises to improve reliability
      </BodyHead>

      <div className={`mt-8 md:mt-16 relative ${styles.logoContainer}`}>
        <LogoRow logos={getRowLogos(0)} direction="left" rowIndex={0} />
        <LogoRow logos={getRowLogos(1)} direction="right" rowIndex={1} />
        <LogoRow logos={getRowLogos(2)} direction="left" rowIndex={2} />
        <LogoRow logos={getRowLogos(3)} direction="right" rowIndex={3} />
      </div>

      {/* Add yourself button */}
      <div className="flex justify-center mt-8 md:mt-12">
        <RegularButton
          external
          href="https://github.com/litmuschaos/litmus/issues/2191"
        >
          <span className="flex items-center">
            Add Your Organization
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </RegularButton>
      </div>
    </Container>
  )
}

export default Adopters
