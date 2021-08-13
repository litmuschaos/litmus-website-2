const { Container } = require("@layouts/Container")
import {
  AdoptersSVG,
  ApiSVG,
  ArchitectureSVg,
  DocumentationSVG,
  GithubButton,
  GitOPS,
  InvolvedSVG,
  MobileArrowBack,
  MobileArrows,
  ObservablitySVG,
  ResourcesSVG,
  SdkSVG,
  TutorialsSVG,
  UserGuideSVG
} from "@components/SVG/NavbarSVG"
import styles from "@includes/scss/Navbar.module.scss"
import { ContainerFluid } from "@layouts/Container"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RegularButton, TextLink } from "./CTA"

const TopNavbar = () => {
  const [isNavbarOpened, openNavbar] = useState(false)
  const [isNavbarScrolled, setNavbar] = useState(false)
  const [docsOpen, setDocs] = useState(false)
  const [tutorialOpen, setTutorial] = useState(false)
  const [communityOpen, setCommunity] = useState(false)
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
    setTutorial(false)
  }
  const SetDocs = () => setDocs(!docsOpen)
  const SetTutorial = () => setTutorial(!tutorialOpen)
  const SetCommunity = () => setCommunity(!communityOpen)
  useEffect(() => {
    window.addEventListener("scroll", changeBackground)
    isNavbarOpened
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto")
  })

  return (
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
          </div>
          <div className="items-center hidden md:flex">
            <ul className={styles.navLinks}>
              <li>
                <span
                  className={`text-hint transition-all text-sm lg:text-base font-medium cursor-pointer ${styles.navLink}`}
                >
                  Docs
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
                              <Link href="https://docs.litmuschaos.io/docs/getting-started/installation#prerequisites">
                                <a
                                  className="text-hint text-sm hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  Pre-requisites
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/getting-started/installation">
                                <a
                                  className="text-hint text-sm hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  Installation
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/getting-started/run-your-first-workflow">
                                <a
                                  className="text-hint text-sm hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  Create Workflows
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/concepts/observe-workflow">
                                <a
                                  className="text-hint text-sm hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  Observe Workflows
                                </a>
                              </Link>
                            </td>
                          </tr>
                        </table>
                        <table className={styles.docsDropDown}>
                          <tr>
                            <th className="text-disabled text-sm font-normal">
                              POPULAR TOPICS
                            </th>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/concepts/gitops">
                                <a
                                  className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  <GitOPS />
                                  GitOps
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/user-guides/overview">
                                <a
                                  className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  <UserGuideSVG />
                                  Advanced User Guides
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/concepts/litmus">
                                <a
                                  className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  <ArchitectureSVg />
                                  Design & Architecture
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/concepts/workflow-statistics">
                                <a
                                  className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  <ObservablitySVG />
                                  Observability
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
                            <Link href="https://docs.litmuschaos.io/tutorials">
                              <a
                                className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                <TutorialsSVG />
                                Tutorials
                              </a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="https://docs.litmuschaos.io/docs/introduction/other-links">
                              <a
                                className="text-hint text-sm flex items-center hover:text-primary transition-all"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                <ResourcesSVG />
                                Resources
                              </a>
                            </Link>
                          </td>
                        </tr>
                      </table>
                      <table className={styles.docsDropDown}>
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
                                rel="noopener norefferer"
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
                              <a className="text-hint text-sm flex items-center hover:text-primary transition-all">
                                <SdkSVG />
                                SDK
                              </a>
                            </Link>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li>
                <span
                  className={`text-hint transition-all text-sm lg:text-base cursor-pointer font-medium ${styles.navLink}`}
                >
                  Tutorials
                </span>
                <div className={styles.dropDownDesktop}>
                  <div className={styles.overHead}></div>
                  <div className={styles.dropDownBody}>
                    <div className={`${styles.mainMenuItemCont}`}>
                      <Link href="https://docs.litmuschaos.io/tutorials">
                        <a target="_blank" rel="noopener norefferer">
                          <div className={styles.primaryLink}>
                            <TouchSVG />
                            <div>
                              <p
                                className={`text-primary text-base font-medium ${styles.tutorials}`}
                              >
                                All Tutorials
                              </p>
                              <p className="text-hint text-sm max-w-xs">
                                Collection of guided, hands-on tutorials to
                                learn how to use Litmus
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                      <div className="mt-6">
                        <p className="text-sm text-disabled">
                          FEATURED TUTORIALS
                        </p>
                        <div className="flex gap-4 mt-2">
                          <Link href="#">
                            <a>
                              <div className="max-w-xs">
                                <div className="relative max-w-sm">
                                  <img
                                    src="/navbar/getting_started.png"
                                    height={120}
                                    width={257}
                                    alt="Getting Started"
                                    className="w-full"
                                  />
                                </div>
                                <p className="text-base font-medium text-primary mt-4">
                                  LitmusChaos: Getting Started
                                </p>
                                <p className="text-sm text-hint max-w-xs mt-2">
                                  Installation of Litmus, Portal Set Up, Chaos
                                  Execution with Podtato Head Chaos
                                </p>
                              </div>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <div className="max-w-xs">
                                <div className="relative max-w-sm">
                                  <img
                                    src="/navbar/workflow.png"
                                    height={120}
                                    width={257}
                                    alt="Getting Started"
                                    className="w-full"
                                  />
                                </div>
                                <p className="text-base font-medium text-primary mt-4">
                                  Creating Custom Chaos Workflows
                                </p>
                                <p className="text-sm text-hint max-w-xs mt-2">
                                  Usage MyHub and Asset Discovery to create
                                  Custom Workflows
                                </p>
                              </div>
                            </a>
                          </Link>
                          <Link href="#">
                            <a>
                              <div className="max-w-xs">
                                <div className="relative max-w-sm">
                                  <img
                                    src="/navbar/gitops.png"
                                    height={120}
                                    width={257}
                                    alt="Getting Started"
                                    className="w-full"
                                  />
                                </div>
                                <p className="text-base font-medium text-primary mt-4">
                                  Integrating with GitOps
                                </p>
                                <p className="text-sm text-hint max-w-xs mt-2">
                                  Usage of Git as Golden Copy for Chaos
                                  Workflows and Automated Trigger of Chaos
                                </p>
                              </div>
                            </a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li> */}
              {/* Temporary Link */}
              <li>
                <Link href="https://docs.litmuschaos.io/tutorials/">
                  <a
                    className={`text-hint hover:text-primary transition-all text-sm lg:text-base font-medium ${styles.navLink}`}
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    Tutorials
                  </a>
                </Link>
              </li>
              {/* Temporary Link */}
              <li>
                <Link href="https://hub.litmuschaos.io/">
                  <a
                    className={`text-hint hover:text-primary transition-all text-sm lg:text-base font-medium ${styles.navLink}`}
                    target="_blank"
                    rel="noopener norefferer"
                  >
                    ChaosHub
                  </a>
                </Link>
              </li>
              <li>
                <span
                  className={`text-hint transition-all text-sm lg:text-base font-medium cursor-pointer ${styles.navLink}`}
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
                            src="/navbar/community-cta.jpeg"
                            alt="Chaos Engineering Meetup"
                            width={300}
                            height={190}
                          />
                        </div>
                        <TextLink
                          href="https://www.meetup.com/Chaos-Engineering-Meetup-Group/events/280029259/"
                          external
                        >
                          Register Now
                        </TextLink>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <RegularButton
              external
              href="https://github.com/litmuschaos/litmus"
              className="z-10 ml-6 lg:ml-8"
            >
              <span className="flex items-center">
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
                <li onClick={SetDocs}>
                  <span>
                    Docs
                    <MobileArrows />
                  </span>
                </li>
                {/* <li onClick={SetTutorial}>
                  <span>
                    Tutorials
                    <MobileArrows />
                  </span>
                </li> */}
                <li>
                  <Link href="https://docs.litmuschaos.io/tutorials/">
                    <a target="_blank" rel="noopener norefferer">
                      <span>
                        Tutorials
                        <MobileArrows />
                      </span>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://hub.litmuschaos.io/">
                    <a target="_blank" rel="noopener norefferer">
                      <span>
                        Chaoshub
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
              </ul>
              {docsOpen ? (
                <div className={styles.openMobileMenuCont}>
                  <span className={styles.backToggle} onClick={SetDocs}>
                    <MobileArrowBack />
                    Docs
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
                            <Link href="https://docs.litmuschaos.io/docs/getting-started/installation#prerequisites">
                              <a
                                className="w-full block py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                Pre-requisites
                              </a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="https://docs.litmuschaos.io/docs/getting-started/installation">
                              <a
                                className="w-full block py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                Installation
                              </a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="https://docs.litmuschaos.io/docs/getting-started/run-your-first-workflow">
                              <a
                                className="w-full block py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                Create Workflows
                              </a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="https://docs.litmuschaos.io/docs/concepts/observe-workflow">
                              <a
                                className="w-full block py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                Observe Workflows
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
                            <Link href="https://docs.litmuschaos.io/docs/concepts/gitops">
                              <a
                                className="w-full flex py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                <GitOPS /> GitOps
                              </a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="https://docs.litmuschaos.io/docs/user-guides/overview">
                              <a
                                className="w-full flex py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                <UserGuideSVG /> Advanced User Guides
                              </a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="https://docs.litmuschaos.io/docs/concepts/litmus">
                              <a
                                className="w-full flex py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
                              >
                                <ArchitectureSVg /> Design & Architecture
                              </a>
                            </Link>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Link href="https://docs.litmuschaos.io/docs/concepts/workflow-statistics">
                              <a
                                className="w-full flex py-1 text-sm text-hint"
                                target="_blank"
                                rel="noopener norefferer"
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
                              <Link href="https://docs.litmuschaos.io/tutorials">
                                <a
                                  className="w-full flex py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener norefferer"
                                >
                                  <TutorialsSVG /> Tutorials
                                </a>
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <Link href="https://docs.litmuschaos.io/docs/introduction/other-links">
                                <a
                                  className="w-full flex py-1 text-sm text-hint"
                                  target="_blank"
                                  rel="noopener norefferer"
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
                                  rel="noopener norefferer"
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
                                  rel="noopener norefferer"
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
                        UPCOMING EVENTS
                      </span>
                      <div className={styles.mobileSecondaryLinkCont}>
                        <Image
                          src="/navbar/community-cta.jpeg"
                          alt="Chaos Engineering Meetup"
                          width={300}
                          height={190}
                        />
                      </div>
                      <TextLink
                        href="https://www.meetup.com/Chaos-Engineering-Meetup-Group/events/280029259/"
                        external
                        className="mt-3 block"
                      >
                        Register
                      </TextLink>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              {/* {tutorialOpen ? (
                <div className={styles.openMobileMenuCont}>
                  <span className={styles.backToggle} onClick={SetTutorial}>
                    <MobileArrowBack />
                    Tutorials
                  </span>
                  <div className={styles.dropDownContMobile}>
                    <Link href="https://docs.litmuschaos.io/tutorials">
                      <a target="_blank" rel="noopener norefferer">
                        <div className={`flex py-4 items-center`}>
                          <TouchSVG />
                          <div className="ml-2">
                            <p
                              className={`text-primary text-base font-medium ${styles.documentation}`}
                            >
                              Tutorials
                            </p>
                            <p className="text-hint text-sm max-w-xs">
                              Collection of guided, hands-on tutorials to learn
                              how to use Litmus
                            </p>
                          </div>
                        </div>
                      </a>
                    </Link>
                    <span className="text-sm text-disabled font-medium block my-4">
                      FEATURED TUTORIALS
                    </span>
                    <div className="grid gap-8 mt-2">
                      <Link href="#">
                        <a>
                          <div className="w-full">
                            <div className="relative max-w-sm">
                              <img
                                src="/navbar/getting_started.png"
                                height={120}
                                width={257}
                                alt="Getting Started"
                                className="w-full"
                              />
                            </div>
                            <p className="text-base font-medium text-primary mt-4">
                              LitmusChaos: Getting Started
                            </p>
                            <p className="text-sm text-hint mt-2">
                              Installation of Litmus, Portal Set Up, Chaos
                              Execution with Podtato Head Chaos
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href="#">
                        <a>
                          <div className="w-full">
                            <div className="relative max-w-sm">
                              <img
                                src="/navbar/workflow.png"
                                height={120}
                                width={257}
                                alt="Getting Started"
                                className="w-full"
                              />
                            </div>
                            <p className="text-base font-medium text-primary mt-4">
                              Creating Custom Chaos Workflows
                            </p>
                            <p className="text-sm text-hint mt-2">
                              Usage MyHub and Asset Discovery to create Custom
                              Workflows
                            </p>
                          </div>
                        </a>
                      </Link>
                      <Link href="#">
                        <a>
                          <div className="w-full">
                            <div className="relative max-w-sm">
                              <img
                                src="/navbar/gitops.png"
                                height={120}
                                width={257}
                                alt="Getting Started"
                                className="w-full"
                              />
                            </div>
                            <p className="text-base font-medium text-primary mt-4">
                              Integrating with GitOps
                            </p>
                            <p className="text-sm text-hint mt-2">
                              Usage of Git as Golden Copy for Chaos Workflows
                              and Automated Trigger of Chaos
                            </p>
                          </div>
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )} */}
            </div>
          </Container>
        </ContainerFluid>
      ) : (
        ""
      )}
    </div>
  )
}

export { TopNavbar }
