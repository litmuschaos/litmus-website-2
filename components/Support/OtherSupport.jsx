import { Container } from "@layouts/Container"

const utils = [
  {
    name: "Documentation",
    desc: "Start Chaos Engineering with LitmusChaos",
    icon: "file"
  },
  {
    name: "Full API reference",
    desc: "Explore complete reference documentation for the Litmus API.",
    icon: "api"
  },
  {
    name: "Got a Question?",
    desc: "Join our Slack channel to ask any question related to Chaos Engineering or LitmusChaos",
    icon: "slack"
  }
]

const OtherSupport = () => {
  return (
    <div className={"py-16"} style={{ backgroundColor: "#F7F8FA" }}>
      <Container>
        <p className={"text-2xl font-semibold mb-6"}>Other Support</p>
        <div className={"flex flex-wrap items-start justify-between"}>
          {utils.map((item, idx) => (
            <div key={idx} className={"w-full lg:w-1/3 pr-4 my-6"}>
              <div className={"flex items-start"}>
                <img src={`/support/${item.icon}.svg`} alt={item.icon} />
                <div className={"px-4"}>
                  <p className={"font-semibold"}>{item.name}</p>
                  <p className={"opacity-70 text-sm"}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default OtherSupport
