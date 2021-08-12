import styles from "@includes/scss/Hero.module.scss"
import { SkewedContainerFluid, SkewedGradient } from "@layouts/Container"
import { useState } from "react"

const Button = ({ children, current, onButtonClick, count, img }) => (
  <div className={"flex flex-col mx-auto"}>
    <div className={"flex items-center relative"}>
      <div
        className={`${current ? styles.btnSelected : styles.btnUnselected} ${
          styles.btn
        } text-white text-xl py-6 pl-4 flex items-center`}
        onClick={onButtonClick}
      >
        <img
          src={`/landing_images/about_litmus/${img}.svg`}
          className={"mr-4 h-10"}
          alt="LitmusChaos"
        />
        {children}
      </div>
      {current ? (
        <img
          src={"/landing_images/about_litmus/selector.svg"}
          className={"absolute"}
          alt="LitmusChaos"
          style={{ width: "121px", right: "-11px" }}
        />
      ) : (
        <></>
      )}
    </div>
    {count === 0 || count === 1 ? (
      <img
        src={"/landing_images/about_litmus/connector.svg"}
        className={"h-32 mr-24"}
        alt="LitmusChaos"
      />
    ) : (
      <></>
    )}
  </div>
)

const DesktopView = ({ current, handleChange }) => {
  const [text, setText] = useState("helm install litmuschaos/litmus")
  const divToRender = () => {
    if (current === 0) {
      return (
        <img
          src={"/landing_images/about_litmus/overview_border.svg"}
          alt="LitmusChaos"
        />
      )
    } else if (current === 1) {
      return (
        <img
          src={"/landing_images/about_litmus/get_started.svg"}
          alt="LitmusChaos"
        />
      )
    } else if (current === 2) {
      return (
        <img
          src={"/landing_images/about_litmus/scale_operations.svg"}
          alt="LitmusChaos"
        />
      )
    }
  }
  return (
    <div className={"justify-between hidden lg:flex"}>
      <div className={"w-2/5 mt-24 mb-12"}>
        <Button
          current={current === 0}
          onButtonClick={() => handleChange(0)}
          count={0}
          img={"brain"}
        >
          Overview
        </Button>
        <Button
          current={current === 1}
          onButtonClick={() => handleChange(1)}
          count={1}
          img={"fast_forward"}
        >
          Get Started
        </Button>
        <Button
          current={current === 2}
          onButtonClick={() => handleChange(2)}
          count={2}
          img={"refresh"}
        >
          Scale Chaos Operations
        </Button>
      </div>
      <div className={`w-3/5 ${styles.box}`}>{divToRender()}</div>
    </div>
  )
}

const MobileView = () => {
  const utils = [
    {
      name: "Overview",
      img: "overview",
      icon: "brain"
    },
    {
      name: "Getting Started",
      img: "getting_started",
      icon: "fast_forward"
    },
    {
      name: "Scale Chaos Operations",
      img: "scale_operations",
      icon: "refresh"
    }
  ]
  return (
    <div className={"my-12 lg:hidden"}>
      {utils.map((info, idx) => {
        return (
          <div className={"text-white"} key={idx}>
            <div
              className={`${styles.btnSelected} py-4 px-6 my-8 flex items-center`}
            >
              <img
                src={`/landing_images/about_litmus/${info.icon}.svg`}
                alt="LitmusChaos"
              />
              <span className={"text-2xl ml-4"}>{info.name}</span>
            </div>
            <div>
              <img
                src={`/landing_images/about_litmus/${info.img}.svg`}
                className={"w-11/12 md:w-3/5 mx-auto mb-32 mt-20"}
                alt="LitmusChaos"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const AboutLitmus = () => {
  const [current, setCurrent] = useState(0)
  const skewBg =
    "radial-gradient(70.56% 155.58% at 56.93% 16.11%, #EB8172 16.67%, #5B44BA 61.41%), radial-gradient(34.96% 33.39% at 56.66% 50%, #F19389 44.79%, rgba(133, 140, 221, 0) 83.19%), radial-gradient(13.35% 23.03% at 6.58% 67.25%, #AFE9FF 0%, #90E0FF 41.45%, rgba(144, 224, 255, 0) 100%), radial-gradient(19.75% 48.55% at 19.59% 56.88%, #B8EBFF 0%, #90E0FF 60.58%, rgba(169, 96, 238, 0) 83.24%), radial-gradient(10.9% 23.5% at 7.65% 84.98%, #A960EE 25.96%, rgba(255, 51, 61, 0) 100%), radial-gradient(27.77% 40.9% at 19.29% 57.22%, rgba(144, 224, 255, 0.1) 50.74%, rgba(169, 96, 238, 0) 100%), radial-gradient(20.43% 35.1% at 45.83% 17.78%, #19C2FF 31.7%, rgba(199, 33, 255, 0.75) 100%), radial-gradient(26.67% 62.22% at 0% 100%, #ECB22E 19.21%, #FB9C40 54.54%), radial-gradient(18.22% 46.29% at 5.34% 39.33%, #FFCB57 41.18%, rgba(183, 120, 225, 0) 71.99%), conic-gradient(from 3.28deg at 22.11% 40.38%, rgba(169, 96, 238, 0) 0deg, #5469D4 178.27deg, rgba(136, 99, 228, 0.383199) 290.36deg, rgba(169, 96, 238, 0) 360deg), radial-gradient(34.48% 62.34% at 21.35% 32.43%, #19C2FF 0%, #858CDD 100%)"

  return (
    <>
      <SkewedGradient color={skewBg} />
      <SkewedContainerFluid color="#1C0732" angle="-6">
        <p className={"mb-12 text-white text-4xl font-bold"}>
          About <br />
          <span style={{ color: "#878EDE" }}>LitmusChaos</span> Project
        </p>
        <DesktopView
          current={current}
          handleChange={state => setCurrent(state)}
        />
        <MobileView />
      </SkewedContainerFluid>
    </>
  )
}

export default AboutLitmus
