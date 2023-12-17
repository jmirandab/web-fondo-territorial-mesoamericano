import React from 'react';
import Section from './Section';

import Styles from '../../app/css/setionDirectTerritorialFinancing.module.css'
import StylesPage from '../../app/page.module.css'
import { useTranslation } from '../i18n'
import clsx from 'clsx';

const SetionDirectTerritorialFinancing= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.SetionDirectTerritorialFinancing} >
      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPage.greenH2}>
          {t('section11.title')}
        </h2>
          <div className={Styles.subHead}>{t('section11.text1')}</div>
          <div className={clsx(StylesPage.green_card, Styles.firstList)}>
            <strong>{t('section11.text2')}</strong>
            <span>{t('section11.text3')}</span>
            <div>{t('section11.text4')}</div>
          </div>
          <div className={clsx(StylesPage.green_card, Styles.secundList)}>
            <strong>{t('section11.text5')}</strong>
            <div>{t('section11.text6')}</div>
          </div>
      </div>
      <div className={Styles.leftLeaves}></div>
      <div className={Styles.sectionTransition}></div>
    </Section>
  );
};

export default SetionDirectTerritorialFinancing;