import React from 'react';
import Section from './Section';
import Styles from '../../app/css/setion2.module.css'
import { useTranslation } from '../i18n'

const Section2 = async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section id="whoarewe" className={Styles.section2}>
      <div className={Styles.wave}>
      </div>
      <div className={Styles.totalScreenBackgroung}>
        
        <div className={Styles.FTM_desc}>
          <h2>
            {t('section2.title')}
          </h2>
          <p>{t('section2.text1')}</p>
          <p>{t('section2.text2')}</p>
          <div>
            <div className={Styles.FTM_logo}></div>
            <div className={Styles.AMBP_logo}></div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Section2;