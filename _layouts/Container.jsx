import styles from "./Container.module.scss"

const ContainerFluid = ({ children, className, style }) => {
  return (
    <div className={`${className} ${styles.containerFluid}`} style={style}>
      {children}
    </div>
  )
}

const Container = ({ children, className, style }) => {
  return (
    <div className={`${className} ${styles.boundedContainer}`} style={style}>
      {children}
    </div>
  )
}

const SkewedContainerFluid = ({ children, className, color }) => {
  return (
    <ContainerFluid className={styles.skewedContainerFluid}>
      <div className={styles.skewBg} style={{ backgroundColor: color }}></div>
      <Container className={`${styles.skewedContainer} ${className}`}>
        {children}
      </Container>
    </ContainerFluid>
  )
}

const SkewedGradient = ({ className, color }) => {
  return (
    <ContainerFluid className={`${styles.skewedGradient} ${className}`}>
      <div
        className={styles.skewedGradientCont}
        style={{
          background: color,
          backgroundBlendMode:
            "hard-light, normal, normal, normal, normal, normal, normal, normal, normal, normal, normal"
        }}
      ></div>
    </ContainerFluid>
  )
}

export { ContainerFluid, Container, SkewedContainerFluid, SkewedGradient }
