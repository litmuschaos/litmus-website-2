import { eventUtils } from "@components/homepage/utils/eventUtils"
import { TextLink } from "@includes/CTA"
import styles from "@includes/scss/Landing.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import { useState } from "react"
import Link from "next/link"

const Slide = ({ events, count, changeState }) => {
  const [touchStart, setTouchStart] = useState({})
  const handleTouchStart = e => {
    const firstTouchEvent = e.touches[0]
    const location = {
      x: firstTouchEvent.clientX,
      y: firstTouchEvent.clientY
    }
    setTouchStart(location)
  }

  const handleTouchEnd = e => {
    const firstTouchEvent = e.changedTouches[0]
    const location = {
      x: firstTouchEvent.clientX,
      y: firstTouchEvent.clientY
    }
    const differences = {
      x: touchStart.x - location.x,
      y: touchStart.y - location.y
    }
    if (differences.x >= 0.5) {
      changeState("prev")
    } else if (differences.x <= -0.5) {
      changeState("next")
    }
  }
  return (
    <div className={"flex items-center w-full"} style={{ width: "96%" }}>
      <div className={`${styles.communitySlideShow} py-8 z-0`}>
        <div
          className={`items-center ${styles.communitySlider}`}
          style={{ transform: `translate3d(${-count * 100}%, 0, 0)` }}
        >
          {events.map((event, idx) => {
            return (
              <div
                className={`${styles.communitySlide} px-2`}
                key={idx}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <div className={"flex flex-col-reverse lg:flex-row w-full"}>
                  <div
                    className={"w-full lg:w-2/5 lg:px-12"}
                    style={{ whiteSpace: "pre-line" }}
                  >
                    <p
                      style={{ color: "#5B44BA" }}
                      className={"text-xl font-medium"}
                    >
                      {event.type}
                    </p>
                    <BodyHead className={"my-8"}>{event.title}</BodyHead>
                    <Paragraph className={"mb-4"}>{event.content}</Paragraph>
                    <TextLink href={event.link} external>
                      {event.link_text}
                    </TextLink>
                  </div>
                  <div className={"w-full lg:w-3/5"}>
                    <Link href={event.link}>
                      <a target={"_blank"}>
                        {" "}
                        <img
                          src={`/landing_images/community/${event.img_url}`}
                          className={"rounded-xl shadow-lg bg-blend-screen"}
                          alt="LitmusChaos"
                        />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const Navigator = ({ changePrevState, changeNextState, count, length }) => {
  return (
    <div className={"relative w-12 z-10 hidden lg:block"}>
      <img
        src={"/landing_images/community/navArrowLeft.svg"}
        className={`absolute left-0 cursor-pointer`}
        onClick={changePrevState}
        alt="ChaosNative"
      />
      <img
        src={"/landing_images/community/navArrowRight.svg"}
        className={`absolute right-0 cursor-pointer`}
        onClick={changeNextState}
        alt="ChaosNative"
      />
      <div className={"mx-6"}>
        {[...Array(length)].map((e, i) => (
          <div
            className={`${styles.slideNavigator}`}
            key={i}
            style={{
              backgroundColor: `${count === i ? "#5B44BA" : "#BBBBBB"}`
            }}
          >
            {""}
          </div>
        ))}
      </div>
      <span className={"absolute bottom-0 left-2 text-sm text-black"}>
        {count + 1}
      </span>
      <span className={"absolute bottom-0 right-2 text-sm opacity-60"}>
        {length}
      </span>
    </div>
  )
}

const Community = () => {
  const skewBg =
    " radial-gradient(127.02% 246.32% at 62.75% 46.03%, #EB8172 16.67%, #858CDD 61.41%), radial-gradient(34.96% 33.39% at 56.66% 50%, #F19389 44.79%, rgba(133, 140, 221, 0) 83.19%), radial-gradient(13.35% 17.52% at 6.58% 67.25%, #AFE9FF 0%, #90E0FF 41.45%, rgba(144, 224, 255, 0) 100%), radial-gradient(19.75% 48.55% at 19.59% 56.88%, #B8EBFF 0%, #90E0FF 60.58%, rgba(169, 96, 238, 0) 83.24%), radial-gradient(10.9% 23.5% at 7.65% 84.98%, #A960EE 25.96%, rgba(255, 51, 61, 0) 100%), radial-gradient(42.62% 1747.98% at 47.67% 46.48%, rgba(144, 224, 255, 0.1) 50.74%, rgba(169, 96, 238, 0) 100%), radial-gradient(49.11% 87.02% at 45.83% 17.78%, #6772E5 31.7%, #55ACEE 100%), radial-gradient(35.02% 79.77% at 50.04% 16.69%, #ECB22E 19.21%, #FB9C40 54.54%), radial-gradient(18.22% 46.29% at 5.34% 39.33%, #FFCB57 41.18%, rgba(183, 120, 225, 0) 71.99%), conic-gradient(from 3.28deg at 22.11% 40.38%, rgba(169, 96, 238, 0) 0deg, #5469D4 178.27deg, rgba(136, 99, 228, 0.383199) 290.36deg, rgba(169, 96, 238, 0) 360deg), radial-gradient(34.48% 62.34% at 21.35% 32.43%, #FC9987 0%, #AFE9FF 100%)"
  const [curr, setCurr] = useState(0)
  const delay = 4500

  // useEffect(() => {
  //   setTimeout(
  //     () =>
  //       setCurr(prevIndex =>
  //         prevIndex === eventUtils.length - 1 ? 0 : prevIndex + 1
  //       ),
  //     delay
  //   )
  //   return () => {}
  // }, [curr])

  const handlePrevState = () => {
    if (curr === 0) {
      setCurr(eventUtils.length - 1)
    } else {
      setCurr(curr - 1)
    }
  }

  const handleNextState = () => {
    if (curr === eventUtils.length - 1) {
      setCurr(0)
    } else {
      setCurr(curr + 1)
    }
  }

  const handleSwipe = action => {
    if (action === "prev") {
      if (curr === eventUtils.length - 1) {
        setCurr(0)
      } else {
        setCurr(curr + 1)
      }
    } else if (action === "next") {
      if (curr === 0) {
        setCurr(eventUtils.length - 1)
      } else {
        setCurr(curr - 1)
      }
    }
  }

  return (
    <>
      <div className={"my-24"}>
        <Container>
          <BodyHead>
            <span style={{ color: "#696f8c" }}>Inside</span> Litmus Community
          </BodyHead>
          <Paragraph className={"my-4"}>
            Sneak peek into activities going inside ever growing Litmus
            community
          </Paragraph>
          <div className={"flex items-center justify-between"}>
            <Navigator
              changePrevState={handlePrevState}
              changeNextState={handleNextState}
              count={curr}
              length={eventUtils.length}
            />
            <Slide events={eventUtils} count={curr} changeState={handleSwipe} />
          </div>
        </Container>
      </div>
    </>
  )
}

export default Community
