

import Image from 'next/image'

import styles from './../../page.module.css'
import Section2 from '../../../components/Section2'
import SetionAMPBMembers from '../../../components/SetionAMPBMembers'
import Main from '@/components/Main'
import TopMenu from '@/components/TopMenu'
//import i18next from '../../../config/initi18n';
import { useTranslation } from '../../i18n'
import SectionLogos from '@/components/SectionLogos'


//import { useTranslation } from 'next-i18next'

//import useTranslation from 'next-translate/useTranslation'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation();
  const { t } = await useTranslation(lng)
  return (
    // <I18nProvider>
    <Main lng={lng}>
      <SectionLogos lng={lng}/>

      {/* Miembros de AMPB (repetido 2.2) <br/>
      <SetionAMPBMembers lng={lng} /> */}
      
    </Main>
    // </I18nProvider>
  )
}
