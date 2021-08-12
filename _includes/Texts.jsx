import styles from "@includes/scss/Texts.module.scss"

const Paragraph = props => {
  return (
    <p
      className={`${props.className} ${
        props.dark
          ? "text-white"
          : props.hint
          ? "text-hint"
          : props.accent
          ? "text-accent"
          : "text-primary"
      } ${props.secondary ? "text-sm" : "text-sm md:text-base"} ${
        props.bold ? "font-semibold" : "font-normal"
      }`}
    >
      {props.children}
    </p>
  )
}

const HeroHead = props => {
  return (
    <h1
      className={`${styles.heading} ${props.className} ${
        props.hero ? "font-bold text-center lg:text-left" : "font-medium"
      } ${
        props.dark
          ? "text-white"
          : props.accent
          ? "text-accent"
          : "text-primary"
      }`}
    >
      {props.children}
    </h1>
  )
}

const BodyHead = props => {
  return (
    <h2
      className={`${styles.bodyHead} ${props.className} ${
        props.dark
          ? "text-white"
          : props.accent
          ? "text-accent"
          : "text-primary"
      }`}
    >
      {props.children}
    </h2>
  )
}

const SubHeading = props => {
  return (
    <h3
      className={`${styles.subHeading} ${props.className} ${
        props.dark
          ? "text-white"
          : props.accent
          ? "text-accent"
          : "text-primary"
      }`}
    >
      {props.children}
    </h3>
  )
}

export { Paragraph, HeroHead, SubHeading, BodyHead }
