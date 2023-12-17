import React from 'react';
import Section from './Section';

import Styles from '../../app/css/setion9.module.css'
import StylesPage from '../../app/page.module.css'
import { useTranslation } from '../i18n'

const Section9= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.section9}>
      <div className={Styles.totalScreenBackgroung}>
        <h2>
          {t('section9.title')}
        </h2>


        <div className={StylesPage.green_card}>{t('section9.text1')}</div>
        <div className={Styles.firstRow}>
          <div className={Styles.col1}>
            <div>{t('section9.text2')}</div>
            <div>
              <div>{t('section9.text3')}</div>
              <div>{t('section9.text4')}</div>
            </div>
          </div>


          <div className={Styles.col2}>
            <div>{t('section9.text5')}</div>

            <div>{t('section9.text6')}</div>
          </div>
        </div>

      </div>
    </Section>
  );
};

export default Section9;