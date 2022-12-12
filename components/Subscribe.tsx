import styles from '../styles/Subscribe.module.scss'

const Subscribe = () => {
  return (
    <section className={styles.subscribe}>
      <h1 className={styles.title}>Subscribe to our New Stories</h1>
      <form action=''>
        <input type={styles.email} placeholder='Email Address...' />
        <button>SUBMIT</button>
      </form>
    </section>
  )
}

export default Subscribe
