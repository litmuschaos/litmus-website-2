import { TextLink } from "@includes/CTA"
import styles from "@includes/scss/Adopters.module.scss"
import { Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"
import { Adopters } from "./adopter.data"

const AdoptersList = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white py-20">
        <Container>
          <div className="grid gap-12 lg:gap-16">
            {Adopters.map((adopter, index) => {
              return (
                <div
                  key={adopter.key}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Logo Card */}
                  <div className="flex-shrink-0 w-full lg:w-96">
                    <div 
                      className="relative rounded-2xl shadow-xl p-8 lg:p-12 flex items-center justify-center min-h-[280px] transition-transform duration-300 hover:scale-105"
                      style={{ 
                        background: adopter.bgColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                      }}
                    >
                      <img
                        style={{ 
                          width: adopter.width ? `${adopter.width}px` : 'auto',
                          maxWidth: '80%',
                          maxHeight: '120px'
                        }}
                        src={`/adoptersPage/${adopter.link}/logo.svg`}
                        alt={`${adopter.link} logo`}
                        className="object-contain filter drop-shadow-lg"
                      />
                      
                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                      {adopter.subHeading}
                    </h2>
                    <Paragraph className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {adopter.paragraph}
                    </Paragraph>
                    
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 shadow-lg hover:shadow-xl">
                      <TextLink
                        href={`/adopters/${adopter.link}`}
                        className="text-white hover:text-white no-underline font-medium"
                      >
                        Read the case study
                      </TextLink>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </>
  )
}

export default AdoptersList
