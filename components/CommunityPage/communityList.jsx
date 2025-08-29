import { RegularButton } from "@includes/CTA"
import { Paragraph } from "@includes/Texts"
import { Container } from "@layouts/Container"

const CommunityList = () => {
  const List = [
    {
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      subHeading: "Join Slack Channel",
      paragraph:
        "For live conversation and quick questions, join the Litmus Slack workspace. Don't forget to say hi!",
      linkText: "Join Slack",
      imgUrl: "/communityPage/slackAndLitmus.svg",
      link: "https://slack.litmuschaos.io/"
    },
    {
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      subHeading: "Contributing to Github",
      paragraph:
        "Community members can contribute chaos experiments, file issues, raise pull requests, and provide feedback to help enhance the user experience and bring in new enhancements to LitmusChaos.",
      paragraph2:
        "Check out the CONTRIBUTING.md page on Litmus repository for instructions on how to contribute.",
      linkText: "Read Contribution Guide",
      imgUrl: "/communityPage/githubCard.png",
      link: "https://github.com/litmuschaos/litmus/blob/master/CONTRIBUTING.md"
    },
    {
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      subHeading: "Meetups and sync ups",
      paragraph:
        "Want real-time, live conversation with LitmusChaos maintainers and contributors? Join our community meetings.",
      linkText: "Explore Events",
      imgUrl: "/communityPage/meetupsAndSyncups.svg",
      link: "https://www.meetup.com/Chaos-Engineering-Meetup-Group/events/"
    },
    {
      bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      subHeading: "Blog",
      paragraph:
        "Join us in writing blogs about experiments, features, and your experience. Use the #litmuschaos tag for your blog to get featured.",
      linkText: "View Blog",
      imgUrl: "/communityPage/litmusBlogs.svg",
      link: "https://dev.to/t/litmuschaos"
    }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white md:pt-16 py-8">
      <Container>
        <div className="grid gap-12 lg:gap-16">
          {List.map((item, index) => {
            return (
              <div
                key={item.subHeading}
                className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Logo Card */}
                <div className="flex-shrink-0 w-full lg:w-96">
                  <div 
                    className="relative rounded-2xl shadow-xl p-8 lg:p-12 flex items-center justify-center min-h-[280px] transition-transform duration-300 hover:scale-105"
                    style={{ 
                      background: item.bgColor
                    }}
                  >
                    <img
                      src={item.imgUrl}
                      alt={item.subHeading}
                      className="object-contain filter drop-shadow-lg"
                      style={{
                        maxWidth: '80%',
                        maxHeight: '120px'
                      }}
                    />
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/10 rounded-full"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-4 leading-tight">
                    {item.subHeading}
                  </h2>
                  <Paragraph className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {item.paragraph}
                  </Paragraph>
                  {item.paragraph2 && (
                    <Paragraph className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {item.paragraph2}
                    </Paragraph>
                  )}
                  
                  <RegularButton
                    href={item.link}
                    external
                    className="w-full text-center sm:w-auto"
                  >
                    <span className="flex items-center">
                      {item.linkText}
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-2"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </RegularButton>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

export default CommunityList
