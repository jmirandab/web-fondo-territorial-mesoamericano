import React from 'react';
import Section from './Section';

import Styles from '../app/css/setion12.module.css'
import StylesPage from '../app/page.module.css'
import { useTranslation } from '../app/i18n'

const Section10= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.section12}>
      <div className={Styles.totalScreenBackgroung}>
        <h2>
          {t('section12.title')}
        </h2>
        {t('section12.text1')}

        <ol className={Styles.firstRow}>
          <li>
            <ol>
              <li data-num='10'>{t('section12.col1-Text1')}</li>
              <li data-num='6'>{t('section12.col1-Text2')}</li>
              <li data-num='7'>{t('section12.col1-Text3')}</li>
              <li data-num='2'>{t('section12.col1-Text4')}</li>
              <li data-num='1'>{t('section12.col1-Text5')}</li>
            </ol>
          </li>
          <li>
            <ol>
              <li data-num='USD'>{t('section12.col2-Text1')}</li>
              <li data-num='80%'>{t('section12.col2-Text2')}</li>
              <li data-num='20%'>{t('section12.col2-Text3')}</li>
              <li data-num='USD'>{t('section12.col2-Text4')}</li>
            </ol>
          </li>
          <li>
            <ol>
              <li data-num='16952'>{t('section12.col3-Text1')}</li>
              <li data-num='6728'>{t('section12.col3-Text2')}</li>
              <li data-num='10 224'>{t('section12.col3-Text3')}</li>
              <li data-num='228'>{t('section12.col3-Text4')}</li>
            </ol>
          </li>
          <li>
            <ol>
              <li data-num='9'>{t('section12.col4-Text1')}</li>
              <li data-num='1'>{t('section12.col4-Text2')}</li>
            </ol>
          </li>
        </ol>
   



      </div>
    </Section>
  );
};

export default Section10;