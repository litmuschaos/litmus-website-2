import { TextLink } from "@includes/CTA"
import styles from "@includes/scss/Community.module.scss"
import { Paragraph } from "@includes/Texts"
import { SkewedContainerFluid } from "@layouts/Container"

const CommunityList = () => {
  const List = [
    {
      bgColor: "bg-bg1",
      subHeading: "Join Slack Channel",
      paragraph:
        "For live conversation and quick questions, join the Litmus Slack workspace. Don’t forget to say hi!",
      linkText: "Join Slack",
      imgUrl: "/communityPage/slackAndLitmus.svg",
      width: "w-1/3",
      link: "https://slack.litmuschaos.io/"
    },
    {
      bgColor: "bg-white",
      subHeading: "Contributing to Github",
      paragraph:
        "Community members can contribute chaos experiments, file issues, raise pull requests, and provide feedback to help enhance the user experience and bring in new enhancements to developLitmusChaos.",
      paragraph2:
        "Check out the CONTRIBUTING.md page on Litmus repository for instructions on how to contribute.",
      linkText: "About Contriuting on Github",
      imgUrl: "/communityPage/githubCard.png",
      width: "w-1/3",
      link: "https://github.com/litmuschaos/litmus/blob/master/CONTRIBUTING.md"
    },
    {
      bgColor: "bg-black",
      subHeading: "Meetups and sync ups",
      paragraph:
        "Want real-time, live conversation with LitmusChaos maintainers and contributors? Join our community meetings.",
      linkText: "Explore Events",
      imgUrl: "/communityPage/meetupsAndSyncups.svg",
      link: "https://www.meetup.com/Chaos-Engineering-Meetup-Group/events/"
    },
    {
      bgColor: "bg-bg1",
      subHeading: "Blog",
      paragraph:
        "Join us in writing blogs about experiments, features, and your experience. Use the #litmuschaos tag for your blog to get featured.",
      linkText: "View Blog",
      imgUrl: "/communityPage/litmusBlogs.svg",
      link: "https://dev.to/t/litmuschaos"
    }
  ]

  return (
    <SkewedContainerFluid color="#F7F8FA">
      <div className="flex flex-col gap-16">
        {List.map(item => {
          return (
            <div key={item.subHeading} className={styles.comminityListCard}>
              <div className={`${item.bgColor} ${styles.imageCard}`}>
                <img
                  className={`${item.width}`}
                  src={item.imgUrl}
                  alt={item.subHeading}
                />
              </div>
              <div className="w-full md:w-1/2">
                <h2 className="text-primary text-lg md:text-2xl font-medium">
                  {item.subHeading}
                </h2>
                <Paragraph hint className="mt-4">
                  {item.paragraph}
                </Paragraph>
                {item.paragraph2 && (
                  <Paragraph hint className="mt-2">
                    {item.paragraph2}
                  </Paragraph>
                )}
                <TextLink
                  href={item.link}
                  className="mt-4 inline-block"
                  external
                >
                  {item.linkText}
                </TextLink>
              </div>
            </div>
          )
        })}
      </div>
    </SkewedContainerFluid>
  )
}

export default CommunityList
