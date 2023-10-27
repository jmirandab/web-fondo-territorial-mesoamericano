"use client"

// import Image from 'next/image'

// import styles from './../../page.module.css'
import Section1 from '../../../components/Section1'
import Section2 from '../../../components/Section2'
import SectionRational from '../../../components/SectionRational'
import SetionAMPBMembers from '../../../components/SetionAMPBMembers'
import Section5 from '../../../components/Section5'
import Section7 from '../../../components/Section7'
import Section8 from '../../../components/Section8'
import SectionHowWeWork8 from '../../../components/SectionHowWeWork'
import SectionOrganigrama9 from '../../../components/SectionOrganigrama'
// import TopMenu from '@/components/TopMenu'
import SectionVideo from '@/components/SectionVideo'
import Main from '@/components/Main'
//import i18next from '../../../config/initi18n';

//import { useTranslation } from 'next-i18next'

//import useTranslation from 'next-translate/useTranslation'

export default function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation();
  return (
    // <I18nProvider>
    <Main lng={lng} >

      <Section1 lng={lng} />
      <SectionVideo />
      <Section2 lng={lng} />



      <SetionAMPBMembers lng={lng} />
      <SectionRational lng={lng} />


      <Section5 lng={lng} />
      <Section7 lng={lng} />
      <Section8 lng={lng} />
      <SectionHowWeWork8 lng={lng} />
      <SectionOrganigrama9 lng={lng} />


      {/* <div className={styles.center}>
        test1
      </div>

      <div className={styles.grid}>
        test2
      </div> */}
    </Main>
    // </I18nProvider>
  )
}
