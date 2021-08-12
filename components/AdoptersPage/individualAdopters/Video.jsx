import { Container } from "@layouts/Container"
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

  return (
    <>
      <Container>
        <div
          className={`relative grid place-items-center z-0 w-5/6 ${data?.videobg?.toString()} bg-contain bg-no-repeat bg-center aspect-w-16 aspect-h-7 mx-auto mt-20 rounded-xl ${
            data.other.modalUrl && `shadow-2xl`
          }`}
        >
          {data.other.modalUrl && (
            <img
              className="w-2/3 mx-auto"
              src={`/adoptersPage/${data.key}/logo.svg`}
              alt={`${data.key} logo`}
            />
          )}
          {data.other.modalUrl && (
            <div
              onClick={handleClick}
              className="w-16 md:w-32 grid place-items-center mx-auto opacity-50 hover:opacity-100 cursor-pointer z-20"
            >
              <img
                className="w-full"
                src="/adoptersPage/playButton.svg"
                alt="play button"
              />
            </div>
          )}
          {data.other.modalUrl && (
            <div className="absolute top-0 left-0 w-full h-full bg-overlay grid place-items-center z-10 rounded-xl opacity-80"></div>
          )}
        </div>
      </Container>
      {open && <Modal handleClick={handleClick} data={data} />}
    </>
  )
}

export default Video
