
import styles from './Footer.module.css';

const Footer = () => {
  return (
      <div className={styles.footer_container}>
        <p className={styles.footer_title}>HOT POTATO</p>
        <div className={styles.footer_social}>
          <div className={styles.footer_casey}>
            <p>Casey Tuer</p>
            <div>
              <a href='https://github.com/caseytuer'>
                <i className='fab fa-github'></i>
              </a>
              <a href='https://www.linkedin.com/in/caseytuer/'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='#'>
                <i className='fab fa-angellist'></i>
              </a>
            </div>
          </div>
          <div className={styles.footer_nico}>
            <p>Leslie Owiti</p>
            <div>
              <a href='https://github.com/leslieowititech'>
                <i className='fab fa-github'></i>
              </a>
              <a href='https://www.linkedin.com/in/leslie-owiti-0b447952/'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='#'>
                <i className='fab fa-angellist'></i>
              </a>
            </div>
          </div>
          <div className={styles.footer_nico}>
            <p>Nico Pierson</p>
            <div>
              <a href='https://github.com/nicopierson'>
                <i className='fab fa-github'></i>
              </a>
              <a href='https://www.linkedin.com/in/nico-pierson/'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='https://angel.co/u/nico-gerard-pierson'>
                <i className='fab fa-angellist'></i>
              </a>
            </div>
          </div>
          <div className={styles.footer_nico}>
            <p>Wes Trinh</p>
            <div>
              <a href='https://github.com/WesTrinhKL'>
                <i className='fab fa-github'></i>
              </a>
              <a href='#'>
                <i className='fab fa-linkedin'></i>
              </a>
              <a href='#'>
                <i className='fab fa-angellist'></i>
              </a>
            </div>
          </div>
        </div>
        <p className={styles.footer_copyright}>Copyright © 2021 Hotpotato Inc. All rights reserved.</p>
      </div>
  );
};

export default Footer;