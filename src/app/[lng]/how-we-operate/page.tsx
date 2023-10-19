import styles from './../../page.module.css'

import SectionHowWeWork8 from '../../../components/SectionHowWeWork'
import SectionFinancedInitiatives11 from '../../../components/SectionFinancedInitiatives'
import SectionDirectTerritorialFinancing12 from '../../../components/SectionDirectTerritorialFinancing'
import SectionResults13 from '../../../components/SectionResults'
import SectionOrganigrama9 from '../../../components/SectionOrganigrama'
import SectionGovernanceLawEntrepreneurships14 from '@/components/SectionGovernanceLawEntrepreneurships'
import SectionFinancingInstruments10 from '../../../components/SectionFinancingInstruments'
import Main from '@/components/Main'


import TopMenu from '../../../components/TopMenu'
//import i18next from '../../../config/initi18n';

//import { useTranslation } from 'next-i18next'

//import useTranslation from 'next-translate/useTranslation'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation();
  return (
    // <I18nProvider>
    <Main lng={lng} >
      <div className={styles.description}>
        <TopMenu lng={lng} ></TopMenu>
      </div>

      <SectionHowWeWork8 lng={lng} />
      <SectionOrganigrama9 lng={lng} />
      <SectionFinancingInstruments10 lng={lng} />
      <SectionFinancedInitiatives11 lng={lng} />
      <SectionDirectTerritorialFinancing12 lng={lng} />
      <SectionResults13 lng={lng} />
      <SectionGovernanceLawEntrepreneurships14 lng={lng} />
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
