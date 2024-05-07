import React from "react"
import { Container } from "@layouts/Container"
import {
  AdoptersSVG,
  ApiSVG,
  ArchitectureSVg,
  DocumentationSVG,
  GitOPS,
  InvolvedSVG,
  GithubButton,
  MobileArrowBack,
  MobileArrows,
  ObservablitySVG,
  ResourcesSVG,
  SdkSVG,
  UserGuideSVG
} from "@components/SVG/NavbarSVG"
import styles from "@includes/scss/Navbar.module.scss"
import { ContainerFluid } from "@layouts/Container"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RegularButton, TextLink } from "./CTA"
import { Paragraph } from "./Texts"

const TopNavbar = () => {
  const url = "https://api.github.com/repos/litmuschaos/litmus"
  const [isNavbarOpened, openNavbar] = useState(false)
  const [isNavbarScrolled, setNavbar] = useState(false)
  const [docsOpen, setDocs] = useState(false)
  const [communityOpen, setCommunity] = useState(false)
  const [gitHub, setGitHub] = useState({
    stars: ""
  })
  const changeBackground = () => {
    if (window.scrollY >= 64) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  const OpenNavbar = () => {
    openNavbar(!isNavbarOpened)
    setDocs(false)
    setCommunity(false)
  }
  const SetDocs = () => setDocs(!docsOpen)
  const SetCommunity = () => setCommunity(!communityOpen)
  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    isNavbarOpened
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto")
  })
  useEffect(() => {
    ;(async () => {
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          setGitHub({
            stars: data.stargazers_count
          })
        })
    })()
  }, [])
  const GitHubStars = ({ icon, name, count, href }) => {
    return (
      <div className={styles.gitPart}>
        <Link href={href}>
          <a target="_blank" rel="noopener noreferrer">
            <div className={styles.gitLink}>
              <img src={`/landing_images/hero/${icon}.svg`} alt="LitmusChaos" />
              <span>{name}</span>
            </div>
          </a>
        </Link>
        <div className={styles.gitCount}>
          <span>{count > 999 ? (count / 1000).toFixed(1) + "k" : count}</span>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`${styles.navbarContFluid} ${
          isNavbarScrolled
            ? isNavbarOpened
              ? ""
              : styles.navbarContFluidScrolled
            : ""
        }`}
      >
        <Container className={styles.navbarCont}>
          <nav className={styles.navbar}>
            <div className={styles.logoCont}>
              <Link href="/">
                <a>
                  <Image
                    src="/logo.png"
                    alt="Litmus"
                    height={51.26}
                    width={134}
                  />
                </a>
              </Link>
              <GitHubStars
                icon={"github_star"}
                name={"Star"}
                count={gitHub.stars}
                href={"https://github.com/litmuschaos/litmus"}
              />
            </div>
            <div className="items-center hidden md:flex">
              <ul className={styles.navLinks}>
                <li>
                  <Link href="/enterprise">
                    <a
                      className={`text-hint hover:text-primary transition-all text-xs lg:text-sm font-medium ${styles.navLink}`}
                    >
                      Enterprise
                    </a>
                  </Link>
                </li>
                <li>
                  <span
                    className={`text-hint transition-all text-xs lg:text-sm font-medium cursor-pointer ${styles.navLink}`}
                  >
                    Documentation
                  </span>
                  <div className={styles.dropDownDesktop}>
                    <div className={styles.overHead}></div>
                    <div className={styles.dropDownBody}>
                      <div className={styles.mainMenuItemCont}>
                        <Link href="https://docs.litmuschaos.io/">
                          <a target="_blank" rel="noopener noreferrer">
                            <div className={styles.primaryLink}>
                              <DocumentationSVG />
                              <div>
                                <p
                                  className={`text-primary text-base font-medium ${styles.documentation}`}
                                >
                                  Documentation
                                </p>
                                <p className="text-hint text-sm max-w-xs">
                                  Start Chaos Engineering with LitmusChaos
                                </p>
                              </div>
                            </div>
                          </a>
                        </Link>
                        <div
                          className={`${styles.secondaryLinks} grid grid-cols-2 gap-4`}
                        >
                          <table className={styles.docsDropDown}>
                            <tbody>
                              <tr>
                                <th
                                  className="text-disabled text-sm
                                 font-normal"
                                >
                                  GET STARTED
                                </th>
                              </tr>
                              <tr>
                                <td>
                                  <Link href="https://docs.litmuschaos.io/docs/getting-started/installation/#prerequisites">
                                    <a
                                      className="text-hint text-sm hover:text-primary transition-all"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Pre-requisites
                                    </a>
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link href="https://docs.litmuschaos.io/docs/getting-started/installation/">
                                    <a
                                      className="text-hint text-sm hover:text-primary transition-all"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Installation
                                    </a>
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link href="https://docs.litmuschaos.io/docs/getting-started/run-your-first-workflow/">
                                    <a
                                      className="text-hint text-sm hover:text-primary transition-all"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Create Experiments
                                    </a>
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Link href="https://docs.litmuschaos.io/docs/user-guides/observability-set-up/">
                                    <a
                                      className="text-hint text-sm hover:text-primary transition-all"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      Observe Experiments
                                    </a>
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <table className={styles.docsDropDown}>
                            <tr>
                              <th className="text-disabled text-sm font-normal">
                                POPULAR TOPICS
                              </th>
                            </tr>
                            <tr>
                              <td>
                                <Link href="https://docs.litmuschaos.io/docs/concepts/gitops/">
                                  <a
                                    className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <GitOPS />
                                    GitOps
                                  </a>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link href="https://docs.litmuschaos.io/docs/user-guides/overview/">
                                  <a
                                    className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <UserGuideSVG />
                                    Advanced User Guides
                                  </a>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                {/* <Link href="https://docs.litmuschaos.io/docs/concepts/litmus"> */}
                                <Link href="https://docs.litmuschaos.io/docs/architecture/overview/">
                                  <a
                                    className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ArchitectureSVg />
                                    Design & Architecture
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </div>
                      </div>
                      <div
                        className={`${styles.subMenuItemCont} flex-col justify-between`}
                      >
                        <table className={styles.docsDropDown}>
                          <tbody>
                            <tr>
                              <th
                                className="text-disabled text-sm
                                 font-normal"
                              >
                                LEARN
                              </th>
                            </tr>
                            <tr>
                              <td>
                                <Link href="https://docs.litmuschaos.io/docs/introduction/other-links/">
                                  <a
                                    className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ResourcesSVG />
                                    Resources
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table className={styles.docsDropDown}>
                          <tbody>
                            <tr>
                              <th
                                className="text-disabled text-sm
                                 font-normal"
                              >
                                API
                              </th>
                            </tr>
                            <tr>
                              <td>
                                <Link href="https://litmuschaos.github.io/litmus/graphql/v2.0.0/api.html">
                                  <a
                                    className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ApiSVG />
                                    Full API reference
                                  </a>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link href="https://github.com/litmuschaos/litmus-go">
                                  <a
                                    className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <SdkSVG />
                                    SDK
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="https://hub.litmuschaos.io/">
                    <a
                      className={`text-hint hover:text-primary transition-all text-xs lg:text-sm font-medium ${styles.navLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ChaosHub
                    </a>
                  </Link>
                </li>

                <li>
                  <span
                    className={`text-hint transition-all text-xs lg:text-sm font-medium cursor-pointer ${styles.navLink}`}
                  >
                    Community
                  </span>
                  <div className={styles.dropDownDesktop}>
                    <div className={styles.overHead}></div>
                    <div className={styles.dropDownBody}>
                      <div className={styles.mainMenuItemCont}>
                        <div>
                          <Link href="/community">
                            <a>
                              <div className={styles.primaryLink}>
                                <InvolvedSVG />
                                <div>
                                  <p
                                    className={`text-primary text-base font-medium ${styles.involved}`}
                                  >
                                    Get involved
                                  </p>
                                  <p className="text-hint text-sm max-w-xs">
                                    Know how to involve with Litmus Community
                                  </p>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                        <div>
                          <Link href="/adopters">
                            <a>
                              <div className={`${styles.primaryLink} mt-4`}>
                                <AdoptersSVG />
                                <div>
                                  <p
                                    className={`text-primary text-base font-medium ${styles.adopters}`}
                                  >
                                    End User Adopters
                                  </p>
                                  <p className="text-hint text-sm max-w-xs">
                                    Learn how innovative companies are using
                                    LitmusChaos
                                  </p>
                                </div>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className={styles.subMenuItemCont}>
                        <div>
                          <div className="relative mb-2">
                            <Image
                              src="/navbar/community-cta.png"
                              alt="Litmus Incubation"
                              width={300}
                              height={190}
                            />
                          </div>
                          <TextLink
                            href="https://www.cncf.io/blog/2022/01/11/litmuschaos-becomes-a-cncf-incubating-project/"
                            external
                          >
                            Read Announcement
                          </TextLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <Link href="/blog">
                    <a
                      className={`text-hint hover:text-primary transition-all text-xs lg:text-sm font-medium ${styles.navLink}`}
                    >
                      Blog
                    </a>
                  </Link>
                </li>
              </ul>
              <RegularButton
                external
                href="https://github.com/litmuschaos/litmus"
                className="z-10 ml-4 lg:ml-6"
              >
                <span className="flex items-center text-xs lg:text-sm">
                  <GithubButton />
                  Get Started
                </span>
              </RegularButton>
            </div>
            <div
              className={`${styles.hamMenu} ${
                isNavbarOpened ? styles.hamOpen : ""
              }`}
              onClick={OpenNavbar}
            >
              <span></span>
              <span></span>
            </div>
          </nav>
        </Container>
        {isNavbarOpened ? (
          <ContainerFluid className={styles.navbarMobileContFluid}>
            <Container className={styles.navbarMobileCont}>
              <div className={styles.linkMainCont}>
                <ul className={styles.mobileNavbarUL}>
                  <li>
                    <Link href="/enterprise">
                      <a>
                        <span>
                          Enterprise
                          <MobileArrows />
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li onClick={SetDocs}>
                    <span>
                      Documentation
                      <MobileArrows />
                    </span>
                  </li>
                  <li>
                    <Link href="https://hub.litmuschaos.io/">
                      <a target="_blank" rel="noopener noreferrer">
                        <span>
                          ChaosHub
                          <MobileArrows />
                        </span>
                      </a>
                    </Link>
                  </li>
                  <li onClick={SetCommunity}>
                    <span>
                      Community
                      <MobileArrows />
                    </span>
                  </li>
                  <li onClick={() => openNavbar(false)}>
                    <Link href="/blog">
                      <a>
                        <span>
                          Blog
                          <MobileArrows />
                        </span>
                      </a>
                    </Link>
                  </li>
                </ul>
                {docsOpen ? (
                  <div className={styles.openMobileMenuCont}>
                    <span className={styles.backToggle} onClick={SetDocs}>
                      <MobileArrowBack />
                      Documentation
                    </span>
                    <div className={styles.dropDownContMobile}>
                      <Link href="https://docs.litmuschaos.io/">
                        <a target="_blank" rel="noopener noreferrer">
                          <div className={`flex py-4 items-center`}>
                            <DocumentationSVG />
                            <div className="ml-2">
                              <p
                                className={`text-primary text-base font-medium ${styles.documentation}`}
                              >
                                Documentation
                              </p>
                              <p className="text-hint text-sm max-w-xs">
                                Start Chaos Engineering with LitmusChaos
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                      <table className="w-full mt-4">
                        <thead>
                          <tr>
                            <tr>
                              <th className="text-sm text-disabled font-medium">
                                GET STARTED
                              </th>
                            </tr>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/getting-started/installation/#prerequisites">
                                <a
                                  className="w-full block py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Pre-requisites
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/getting-started/installation/">
                                <a
                                  className="w-full block py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Installation
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/getting-started/run-your-first-workflow/">
                                <a
                                  className="w-full block py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Create Experiments
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/user-guides/observability-set-up/">
                                <a
                                  className="w-full block py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Observe Experiments
                                </a>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table className="w-full mt-4">
                        <thead>
                          <tr>
                            <tr>
                              <th className="text-sm text-disabled font-medium">
                                POPULAR TOPICS
                              </th>
                            </tr>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/concepts/gitops/">
                                <a
                                  className="w-full flex py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <GitOPS /> GitOps
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/user-guides/overview/">
                                <a
                                  className="w-full flex py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <UserGuideSVG /> Advanced User Guides
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              {/* <Link href="https://docs.litmuschaos.io/docs/concepts/litmus/"> */}
                              <Link href="https://docs.litmuschaos.io/docs/architecture/overview/">
                                <a
                                  className="w-full flex py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ArchitectureSVg /> Design & Architecture
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/concepts/workflow-statistics/">
                                <a
                                  className="w-full flex py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ObservablitySVG /> Observability
                                </a>
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className={styles.secondaryLinks}>
                        <table className="w-full">
                          <thead>
                            <tr>
                              <tr>
                                <th className="text-sm text-disabled font-medium">
                                  LEARN
                                </th>
                              </tr>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link href="https://docs.litmuschaos.io/docs/introduction/other-links/">
                                  <a
                                    className="w-full flex py-1 text-sm text-hint"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ResourcesSVG /> Resources
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table className="w-full mt-4">
                          <thead>
                            <tr>
                              <tr>
                                <th className="text-sm text-disabled font-medium">
                                  API
                                </th>
                              </tr>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <Link href="https://litmuschaos.github.io/litmus/graphql/v2.0.0/api.html">
                                  <a
                                    className="w-full flex py-1 text-sm text-hint"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <ApiSVG /> Full API reference
                                  </a>
                                </Link>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <Link href="https://github.com/litmuschaos/litmus-go">
                                  <a
                                    className="w-full flex py-1 text-sm text-hint"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <SdkSVG /> SDK
                                  </a>
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {communityOpen ? (
                  <div className={styles.openMobileMenuCont}>
                    <span className={styles.backToggle} onClick={SetCommunity}>
                      <MobileArrowBack />
                      Community
                    </span>
                    <div className={styles.dropDownContMobile}>
                      <Link href="/community">
                        <a>
                          <div className={`flex py-4 items-center`}>
                            <InvolvedSVG />
                            <div className="ml-2">
                              <p
                                className={`text-primary text-base font-medium ${styles.documentation}`}
                              >
                                Get involved
                              </p>
                              <p className="text-hint text-sm max-w-xs">
                                Know how to involve with Litmus Community
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                      <Link href="/adopters">
                        <a>
                          <div className={`flex py-4 items-center`}>
                            <AdoptersSVG />
                            <div className="ml-2">
                              <p
                                className={`text-primary text-base font-medium ${styles.documentation}`}
                              >
                                End User Adopters
                              </p>
                              <p className="text-hint text-sm max-w-xs">
                                Learn how innovative companies are using
                                LitmusChaos
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                      <div className={styles.secondaryLinks}>
                        <span className="text-sm text-disabled font-medium block mb-4">
                          COMMUNITY UPDATES
                        </span>
                        <div className={styles.mobileSecondaryLinkCont}>
                          <Image
                            src="/navbar/community-cta.png"
                            alt="Litmus Incubation"
                            width={300}
                            height={190}
                          />
                        </div>
                        <TextLink
                          href="https://www.cncf.io/blog/2022/01/11/litmuschaos-becomes-a-cncf-incubating-project/"
                          external
                          className="mt-3 block"
                        >
                          Read Announcement
                        </TextLink>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </Container>
          </ContainerFluid>
        ) : (
          ""
        )}
      </div>
      <div className="sticky top-[70px] z-40 py-4 px-2 bg-[#979cd9]">
        <Container className="flex items-center justify-center">
          <p className="text-white font-semibold text-xs md:text-sm text-center">
            LitmusChaosCon 2024 on September 12th!{" "}
            <Link href="https://community.cncf.io/events/details/cncf-virtual-project-events-2024-hosted-by-cncf-presents-litmuschaoscon-virtual/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Register now(Free)
              </a>
            </Link>{" "}
            or{" "}
            <Link href="https://sessionize.com/litmuschaoscon/">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                submit a talk proposal
              </a>
            </Link>{" "}
            submit a talk proposal(last date: June 24th)
          </p>
        </Container>
      </div>
    </>
  )
}

export { TopNavbar }
