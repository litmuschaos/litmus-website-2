import { BodyHead } from "@includes/Texts"
import { SkewedContainerFluid } from "@layouts/Container"
import Link from "next/link"

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
    "adidas"
  ]

  return (
    <SkewedContainerFluid>
      <BodyHead className="max-w-4xl">
        <span className="text-hint">Trusted by</span> startups, leading open
        source projects and the world&apos;s largest companies
      </BodyHead>
      <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-x-4 gap-y-8">
        {AdopterList.map(adopter => {
          return (
            <img
              key={adopter}
              src={`/landing_images/adopter_logos/${adopter}.png`}
              alt={adopter}
              draggable={false}
            />
          )
        })}
        <Link href="https://github.com/litmuschaos/litmus/issues/2191">
          <a target="_blank" rel="noopener noreferrer">
            <img
              src={`/landing_images/adopter_logos/null.png`}
              alt="Add yourself"
              draggable={false}
            />
          </a>
        </Link>
      </div>
    </SkewedContainerFluid>
  )
}

export default Adopters
