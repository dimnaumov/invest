import styles from './style.module.scss';
import { Contacts } from "@/components/Contacts/Contacts";
import { Logo } from "@/components/Logo/Logo";
import clsx from "clsx";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={clsx('container', styles.header__container)}>
        <div className={styles.header__logo}>
          <Logo />
        </div>

        <nav className={styles.header__nav}>
          <Contacts />
        </nav>
      </div>
    </header>
  )
}
