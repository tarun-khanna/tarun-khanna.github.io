import React from 'react';
import waveSvg from '../../assets/images/wave.svg';
import styles from './index.module.css';
import { getPlatform } from '../../utilities/helpers';
import { LINKS } from '../../utilities/config'

const Footer = () => {
  const onLinkClick = (url) => {
    window.dataLayer.push({ event: 'social_click', SOCIAL_LINK: url, CTA_POSITION: 'footer' });
    window.open(url, '_blank');
  }

  return (
    <div className={styles.container}>
      <div className={styles.contentContainer}>
        {getPlatform().desktop ? <p className={styles.copyrightText}>© 2020 - Designed and developed by Tarun Khanna</p> : null}
        <div className={styles.socialContainer}>
          <p onClick={() => onLinkClick(LINKS.linkedin)} className={styles.socialLink}>LINKEDIN</p>
          <p onClick={() => onLinkClick(LINKS.mail)} className={styles.socialLink}>EMAIL</p>
          <p onClick={() => onLinkClick(LINKS.instagram)} className={styles.socialLink}>INSTAGRAM</p>
          <p onClick={() => onLinkClick(LINKS.facebook)} className={styles.socialLink}>FACEBOOK</p>
        </div>
        {getPlatform().mobile ? <p className={styles.copyrightText}>© 2020 - Designed and developed by Tarun Khanna</p> : null}
      </div>
      <img className={styles.footerImg} src={waveSvg} />
    </div>
  )
}

export default Footer
