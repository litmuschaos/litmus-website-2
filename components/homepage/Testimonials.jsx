import { testimonialUtils } from "@components/homepage/utils/testimonialUtils"
import styles from "@includes/scss/Hero.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import { OutlinedButton } from "@includes/CTA"
import Link from "next/link"
import { useState, useEffect } from "react"

const logos = ["orange", "red_hat", "kitopi", "container_solutions"]

const TestimonialCard = ({
  testimonials,
  changePrevState,
  changeNextState,
  count
}) => {
  return (
    <div className={`${styles.wrapper}`}>
      <div
        className={`${styles.prevQuote} shadow-lg hidden xl:flex`}
        onClick={() => changePrevState()}
      >
        <img
          src={"/landing_images/testimonies/arrow_left.svg"}
          alt={"litmuschaos"}
          className={"h-5"}
        />
      </div>
      <div
        className={`${styles.nextQuote} shadow-lg hidden xl:flex`}
        onClick={() => changeNextState()}
      >
        <img
          src={"/landing_images/testimonies/arrow_right.svg"}
          alt={"litmuschaos"}
          className={"h-5"}
        />
      </div>

      {testimonials.map((testimony, idx) => {
        return (
          <Link href={testimony.link} scroll={testimony.link !== ""} key={idx}>
            <a
              className={`${
                testimony.link === "" ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <div
                className={`${
                  count === idx ? styles.testimonyCard : "hidden"
                } relative flex-col lg:flex-row shadow-2xl `}
              >
                <div
                  className={`${styles.cardLeft} w-full lg:w-3/5 rounded-bl-none`}
                  style={{ background: testimony.color }}
                >
                  <div className="px-6 py-10 lg:px-12 lg:py-20">
                    <Paragraph dark className="mb-12 md:mb-24">
                      {testimony.content}
                    </Paragraph>
                    <div className={"text-white flex items-center"}>
                      <img
                        src={`/landing_images/testimonies/${testimony.img}`}
                        alt={testimony.img}
                        className={"mr-4"}
                      />
                      <div>
                        <Paragraph bold dark>
                          {testimony.user}
                        </Paragraph>
                        <Paragraph dark>{testimony.desig}</Paragraph>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`pt-12 pb-20 lg:pb-12 px-6 w-full lg:w-2/5 lg:h-60`}
                >
                  <p
                    style={{
                      color: `${
                        testimony.type === "none" ? "#EE0000" : testimony.color
                      }`
                    }}
                    className={
                      "text-lg md:text-xl xl:text-2xl lg:pr-20 font-medium"
                    }
                  >
                    {testimony.title}
                  </p>
                  {testimony.type === "none" ? (
                    <></>
                  ) : (
                    <div
                      className={
                        "absolute w-full lg:w-2/5 bottom-8 left-0 lg:left-auto lg:right-4 flex items-center justify-between"
                      }
                    >
                      <hr
                        className={"hidden md:block w-1/2 ml-10 mr-10"}
                        style={{ backgroundColor: "#BBBBBB", height: "2px" }}
                      />
                      <div
                        className={
                          "font-medium md:w-1/2 pr-2 ml-6 lg:ml-12 flex text-center"
                        }
                      >
                        {testimony.type === "blog"
                          ? "Read Blog"
                          : testimony.type === "case-study"
                          ? "Read Case Study"
                          : ""}
                        &nbsp;
                        <div>&gt;</div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </a>
          </Link>
        )
      })}
    </div>
  )
}

const Navigator = ({ handleChange, count }) => {
  return (
    <div className={"flex justify-evenly items-center"}>
      {logos.map((logo, idx) => (
        <div
          key={idx}
          onClick={() => handleChange(idx)}
          className={`cursor-pointer h-16 lg:h-24 rounded-lg px-3 lg:px-12 flex items-center ${
            idx === count ? "bg-white py-4" : ""
          }`}
          style={{
            filter:
              "drop-shadow(0px 1.2px 3.6px rgba(0, 0, 0, 0.1)) drop-shadow(0px 6.4px 14.4px rgba(0, 0, 0, 0.13))"
          }}
        >
          <img
            src={`/landing_images/testimonial_logos/${logo}.png`}
            className="max-h-10"
            alt="ChaosNative"
          />
        </div>
      ))}
    </div>
  )
}

const Testimonials = () => {
  const [curr, setCurr] = useState(0)
  const [refresh, setRefresh] = useState(false)

  const handlePrevState = () => {
    if (curr === 0) {
      setCurr(testimonialUtils.length - 1)
    } else {
      setCurr(curr - 1)
    }
  }

  const handleNextState = () => {
    if (curr === testimonialUtils.length - 1) {
      setCurr(0)
    } else {
      setCurr(curr + 1)
    }
  }

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurr(prevCurr => {
        if (prevCurr === testimonialUtils.length - 1) {
          return 0
        } else {
          return prevCurr + 1
        }
      })
    }, 2000) // Auto-scroll every 2 seconds

    return () => clearInterval(interval) // Cleanup interval on component unmount
  }, [])

  return (
    <Container className="py-8 md:py-16">
      <BodyHead className="text-center">What users are saying</BodyHead>
      <Paragraph className="text-center text-gray-600 mt-4 mb-4 max-w-2xl mx-auto">
        Discover how organizations worldwide are using LitmusChaos to build
        resilient systems and improve their chaos engineering practices
      </Paragraph>
      <TestimonialCard
        testimonials={testimonialUtils}
        changePrevState={handlePrevState}
        changeNextState={handleNextState}
        count={curr}
      />
      <Navigator handleChange={state => setCurr(state)} count={curr} />

      <div className="flex justify-center mt-8 md:mt-12">
        <OutlinedButton href="/adopters">
          <span className="flex items-center gap-2">
            {" "}
            View more stories{" "}
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
        </OutlinedButton>
      </div>
    </Container>
  )
}

export default Testimonials
