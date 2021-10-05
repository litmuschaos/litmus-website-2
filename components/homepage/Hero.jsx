import { GithubButton } from "@components/SVG/NavbarSVG"
import { OutlinedButton, RegularButton } from "@includes/CTA"
import styles from "@includes/scss/Hero.module.scss"
import { HeroHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Image from "next/image"
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
        <Image
          src="/landing_images/hero/hero_img.png"
          alt="LitmusChaos"
          height={580}
          width={580}
        />
        {/* <video autoPlay muted playsInline loop>
          <source src="/landing_images/hero/hero.mp4" />
        </video> */}
      </div>
    </Container>
  )
}
export default Hero
