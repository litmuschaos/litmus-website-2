import styles from "@includes/scss/Adopters.module.scss"
import { Container, ContainerFluid } from "@layouts/Container"
import { useState } from "react"
import Modal from "./Modal"

const Video = ({ data }) => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    if (typeof window !== "undefined") {
      if (open) {
        setOpen(false)
      } else {
        window.scrollTo(0, 0)
        setOpen(true)
      }
    }
  }
  const StripedBar = ({ data }) => {
    return (
      <div className={styles.adoperColorSkewedCont}>
        <div style={{ backgroundColor: data.colors.col1 }}></div>
        <div style={{ backgroundColor: data.colors.col2 }}></div>
        <div style={{ backgroundColor: data.colors.col3 }}></div>
        <div style={{ backgroundColor: data.colors.col4 }}></div>
      </div>
    )
  }

  return (
    <>
      <ContainerFluid className={styles.adopterVideoStripeMainCont}>
        <StripedBar data={data} />
        <Container>
          <div
            className={`w-5/6 mx-auto flex justify-center items-center h-10 z-10 relative bg-no-repeat bg-cover ${data?.videobg?.toString()} ${
              styles.videoCont
            }`}
            style={{ backgroundColor: data.colors.pri }}
          >
            {data.other.modalUrl && (
              <>
                <img
                  className={styles.adopterLogo}
                  src={`/adoptersPage/${data.key}/logo.svg`}
                  alt={`${data.key} logo`}
                  draggable={false}
                />
                <img
                  src={`/adoptersPage/playButton.svg`}
                  alt="Play video"
                  draggable={false}
                  className={styles.playBtn}
                  onClick={handleClick}
                />
              </>
            )}
          </div>
        </Container>
      </ContainerFluid>
      {open && <Modal handleClick={handleClick} data={data} />}
    </>
  )
}

export default Video
