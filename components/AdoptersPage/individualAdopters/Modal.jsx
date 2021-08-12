import { CloseSVG } from "@components/SVG/CloseSVG"
import styles from "@includes/scss/Adopters.module.scss"

const Modal = ({ data, handleClick }) => {
  return (
    <div className={styles.videoModal}>
      <div className={styles.videoCont}>
        <span onClick={handleClick} className="cursor-pointer">
          <CloseSVG />
        </span>
        <div className={styles.iframeCont}>
          <iframe
            src={data.other.modalUrl}
            title="YouTube video player"
            frameBorder={0}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
