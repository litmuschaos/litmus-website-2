import { GithubButton } from "@components/SVG/NavbarSVG"
import { OutlinedButton, RegularButton } from "@includes/CTA"
import styles from "@includes/scss/Hero.module.scss"
import { HeroHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const url = "https://api.github.com/repos/litmuschaos/litmus"
  const [gitHub, setGitHub] = useState({
    stars: "",
    watchers: "",
    forks: ""
  })

  useEffect(() => {
    ;(async () => {
      await fetch(url)
        .then(response => response.json())
        .then(data => {
          setGitHub({
            stars: data.stargazers_count,
            watchers: data.subscribers_count,
            forks: data.forks_count
          })
        })
    })()
  }, [])

  const GitHubButton = ({ icon, name, count, href }) => {
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
          <span>{count}</span>
        </div>
      </div>
    )
  }

  return (
    <Container className={styles.heroCont}>
      <div className={styles.textCont}>
        <div className={styles.incubationBar}>
          <div className={styles.gradBar}></div>
          <div className={styles.itemCont}>
            <span className={styles.incubationText}>
              <svg
                width={21}
                height={27}
                viewBox="0 0 21 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 0.245117H0V24.7663C0 25.8644 0.881439 26.7545 1.96875 26.7545H19.0312C20.1186 26.7545 21 25.8644 21 24.7663V0.245117Z"
                  fill="#878EDE"
                />
                <path
                  d="M3.23096 3.47754H6.46173V10.9131H3.23096V3.47754Z"
                  fill="#4028A0"
                />
                <path
                  d="M3.23096 10.2666H6.46173V23.5213H3.23096V10.2666Z"
                  fill="white"
                />
                <path
                  d="M8.07715 20.2891H17.7695V23.5219H8.07715V20.2891Z"
                  fill="white"
                />
              </svg>
              Litmus is in incubation
            </span>
            <span className={styles.divider}></span>
            <span className={styles.incubationLink}>
              <Link href="https://www.cncf.io/blog/2022/01/11/litmuschaos-becomes-a-cncf-incubating-project/">
                <a
                  className="flex items-center text-xs md:text-sm font-medium text-litmus gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  See Announcement
                  <svg
                    width={22}
                    height={21}
                    viewBox="0 0 22 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.72705 10.5645H17.9264"
                      stroke="#5B44BA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1177 4.93945L17.9265 10.5645L12.1177 16.1895"
                      stroke="#5B44BA"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Link>
            </span>
          </div>
        </div>
        <HeroHead hero>
          <span className="block">Cloud Native</span>
          <span className="block">Chaos Engineering</span>
          <span className="block">platform</span>
        </HeroHead>
        <Paragraph hint className="mt-6 text-center lg:text-left">
          Litmus is an open source Chaos Engineering platform that enables teams
          to identify weaknesses & potential outages in infrastructures by
          inducing chaos tests in a controlled way.
        </Paragraph>
        <Paragraph hint className="mt-4 text-center lg:text-left">
          Developers & SREs can simply execute Chaos Engineering with Litmus as
          it is easy to use, based on modern chaos engineering practices &
          community collaborated. Litmus is 100% open source & CNCF-hosted.
        </Paragraph>
        <div className="mt-4 flex gap-4 justify-center lg:justify-start">
          <RegularButton href="https://github.com/litmuschaos/litmus" external>
            <span className="flex items-center">
              <GithubButton />
              Get Started
            </span>
          </RegularButton>
          <OutlinedButton href="/community">Get Involved</OutlinedButton>
        </div>
        <div className={styles.gitContainer}>
          <GitHubButton
            icon={"github_star"}
            name={"Star"}
            count={gitHub.stars}
            href={"https://github.com/litmuschaos/litmus"}
          />
          <GitHubButton
            icon={"github_watch"}
            name={"Watch"}
            count={gitHub.watchers}
            href={"https://github.com/litmuschaos/litmus/subscription"}
          />
          <GitHubButton
            icon={"github_fork"}
            name={"Fork"}
            count={gitHub.forks}
            href={"https://github.com/litmuschaos/litmus/fork"}
          />
        </div>
      </div>
      <div className={styles.heroImg}>
        <img
          src="/landing_images/hero/hero_img.svg"
          alt="LitmusChaos"
          height={646}
          width={599}
        />
        {/* <video autoPlay muted playsInline loop>
          <source src="/landing_images/hero/hero.mp4" />
        </video> */}
      </div>
    </Container>
  )
}
export default Hero
