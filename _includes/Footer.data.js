import {
  DevSVG,
  DocsSVG,
  FaqSVG,
  GithubFooterSVG,
  IssuesSVG,
  LinkedInSVG,
  SlackFooterSVG,
  SupportSVG,
  TwitterSVG,
  YoutubeSVG
} from "@components/SVG/FooterSVG"

export const FooterData = [
  {
    heading: "Site map",
    links: [
      {
        svg: null,
        text: "ChaosHub",
        linkTo: "https://hub.litmuschaos.io/",
        external: true
      },
      {
        svg: null,
        text: "Blog",
        linkTo: "/blog"
      },
      {
        svg: null,
        text: "Community",
        linkTo: "/community"
      }
    ]
  },
  {
    heading: "Resources",
    links: [
      {
        svg: <DocsSVG />,
        text: "Docs",
        linkTo: "https://docs.litmuschaos.io/",
        external: true
      },
      {
        svg: <FaqSVG />,
        text: "FAQ",
        linkTo: "https://docs.litmuschaos.io/docs/faq/",
        external: true
      },
      {
        svg: <IssuesSVG />,
        text: "Issues",
        linkTo: "https://github.com/litmuschaos/litmus/issues",
        external: true
      },
      {
        svg: <SupportSVG />,
        text: "Enterprise",
        linkTo: "/enterprise"
      }
    ]
  },
  {
    heading: "Join the Community",
    links: [
      {
        svg: <GithubFooterSVG />,
        text: "GitHub",
        linkTo: "https://github.com/litmuschaos/litmus",
        external: true
      },
      {
        svg: <SlackFooterSVG />,
        text: "Slack",
        linkTo: "https://kubernetes.slack.com/?redir=%2Farchives%2FCNXNB0ZTN",
        external: true
      },
      {
        svg: <TwitterSVG />,
        text: "Twitter",
        linkTo: "https://twitter.com/LitmusChaos",
        external: true
      },
      {
        svg: <DevSVG />,
        text: "Dev",
        linkTo: "https://dev.to/t/litmuschaos/latest",
        external: true
      },
      {
        svg: <YoutubeSVG />,
        text: "Youtube",
        linkTo: "https://www.youtube.com/channel/UCa57PMqmz_j0wnteRa9nCaw",
        external: true
      },
      {
        svg: <LinkedInSVG />,
        text: "LinkedIn",
        linkTo: "https://www.linkedin.com/company/litmuschaos/",
        external: true
      }
    ]
  }
]
