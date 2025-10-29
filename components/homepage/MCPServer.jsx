import { RegularButton, OutlinedButton, TextLink } from "@includes/CTA"
import styles from "@includes/scss/MCPServer.module.scss"
import { BodyHead, Paragraph, SubHeading } from "@includes/Texts"
import { Container, ContainerFluid } from "@layouts/Container"

const features = [
  {
    title: "MCP compatible",
    desc: "Works with clients that support Model Context Protocol (e.g., Claude Desktop).",
  },
  {
    title: "Run Litmus experiments",
    desc: "Discover, trigger, and observe Litmus Chaos experiments from your MCP client.",
  },
  {
    title: "Simple setup",
    desc: "Get started quickly with a minimal configuration and clear README instructions.",
  },
  {
    title: "Secure by design",
    desc: "Use tokens and scoped access for safer experimentation workflows.",
  },
]

const MCPServer = () => {
  return (
    <ContainerFluid className="bg-white">
      <Container className="py-10 md:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <BodyHead
            className="text-center"
            data-aos="fade-down"
            data-aos-duration="800"
          >
            Introducing the <span className="text-[#5b44ba]">Litmus MCP Server</span>
          </BodyHead>
          <Paragraph
            hint
            className="mt-4 md:mt-6"
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
          >
            Bring Chaos Engineering into your AI workflows. The Litmus MCP Server exposes LitmusChaos capabilities via the Model Context Protocol so you can discover, run, and monitor experiments directly from compatible MCP clients.
          </Paragraph>
        </div>

        <div className={styles.card} data-aos="fade-up" data-aos-delay="250" data-aos-duration="800">
          <div className={styles.cardContent}>
            <div>
              <SubHeading className="mb-2">Why MCP for Litmus?</SubHeading>
              <Paragraph hint>
                Integrate reliability checks into everyday conversations and automations. Use natural language to trigger Litmus experiments, inspect results, and embed resilience into developer workflows.
              </Paragraph>

              <div className={styles.featureGrid}>
                {features.map((f, i) => (
                  <div key={f.title + i} className={styles.featureItem}>
                    <div className={styles.bullet}></div>
                    <div>
                      <h4 className="text-base md:text-lg font-medium text-primary">{f.title}</h4>
                      <Paragraph hint className="mt-1">{f.desc}</Paragraph>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3">
                <RegularButton external href="https://github.com/litmuschaos/litmus-mcp-server">
                  <span className="flex items-center">
                    View on GitHub
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </RegularButton>
                <OutlinedButton
                  external
                  href="https://github.com/litmuschaos/litmus-mcp-server#quickstart"
                >
                  <span className="flex items-center">Quickstart</span>
                </OutlinedButton>
              </div>
            </div>
            <div className={styles.glassPane}>
              <div className={styles.glassInner}>
                <div className={styles.codeHeader}>
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                  <span className={styles.dot} />
                </div>
                <pre className={styles.codeBlock}>
{`# Claude Desktop config (excerpt)
"mcpServers": {
  "litmus": {
    "command": "litmus-mcp",
    "args": ["--namespace", "litmus"]
  }
}
# Then ask your MCP client:
# "Run pod-delete in staging and show the results"`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ContainerFluid>
  )
}

export default MCPServer
