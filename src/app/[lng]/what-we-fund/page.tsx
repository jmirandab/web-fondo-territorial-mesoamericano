


import SectionFinancedInitiatives11 from '../../components/SectionFinancedInitiatives'
import SectionDirectTerritorialFinancing12 from '../../components/SectionDirectTerritorialFinancing'
import SectionResults13 from '../../components/SectionResults'
import SectionGovernanceLawEntrepreneurships14 from '@/app/components/SectionGovernanceLawEntrepreneurships'
import SectionFinancingInstruments10 from '../../components/SectionFinancingInstruments'
import Section5 from '@/app/components/Section5'
import Main from '@/app/components/Main'

//import i18next from '../../../config/initi18n';

//import { useTranslation } from 'next-i18next'

//import useTranslation from 'next-translate/useTranslation'

export default async function Home({ params: { lng } }: { params: { lng: string } }) {
  // const { t } = useTranslation();
  return (
    // <I18nProvider>
    <Main lng={lng} >
      <Section5 lng={lng} />
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
