import React from 'react';
import Section from './Section';

import Styles from '../../app/css/setionResults.module.css'

import { useTranslation } from '../i18n'

const SectionResults = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <>
      <Section className={Styles.section12} >
      
        <div className={Styles.totalScreenBackgroung}>
        <div >
          <div className={Styles.header}>
            <h2>
              {t('section12.title')}
            </h2>
            <span>{t('section12.text1')}</span>
          </div>

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

        </div>
        <div className={Styles.bottomLeftLeaves}></div>
      </Section>
    </>
  );
};

export default SectionResults;