import React from 'react';
import Section from './Section';
import Styles from '../app/css/sectionBoard.module.css'
import StylesPage from '../app/page.module.css'
import { useTranslation } from '../app/i18n'
import DirectorsExpandableText from './DirectorsExpandableText'

const SectionBoard = async ({ lng }: { lng: string }) => {
  const { t } = await useTranslation(lng);

  const KirseText = <>
    <p>{t('sectionBoard.KirsiChavda_Desc1')}</p>
    <p>{t('sectionBoard.KirsiChavda_Desc2')}</p>
    <p>{t('sectionBoard.KirsiChavda_Desc3')}</p>
    <p>{t('sectionBoard.KirsiChavda_Desc4')}</p>
    <p>{t('sectionBoard.KirsiChavda_Desc5')}</p>
  </>

  const SusanText = <>
    <p>{t('sectionBoard.SusanKandel_Desc1')}</p>
    <p>{t('sectionBoard.SusanKandel_Desc2')}</p>
    <p>{t('sectionBoard.SusanKandel_Desc3')}</p>
  </>

  const JeffreyText = <>
    <p>{t('sectionBoard.JeffreyCampbell_Desc1')}</p>
    <p>{t('sectionBoard.JeffreyCampbell_Desc2')}</p>
    <p>{t('sectionBoard.JeffreyCampbell_Desc3')}</p>
    <p>{t('sectionBoard.JeffreyCampbell_Desc4')}</p>
  </>



  return (
    <Section className={Styles.sectionBoard}>

      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPage.whiteH2}>
          {t('sectionBoard.title')}
        </h2>
        <ol className={Styles.baordList}>

          <li className={Styles.susan}>
            <h3>{t('sectionBoard.SusanKandel_Name')}</h3>

            <div className={Styles.imgWrap2}></div>
            <DirectorsExpandableText lng={lng}>{SusanText}</DirectorsExpandableText>
            <div className={Styles.stepsDecor}></div>
          </li>
          <li className={Styles.jeffrey}>

            <h3>{t('sectionBoard.JeffreyCampbell_Name')}</h3>

            <div className={Styles.imgWrap2}></div>
            <DirectorsExpandableText lng={lng}>{JeffreyText}</DirectorsExpandableText>

            
            <div className={Styles.hojaDecor}></div>
          </li>
          <li className={Styles.Kirse}>
            <h3>{t('sectionBoard.KirsiChavda_Name')}</h3>

            <div className={Styles.imgWrap2}></div>
            <DirectorsExpandableText lng={lng}>{KirseText}</DirectorsExpandableText>
            <div className={Styles.hojasDecor}></div>
          </li>
        </ol>
      </div>
    </Section>
  );
};

export default SectionBoard;