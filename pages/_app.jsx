import { BottomFooter } from "@includes/BottomFooter"
import { TopNavbar } from "@includes/TopNavbar"
import GTagScripts from "@lib/GTag"
import { useRouter } from "next/router"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const noPreFooterPages = ["/", "/#", "/enterprise", "/enterprise#", "/blog"]

  return (
    <>
      <GTagScripts />
      <TopNavbar key={router.asPath} />
      <Component {...pageProps} />
      <BottomFooter noPreFooter={noPreFooterPages.includes(router.asPath)} />
    </>
  )
}

export default MyApp
