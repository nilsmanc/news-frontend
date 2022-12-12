import styles from '../styles/SocialMedia.module.scss'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PinterestIcon from '@mui/icons-material/Pinterest'

const SocialMedia = () => {
  return (
    <>
      <section className={styles.social}>
        <div className={styles.box}>
          <TwitterIcon />
          <span>12,740 Followers</span>
        </div>
        <div className={styles.box}>
          <YouTubeIcon />
          <span>8,520 Subscribers</span>
        </div>
        <div className={styles.box}>
          <PinterestIcon />
          <span>4,250 Subscribers</span>
        </div>
      </section>
    </>
  )
}

export default SocialMedia
