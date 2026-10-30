// Single source of truth for everything litmus-lite on this site: links, copy
// and snippets. Content mirrors the litmus-lite README and docs.

export const DOCS = "https://litmuschaos.github.io/litmus-lite/"
export const REPO = "https://github.com/litmuschaos/litmus-lite"
export const RELEASES = `${REPO}/releases`

export const links = {
  docs: DOCS,
  repo: REPO,
  releases: RELEASES,
  quickStart: `${DOCS}getting-started/quick-start/`,
  install: `${DOCS}getting-started/install/`,
  agent: `${DOCS}guides/agent/`,
  hypotheses: `${DOCS}concepts/hypotheses/`,
  faults: `${DOCS}reference/faults/`,
  scenario: `${DOCS}reference/scenario/`,
  cli: `${DOCS}reference/cli/`,
  mcp: `${DOCS}reference/mcp/`,
  faq: `${DOCS}project/faq/`
}

export const PROMPT =
  "Add 800 ms of latency to the checkout API for 12 seconds and tell me whether it copes and how fast it recovers."

export const tabs = [
  {
    id: "ask",
    label: "Ask in Cursor",
    file: "Agent chat"
  },
  {
    id: "file",
    label: "The test is a file",
    file: "checkout.chaos.yaml"
  },
  {
    id: "run",
    label: "Run anywhere",
    file: "Terminal"
  }
]

export const askSteps = [
  "Writes the scenario as a *.chaos.yaml file next to your service",
  "Validates it and runs it through litmus-lite's MCP tools",
  "Answers from the hypotheses: which held, which did not, how long recovery took"
]

export const scenarioYaml = `faults:
  - name: slow-checkout
    kind: http.latency
    duration: 12s
    params:
      listen: "127.0.0.1:18080"
      upstream: "127.0.0.1:8080"
      delay: 800ms
probes:
  - { name: checkout, type: http, url: http://127.0.0.1:18080/checkout }
hypotheses:
  - { name: errors stay bounded, metric: error_rate, operator: "<", value: 15% }
  - { name: recovers, metric: recovery, operator: "<=", value: 5s }`

export const terminal = [
  {
    prompt: true,
    text: "litmus-lite hub import http.latency -beside ./checkout"
  },
  {
    prompt: true,
    text: "litmus-lite validate -strict ./checkout/http-latency.chaos.yaml"
  },
  { prompt: true, text: "litmus-lite run ./checkout/http-latency.chaos.yaml" },
  { comment: true, text: "exit 0: every hypothesis held" },
  { comment: true, text: "exit 3: the run finished and one did not" }
]

export const chips = [
  "One binary",
  "No cluster",
  "No account",
  "Agent optional"
]

export const why = [
  {
    icon: "file",
    title: "A test is a file",
    desc: "Scenarios are *.chaos.yaml files that live beside the service they test. Review them, commit them, run them in CI. Nothing exists only in a chat."
  },
  {
    icon: "bot",
    title: "Agent-native, not agent-mandatory",
    desc: "Cursor, or any MCP client, can write and run scenarios for you. Every MCP tool is a CLI command you can type, so the agent is optional the second time."
  },
  {
    icon: "scale",
    title: "Hypotheses, not thresholds",
    desc: "A run says which of your statements held: errors under 5%, healthy again within 10 s. No data is a failure, and a service that never came back fails as not recovered."
  },
  {
    icon: "shield",
    title: "Safe by default",
    desc: "Loopback targets only, PIDs you name, --yes for anything destructive, and every fault rolled back on exit or Ctrl-C. An agent cannot grant itself those permissions."
  },
  {
    icon: "box",
    title: "One static binary",
    desc: "Linux, macOS and Windows, no runtime and no daemon. No telemetry: by default nothing leaves your machine."
  },
  {
    icon: "chart",
    title: "A report you can read",
    desc: "One self-contained HTML file with probe latency and errors across baseline, fault and recovery, plus JSON for tools and JUnit for CI."
  }
]

export const steps = [
  {
    title: "Install",
    desc: "Download the binary for Linux, macOS or Windows from the releases page.",
    code: "litmus-lite version",
    link: { text: "Install guide", href: links.install }
  },
  {
    title: "Connect Cursor",
    desc: "Adds the MCP server and the rules that tell the agent how to behave. Any other MCP client works too.",
    code: "litmus-lite init",
    link: { text: "Working with an agent", href: links.agent }
  },
  {
    title: "Ask for a failure",
    desc: "Describe what should break and what must stay true. Prefer a terminal? Run the same file with litmus-lite run.",
    quote:
      "Add 800 ms of latency to the checkout API for 12 seconds and tell me whether it copes.",
    link: { text: "Full 5-minute quick start", href: links.quickStart }
  }
]

export const docsLinks = [
  {
    text: "Quick start",
    desc: "One green run, one red run",
    href: links.quickStart
  },
  { text: "Install", desc: "Linux, macOS, Windows", href: links.install },
  {
    text: "Working with an agent",
    desc: "Setup and prompts that work",
    href: links.agent
  },
  {
    text: "How a run is judged",
    desc: "Probes, phases, hypotheses",
    href: links.hypotheses
  },
  {
    text: "Faults",
    desc: "HTTP, process, container, resource",
    href: links.faults
  },
  {
    text: "Scenario file",
    desc: "Every field, explained",
    href: links.scenario
  },
  {
    text: "CLI reference",
    desc: "Commands, flags, exit codes",
    href: links.cli
  },
  { text: "FAQ", desc: "Common questions", href: links.faq }
]

export const audiences = [
  {
    who: "For developers",
    title: "It fits the way you already work",
    points: [
      "Scenarios are plain files in your repository: review them, commit them, change a number and run again",
      "Runs in a terminal or in CI, and the exit code is the verdict: 0 every hypothesis held, 3 one did not",
      "One binary and nothing to stand up: no cluster, no control plane, no account",
      "A self-contained HTML report, JSON for tools and JUnit for CI"
    ]
  },
  {
    who: "For agents",
    title: "It speaks MCP out of the box",
    points: [
      "litmus-lite init connects Cursor in one command and writes the rules the agent follows. Claude Code and any other MCP client work too",
      "MCP tools to create, validate and run a scenario, then diagnose a failure and compare reports",
      "Every tool is a CLI command you can type yourself, so nothing lives only in the agent",
      "The agent answers in terms of your hypotheses, and cannot grant itself destructive permissions"
    ]
  }
]

export const speech =
  "Tell me what should break and what must stay true. I will write the test, run it and report back."
