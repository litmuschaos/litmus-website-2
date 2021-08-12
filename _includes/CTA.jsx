import styles from "@includes/scss/CTA.module.scss"
import Link from "next/link"

const RegularButton = props => {
  return props.external ? (
    <Link href={props.href}>
      <a
        className={`${styles.regularButton} ${props.className}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.children}
      </a>
    </Link>
  ) : (
    <Link href={props.href}>
      <a className={`${styles.regularButton} ${props.className}`}>
        {props.children}
      </a>
    </Link>
  )
}

const OutlinedButton = props => {
  return props.external ? (
    <Link href={props.href}>
      <a
        className={`${styles.outlinedButton} ${props.className}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        {props.children}
      </a>
    </Link>
  ) : (
    <Link href={props.href}>
      <a className={`${styles.outlinedButton} ${props.className}`}>
        {props.children}
      </a>
    </Link>
  )
}

const TextLink = props => {
  return props.external ? (
    <Link href={props.href}>
      <a
        className={`${styles.textLink} ${props.className} ${
          props.dark ? "text-white" : "text-litmus"
        }`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <span>
          {props.children}
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.1626L6 6.1626L1 11.1626"
              stroke={props.dark ? "#FFFFFF" : "#5B44BA"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </Link>
  ) : (
    <Link href={props.href}>
      <a
        className={`${styles.textLink} ${props.className} ${
          props.dark ? "text-white" : "text-litmus"
        }`}
      >
        <span>
          {props.children}
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.1626L6 6.1626L1 11.1626"
              stroke={props.dark ? "#FFFFFF" : "#5B44BA"}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </a>
    </Link>
  )
}

export { RegularButton, OutlinedButton, TextLink }
