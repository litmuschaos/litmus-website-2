import styles from "@includes/scss/Community.module.scss"
import { HeroHead, Paragraph } from "@includes/Texts"
import { Container, SkewedGradient } from "@layouts/Container"
import { bgcolor1 } from "@layouts/gradColor"
import Image from "next/image"

const CommunityHero = () => {
  return (
    <>
      <Container className="flex gap-8 items-center justify-between flex-col md:flex-row md:pt-16 py-8 md:pb-0">
        <div className={styles.communityHeadCont}>
          <HeroHead className="text-center md:text-left">
            Get involved with community!
          </HeroHead>
          <Paragraph hint className="mt-4 text-center md:text-left">
            This is the starting point for joining and contributing to the
            LitmusChaos community - improving docs, improving code, discussing
            new features and use cases etc. For all collaboration and
            communication going on in all LitmusChaos projects, please read and
            follow our Code of Conduct.
          </Paragraph>
        </div>
        <div className={styles.communityHeroImg}>
          <Image
            src="/communityPage/community-hero.png"
            alt="LitmusChaos"
            height={505}
            width={505}
            draggable={false}
          />
        </div>
      </Container>
      <div className="w-full relative z-0 md:-mt-20">
        <SkewedGradient color={bgcolor1} />
      </div>
    </>
  )
}

export default CommunityHero
