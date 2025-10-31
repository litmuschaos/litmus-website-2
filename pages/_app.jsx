import { BottomFooter } from "@includes/BottomFooter"
import { TopNavbar } from "@includes/TopNavbar"
import GTagScripts from "@lib/GTag"
import { useRouter } from "next/router"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const noPreFooterPages = ["/", "/#", "/enterprise", "/enterprise#", "/blog"]

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      offset: 100,
      mirror: true
    })
  }, [])

  return (
    <>
      <GTagScripts />
      <img
        alt="scarf"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://static.scarf.sh/a.png?x-pxid=a9abead1-4962-45b2-936a-730321bb7ec3"
      />
      <TopNavbar key={router.asPath} />
      <Component {...pageProps} />
      <BottomFooter noPreFooter={noPreFooterPages.includes(router.asPath)} />
    </>
  )
}

export default MyApp
