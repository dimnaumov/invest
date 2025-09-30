import styles from './style.module.scss';
import clsx from 'clsx';

export const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <a
        className={clsx(styles.contacts__icon, styles['contacts__icon--mail'])}
        href="mailto:naumovdv2010@yandex.ru"
      />

      <a
        className={clsx(styles.contacts__icon, styles['contacts__icon--telegram'])}
        href=" https://t.me/dimnaumov"
        target="_blank"
        rel="noopener noreferrer"
      />

      <a
        className={clsx(styles.contacts__icon, styles['contacts__icon--github'])}
        href="https://github.com/dimnaumov/nuxt3-vue3-example"
        target="_blank"
        rel="noopener noreferrer"
      />      
    </div>
  )
}
