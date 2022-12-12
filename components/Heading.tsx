import styles from '../styles/Heading.module.scss'

type HeadingProps = {
  title: string
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  return (
    <div className={styles.popular}>
      <h6>{title}</h6>
    </div>
  )
}

export default Heading
