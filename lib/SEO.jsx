import { NextSeo } from "next-seo"
import Head from "next/head"

const SeoKeywords = () => {
  const keywords = [
    "chaos engineering",
    "Litmus Chaos",
    "litmus",
    "devOps",
    "SRE",
    "Cloud-Native",
    "CNCF",
    "openebs",
    "Kubernetes",
    "Docker",
    "containerized",
    "dataMonitoring",
    "DataStorage",
    "workload",
    "deployment",
    "ci/cd",
    "cd",
    "ci",
    "DataAgility",
    "multicloud"
  ]

  return (
    <Head>
      <meta property="keywords" content={keywords} />
    </Head>
  )
}

const SeoData = [
  {
    // 0 - home
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 1 - adopters
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 2 - support
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 3 - community
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 4 - orange
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 5 - lenskart
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 6 - kitopi
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 7 - halodoc
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 8 - anutanetworks
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  },
  {
    // 9 - intuit
    title: "Litmus - Chaos Engineering for Kubernetes",
    description:
      "LitmusChaos is an open source Chaos Engineering platform that enables teams to identify weaknesses & potential outages in infrastructures by inducing chaos tests in a controlled way. Based on modern Chaos Engineering practices, LitmusChaos is easy to use, scalable & fast.",
    url: "https://litmuschaos.io",
    ogImgUrl: "https://litmuschaos.io/siteImage.png"
  }
]

const SEO = ({ page }) => {
  const list = [
    "home",
    "adopters",
    "support",
    "community",
    "orange",
    "lenskart",
    "kitopi",
    "halodoc",
    "anutanetworks",
    "intuit"
  ]
  const { title, description, url, ogImgUrl } = SeoData[list.indexOf(page)]

  return (
    <>
      <SeoKeywords />
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url: [url],
          title: [title],
          description: [description],
          images: [
            {
              url: [ogImgUrl],
              width: "",
              height: "",
              alt: ""
            }
          ],
          site_name: "LitmusChaos"
        }}
        twitter={{
          handle: "@LitmusChaos",
          site: "@LitmusChaos",
          cardType: "summary_large_image"
        }}
      />
    </>
  )
}

export default SEO
