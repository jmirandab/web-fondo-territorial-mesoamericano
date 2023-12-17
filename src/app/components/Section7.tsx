import React from 'react';
import Section from './Section';

import Styles from '../../app/css/setion7.module.css'
import StylesPage from '../../app/page.module.css'
import clsx from 'clsx';
import { useTranslation } from '../i18n'

const Section7= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.section7}>
      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPage.greenH2}> 
          {t('section7.title')}
        </h2>
        <ol className={clsx(Styles.aims,StylesPage.green_card)}>
       
          <li >
            {t('section7.text1')}
          </li>
          <li>
            <strong>{t('section7.text2')}</strong> <br/>
            {t('section7.text3')}
            
          </li>
          <div className={Styles.deerDecor}></div>
          <div className={Styles.hojasDecor}></div>
        </ol>
      </div>
    </Section>
  );
};

export default Section7;