import React from 'react';
import Section from './Section';

import Styles from '../app/css/setion5.module.css';
import StylesPage from '../app/page.module.css'
import clsx from 'clsx';
import { useTranslation } from '../app/i18n'

const Section5= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section id="whatdowefinance" className={Styles.section5}>
      <div className={Styles.totalScreenBackgroung}>
        <h2>{t('section5.title')}</h2>
        
        <p>{t('section5.text1')}</p>
        
        <div className={StylesPage.green_card}>
          <ol className={Styles.finance}>

            <li data-num='1'>{t('section5.bullet1')}</li>
            <li data-num='2'>{t('section5.bullet2')}</li>
            <li data-num='3'>{t('section5.bullet3')}</li>
            <li data-num='4'>{t('section5.bullet4')}</li>
          </ol>
          <div className={Styles.transversal_container}>
            <h3>{t('section5.subTitle')}</h3>
            <ul className={Styles.transversal}>
              <li>{t('section5.subBullet1')}</li>
              <li>{t('section5.subBullet2')}</li>
              <li>{t('section5.subBullet3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section5;