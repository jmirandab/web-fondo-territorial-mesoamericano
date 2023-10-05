import Image from 'next/image'

import styles from './page.module.css'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/SetionAMPBMembers'
import Section4 from '../components/SectionRational'
import Section5 from '../components/Section5'
import Section6 from '../components/SectionFinancingInstruments'
import Section7 from '../components/Section7'
import Section8 from '../components/Section8'
import Section9 from '../components/Section9'
import Section10 from '../components/Section10'
import Section11 from '../components/Section11'
import Section12 from '../components/Section12'
// import i18next from '../config/initi18n';

export default function Home() {
  return (
      // <I18nProvider>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
             {/* oooooo {t('key')}  */}
          </p>
          <div>

          </div>
        </div>

        {/* <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
        <Section12 /> */}

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
