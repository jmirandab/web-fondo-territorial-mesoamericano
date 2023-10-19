import React from 'react';
import Section from './Section';

import Styles from '../app/css/setionFinancingInstruments.module.css'
import { useTranslation } from '../app/i18n'

const SectionFinancingInstruments= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.sectionFinancingInstruments}>
      <div className={Styles.totalScreenBackgroung}>
        <h2> 
          {t('section6.title')}
        </h2>
        <ol className={Styles.financingInstruments}>

          <li>
            {t('section6.bullet1')}
            <div>
              {t('section6.subBullet1')}
            </div>
          </li>
          <li>
            {t('section6.bullet2')}
            <div>
              {t('section6.subBullet2')}
            </div>
          </li>
          <li>
            {t('section6.bullet3')}
            <div>
              {t('section6.subBullet3')}
            </div>
          </li>
        </ol>
      </div>
    </Section>
  );
};

export default SectionFinancingInstruments;