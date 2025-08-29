import { Paragraph, BodyHead } from "@includes/Texts"
import { Container } from "@layouts/Container"
import Link from "next/link"
import { CourseData } from "./utils"

const Courses = () => {
  return (
    <Container className="pb-8 md:pb-16 h-fit">
      <BodyHead className="text-center">Trainings & Certifications</BodyHead>
      <Paragraph hint className="text-center mt-4 mb-8 max-w-3xl mx-auto">
        Enhance your chaos engineering skills with comprehensive training programs and certifications from our trusted partners.
      </Paragraph>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {CourseData.map(support => {
          return (
            <Link href={support.link} key={support.name}>
              <a target="_blank" rel="noopener noreferrer">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <img
                      src={support.logo}
                      alt={support.name}
                      className="h-10 w-auto mr-3"
                    />
           
                  </div>
                  <Paragraph className="text-sm md:text-base text-gray-600 leading-relaxed flex-grow">
                    {support.desc}
                  </Paragraph>
                </div>
              </a>
            </Link>
          )
        })}
        <Link href="https://github.com/litmuschaos/litmus/blob/master/TRAINING_AND_COURSES.md">
          <a target="_blank" rel="noopener noreferrer">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-200 h-full flex flex-col justify-center items-center text-center">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">
                Offering training for Litmus?
              </h2>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <p className="text-purple-600 text-base md:text-lg font-medium">
                  Add your company
                </p>
              </span>
            </div>
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default Courses
