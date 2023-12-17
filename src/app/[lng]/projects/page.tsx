
import styles from './../../page.module.css'
import Section8 from '../../components/Section8'
import Section9 from '../../components/Section9'
import Section10 from '../../components/Section10_old'
import TopMenu from '../../components/TopMenu'
//import i18next from '../../../config/initi18n';
import { useTranslation } from '../../i18n'

//import { useTranslation } from 'next-i18next'

//import useTranslation from 'next-translate/useTranslation'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation();
  const { t } = await useTranslation(lng)
  return (
    // <I18nProvider>
    <main className={styles.main}>
      <div className={styles.description}>
        <TopMenu lng={lng} ></TopMenu>
      </div>
      <Section9 lng={lng} />

      <Section8 lng={lng} />
      <Section10 lng={lng} />
      {/* <div className={styles.center}>
        test1
      </div>

      <div className={styles.grid}>
        test2
      </div> */}
    </main>
    // </I18nProvider>
  )
}
