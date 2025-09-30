import { Contacts } from '@/components/Contacts/Contacts';
import { Logo } from '@/components/Logo/Logo';
import styles from './style.module.scss';
import clsx from 'clsx';
  
export const Footer = () => (
  <footer className={styles.footer}>
    <div className={clsx('container', styles.footer__container)}>
      <div className={styles.footer__logo}>
        <Logo />
      </div>

      <div className={styles.footer__contacts}>
        <Contacts />
      </div>
    </div>
  </footer>
)
