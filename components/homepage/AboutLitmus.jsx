import { useState } from "react"
import styles from "@includes/scss/About.module.scss"
import { BodyHead, Paragraph } from "@includes/Texts"
import {
  Container,
  ContainerFluid,
  SkewedContainerFluid,
  SkewedGradient
} from "@layouts/Container"
6
const OverviewSection = () => {
  return (
    <div className={`${styles.partDiv} flex-col md:flex-row pb-16`}>
      <div className={styles.leftCont}>
        <BodyHead dark className="text-center md:text-left text-[#483953]">
          An end to end{" "}
          <span className="block text-[#5a44ba]">Chaos Engineering</span> platform
        </BodyHead>
        <Paragraph hint className="max-w-md mt-4 text-center md:text-left text-[#483953]">
          Litmus is an end-to-end chaos engineering platform for cloud native infrastructure and applications. Litmus is designed to orchestrate and analyze chaos in their environments.
        </Paragraph>
      </div>
      <img
        src="/landing_images/about_litmus/overview.png"
        alt="overview"
        draggable={false}
        className={styles.partImg}
      />
    </div>
  )
}

const GetStartedSection = () => {
  const [activeTab, setActiveTab] = useState('cluster')

  return (
    <div className={`${styles.partDiv} flex-col md:flex-row`}>
      <div className={`${styles.leftCont} ${styles.getStartedLeftContainer}`}>
        <div className="mb-4 flex items-center gap-3">
          <div className={styles.iconContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(90, 68, 185)" className={styles.iconSvg}>
              <g color="rgb(90, 68, 185)" weight="duotone">
                <path d="M184,120v61.65a8,8,0,0,1-2.34,5.65l-34.35,34.35a8,8,0,0,1-13.57-4.53L128,176ZM136,72H74.35a8,8,0,0,0-5.65,2.34L34.35,108.69a8,8,0,0,0,4.53,13.57L80,128ZM40,216c37.65,0,50.69-19.69,54.56-28.18L68.18,161.44C59.69,165.31,40,178.35,40,216Z" opacity="0.2"></path>
                <path d="M223.85,47.12a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.41,27.07L132.69,64H74.36A15.91,15.91,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A15.91,15.91,0,0,0,192,181.64V123.31l4.77-4.77C223.45,91.86,224.6,59.71,223.85,47.12ZM74.36,80h42.33L77.16,119.52,40,114.34Zm74.41-9.45a76.65,76.65,0,0,1,59.11-22.47,76.46,76.46,0,0,1-22.42,59.16L128,164.68,91.32,128ZM176,181.64,141.67,216l-5.19-37.17L176,139.31Zm-74.16,9.5C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Z"></path>
              </g>
            </svg>
          </div>
          <span className={styles.quickStartText}>Quick Start</span>
        </div>
        <BodyHead className="text-center md:text-left text-[#483953] !text-[2rem]">
          Get Started<br />
          <span className="text-[#5a44ba]">in minutes,</span><br />
          not days
        </BodyHead>
   
      </div>
      
      {/* White tabbed container - twice the width of leftCont */}
      <div className={`${styles.getStartedRightContainer} w-full md:w-[80%]`}>
        {/* Tab Headers */}
        <div className="flex p-4 gap-4">
          <button
            onClick={() => setActiveTab('cluster')}
            className={`flex-1 px-6 py-4 text-l font-medium transition-colors duration-200 ${
              activeTab === 'cluster'
                ? 'text-white bg-[#5a44ba] border-b-2 border-[#5a44ba]'
                : 'text-gray-600 hover:text-[#5a44ba] bg-gray-50'
            } ${styles.tabButton}`}
          >
            Get started on your own cluster
          </button>
          <button
            onClick={() => setActiveTab('saas')}
            className={`flex-1 px-6 py-4 text-l font-medium transition-colors duration-200 ${
              activeTab === 'saas'
                ? 'text-white bg-[#5a44ba] border-b-2 border-[#5a44ba]'
                : 'text-gray-600 hover:text-[#5a44ba] bg-gray-50'
            } ${styles.tabButton}`}
          >
            Get started in the free hosted SaaS
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-8">
          {activeTab === 'cluster' && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-semibold text-gray-800">Get started with the following command</span>
              </div>
              <div className="bg-gray-200 rounded-lg p-4 font-mono text-sm">
                <div className="flex items-center justify-between">
                  <code className="text-[#5a44ba]">helm install litmuschaos/litmus</code>
                  <button 
                    onClick={() => navigator.clipboard.writeText('helm install litmuschaos/litmus')}
                    className="ml-4 px-3 p-2 bg-gray-200 hover:bg-gray-300 text-white text-xs rounded transition-colors flex items-center gap-1"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#5a44ba" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'saas' && (
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-10 md:top-6 bottom-10 md:bottom-6 w-0.5 bg-gradient-to-b from-[#5a44ba] to-[#8b7bc7] z-0"></div>
              
              <div className="space-y-8">
                {/* Step 1: Sign up for Harness */}
              <div className="flex items-start gap-4">

                <div className="flex items-center gap-4 flex-1">
                    <img 
                      src="/landing_images/about_litmus/harness.avif" 
                      alt="Harness Logo" 
                    className={`${styles.stepIcon} w-12 h-12 object-contain`}
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Sign up for a free plan on Harness.io
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Get started with Harness's free tier to access chaos engineering capabilities
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 2: Auto-create experiments */}
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className={styles.stepIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(91, 68, 186)" className={styles.stepIconSvg}>
                        <g color="rgb(91, 68, 186)" weight="regular">
                          <path d="M221.69,199.77,160,96.92V40h8a8,8,0,0,0,0-16H88a8,8,0,0,0,0,16h8V96.92L34.31,199.77A16,16,0,0,0,48,224H208a16,16,0,0,0,13.72-24.23ZM110.86,103.25A7.93,7.93,0,0,0,112,99.14V40h32V99.14a7.93,7.93,0,0,0,1.14,4.11L183.36,167c-12,2.37-29.07,1.37-51.75-10.11-15.91-8.05-31.05-12.32-45.22-12.81ZM48,208l28.54-47.58c14.25-1.74,30.31,1.85,47.82,10.72,19,9.61,35,12.88,48,12.88a69.89,69.89,0,0,0,19.55-2.7L208,208Z"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Auto-create experiments with ease
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Automatically generate chaos experiments tailored to your infrastructure
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3: Run tests and get resilience score */}
              <div className="flex items-start gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className={styles.stepIcon}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(91, 68, 186)" className={styles.stepIconSvg}>
                        <g color="rgb(91, 68, 186)" weight="regular">
                        <path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176ZM104,120v24a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm32-16v40a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm32-16v56a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>
                        </g>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        Run tests and Get your resilience score
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Execute chaos experiments and receive detailed resilience metrics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const AboutLitmus = () => {
  return (
    <ContainerFluid className="bg-white">
      <Container className="grid gap-16 md:pt-16 md:pb-16 pt-16 pb-14">
        <OverviewSection />
        <GetStartedSection />
      </Container>
    </ContainerFluid>
  )
}

export default AboutLitmus
