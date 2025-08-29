import React from "react"
import { Container } from "@layouts/Container"
import { Paragraph, BodyHead } from "@includes/Texts"
import { RegularButton } from "@includes/CTA"

const HCE = () => {
  const HCEData = [
    {
      title: "CI/CD Pipeline Integrated",
      description:
        "Systems' reliability, and protecting your business from the costs of downtime, is a team sport. Chaos isn’t only for SRE… Harness engages all teams spanning developers, DevOps, SRE, and any one else involved in your SDLC to create reliable systems. Leverage the chaos integration with Harness CD and CV or the robust API for your own pipeline tooling.",
      image1: "f1",
      image2: null
    },
    {
      title: "Integrations with Observability Systems",
      description:
        "With included integrations to leading observability systems such as Dynatrace and Prometheus, Harness CE ensures that all involved in your SDLC can see results of your chaos experiments and make reliability improvements accordingly. Harness CE builds in steady statement measurement to enable users to validate the impact to the targeted system.",
      image1: "f2",
      image2: "f2b"
    },
    {
      title: "GameDay Experience",
      description:
        "Harness CE enables you to run a GameDay with your team to proactively address points of failure.  Validate post-mortem actions from an outage, test your incident management process to train new team members, and run a repeatable IT disaster recovery exercise. Prepare, execute, observe and learn!",
      image1: "f3",
      image2: null
    },
    {
      title: "Largest Chaos Experiment Library",
      description:
        "The largest and most diverse set of chaos experiments available today, spanning pod, node, network, stress, cloud services, and application chaos testing. Users can also create their own experiments and can contribute them back to the public ChaosHub catalog.",
      image1: "f4",
      image2: "f4b"
    }
  ]
  return (
    <Container className="pb-12 md:pb-20 md:pt-0">
      {/* HCE Hero Section */}
      <div className="text-center">
        <div className="relative mx-auto mb-8 md:mb-12 w-fit">
          <div className="relative  backdrop-blur-sm rounded-2xl p-8 pt-16 md:p-28 border border-white/30">
            <img
              src="/hce_logo.svg"
              alt="Harness Chaos Engineering"
              width={700}
              height={140}
              className="mx-auto"
            />
          </div>
        </div>
        <BodyHead className="mb-4">
          Harness Chaos Engineering
        </BodyHead>
        <Paragraph className="max-w-4xl mt-6 mx-auto text-lg leading-relaxed">
          Improve application resiliency and reduce costly downtime with enterprise-grade chaos engineering. 
          Harness enables organizations to securely scale chaos engineering across their entire infrastructure 
          with expert support from the creators of Litmus, whether you're exploring advanced chaos testing 
          or need a partner to build custom reliability solutions.
        </Paragraph>
        <div className="mt-8 text-center">
          <RegularButton
            external
            href="https://harness.io/products/chaos-engineering"
            className="inline-block"
          >
            Try now!
          </RegularButton>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 md:mt-20">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {HCEData.map(feature => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <img
                  src={`/support/${feature.image1}.svg`}
                  alt={feature.title}
                  height={48}
                  width={48}
                  className="mr-3"
                />
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 leading-tight">
                  {feature.title}
                </h3>
              </div>
              {feature.description && (
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>
              )}
              {feature.image2 && (
                <img
                  src={`/support/${feature.image2}.svg`}
                  alt="Feature"
                  className="h-12 w-auto"
                />
              )}
            </div>
          ))}
        </div>
      </div>

    </Container>
  )
}

export default HCE
