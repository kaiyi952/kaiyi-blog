import React from 'react'
import styles from './footer.module.scss';
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa6';
function Footer() {
  return (
    <div className={styles.main}>
      <div className={styles.divider}>---End---</div>
      <div className={styles.footerText}><span>&copy; 2025 Kaiyi under </span><a href="https://creativecommons.org/licenses/by-sa/4.0/" className='underline'>CC BY-SA 4.0</a>
        <span className={styles.footerIcons}>
          <a href="https://github.com/kaiyi952" className='sm:ml-[40px] '>
            <FaGithub className="inline-block" />
          </a>
          &nbsp;
          <a href="mailto:irishe952@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope className="inline-block" />
          </a>
          &nbsp;
          <a href="https://www.instagram.com/kaiyi_7/profilecard/?igsh=ZDI4M2J3aW1vdzQ1" >
            <FaInstagram className="inline-block" />
          </a>&nbsp;
          <a href="https://bsky.app/profile/kaiyiho.bsky.social" className={styles.bsky}>
            <img src='bsky.svg' className="inline-block w-[17px] mb-[2px] ml-[1px]" />
          </a>
        </span>
      </div>
    </div>
  )
}

export default Footer