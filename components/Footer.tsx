import EmailIcon from '@mui/icons-material/Email'

import styles from '../styles/Footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <img src='../static/tech-logo-footer.png' alt='' />
            <p>
              Need to get in touch with us? <br />
              For more information email at:
            </p>
            <EmailIcon />
            <span className={styles.email}> discuss@discuss.com</span>
            <br />
          </div>
          <div>
            <h3>HOT</h3>
            <div className={styles.item}>
              <img src='../static/discover/d1.jpg' alt='' />
              <p>Google To Boost Android Security In Few Days</p>
            </div>
          </div>
          <div>
            <h3>FEATURED</h3>
            <div className={styles.item}>
              <img src='../static/discover/d1.jpg' alt='' />
              <p>US Promises to give Intel aid to locate the soldiers</p>
            </div>
          </div>
          <div>
            <h3>LABELS</h3>
            <ul>
              <li>
                <span>Boxing</span> <label>(5)</label>
              </li>
              <li>
                <span>Fashion</span> <label>(6)</label>
              </li>
              <li>
                <span>Health</span> <label>(7)</label>
              </li>
              <li>
                <span>Nature</span> <label>(9)</label>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
