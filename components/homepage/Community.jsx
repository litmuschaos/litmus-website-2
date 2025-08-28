import React from "react"
import { eventUtils } from "@components/homepage/utils/eventUtils"
import { TextLink, RegularButton } from "@includes/CTA"
import styles from "@includes/scss/Hero.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import { useState } from "react"
import Link from "next/link"

const CommunityCard = ({ events, changePrevState, changeNextState, count }) => {
  const [touchStart, setTouchStart] = useState({})
  const [isMobile, setIsMobile] = useState(false)
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
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
    if (differences.x >= 50) {
      changeNextState()
    } else if (differences.x <= -50) {
      changePrevState()
    }
  }

  return (
    <div className="relative">
      {/* Arrow Navigation */}
      <div
        className={`${styles.prevQuote} shadow-lg hidden xl:flex`}
        onClick={changePrevState}
      >
        <img
          src="/landing_images/testimonies/arrow_left.svg"
          alt="Previous"
          className="h-5"
        />
      </div>
      <div
        className={`${styles.nextQuote} shadow-lg hidden xl:flex`}
        onClick={changeNextState}
      >
        <img
          src="/landing_images/testimonies/arrow_right.svg"
          alt="Next"
          className="h-5"
        />
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out" 
             style={{ transform: `translateX(-${count * (isMobile ? 100 : 66.67)}%)` }}
             onTouchStart={handleTouchStart}
             onTouchEnd={handleTouchEnd}>
          {events.map((event, idx) => (
            <div key={idx} className="flex-shrink-0 w-full lg:w-2/3 px-4 md:pl-0 md:pr-4">
              <div className="relative rounded-xl shadow-lg h-[450px] mb-2 overflow-hidden">
                <Link href={event.link}>
                  <a target="_blank">
                    <img
                      src={`/landing_images/community/${event.img_url}`}
                      className="w-full h-full object-cover"
                      alt="LitmusChaos"
                    />
                  </a>
                </Link>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-medium mb-2 text-purple-300">
                      {event.type}
                    </p>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{event.title}</h3>
                    <p className="text-gray-200 mb-4 text-sm line-clamp-2">{event.content}</p>
                    <div className="inline-block">
                      <TextLink href={event.link} external className="text-white hover:text-purple-300">
                        {event.link_text}
                      </TextLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const DotNavigator = ({ handleChange, count, length }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {[...Array(length)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => handleChange(idx)}
          className={`w-3 h-3 rounded-full transition-colors duration-200 ${
            idx === count ? "bg-purple-600" : "bg-gray-300"
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  )
}

const Community = () => {
  const skewBg =
    " radial-gradient(127.02% 246.32% at 62.75% 46.03%, #EB8172 16.67%, #858CDD 61.41%), radial-gradient(34.96% 33.39% at 56.66% 50%, #F19389 44.79%, rgba(133, 140, 221, 0) 83.19%), radial-gradient(13.35% 17.52% at 6.58% 67.25%, #AFE9FF 0%, #90E0FF 41.45%, rgba(144, 224, 255, 0) 100%), radial-gradient(19.75% 48.55% at 19.59% 56.88%, #B8EBFF 0%, #90E0FF 60.58%, rgba(169, 96, 238, 0) 83.24%), radial-gradient(10.9% 23.5% at 7.65% 84.98%, #A960EE 25.96%, rgba(255, 51, 61, 0) 100%), radial-gradient(42.62% 1747.98% at 47.67% 46.48%, rgba(144, 224, 255, 0.1) 50.74%, rgba(169, 96, 238, 0) 100%), radial-gradient(49.11% 87.02% at 45.83% 17.78%, #6772E5 31.7%, #55ACEE 100%), radial-gradient(35.02% 79.77% at 50.04% 16.69%, #ECB22E 19.21%, #FB9C40 54.54%), radial-gradient(18.22% 46.29% at 5.34% 39.33%, #FFCB57 41.18%, rgba(183, 120, 225, 0) 71.99%), conic-gradient(from 3.28deg at 22.11% 40.38%, rgba(169, 96, 238, 0) 0deg, #5469D4 178.27deg, rgba(136, 99, 228, 0.383199) 290.36deg, rgba(169, 96, 238, 0) 360deg), radial-gradient(34.48% 62.34% at 21.35% 32.43%, #FC9987 0%, #AFE9FF 100%)"
  const [curr, setCurr] = useState(0)
  const delay = 2000

  React.useEffect(() => {
    const timer = setTimeout(
      () =>
        setCurr(prevIndex =>
          prevIndex === eventUtils.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )
    return () => clearTimeout(timer)
  }, [curr])

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


  return (
    <Container className="py-20 md:py-28 lg:pt-20 lg:pb-28">
      <BodyHead className="text-center mb-4">
        Inside our growing community
      </BodyHead>
      <Paragraph className="text-center mb-12">
        Discover the events, projects and energy behind our Litmus community
      </Paragraph>
      
      <CommunityCard
        events={eventUtils}
        changePrevState={handlePrevState}
        changeNextState={handleNextState}
        count={curr}
      />
      
      <DotNavigator
        handleChange={state => setCurr(state)}
        count={curr}
        length={eventUtils.length}
      />

      {/* Join Our Community Button */}
      <div className="flex justify-center mt-12">
        <RegularButton href="https://kubernetes.slack.com/?redir=%2Farchives%2FCNXNB0ZTN" external>
          <span className="flex items-center gap-2">
            Join our community
            <svg
              width="7"
              height="13"
              viewBox="0 0 7 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.1626L6 6.1626L1 11.1626"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </RegularButton>
      </div>
    </Container>
  )
}

export default Community
