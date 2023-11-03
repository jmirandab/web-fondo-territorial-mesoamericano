import React from 'react';
import Section from './Section';

import Styles from '../app/css/setionFinancingInstruments.module.css'
import StylesPage from '../app/page.module.css'
import { useTranslation } from '../app/i18n'

const SectionFinancingInstruments = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (<>
    <Section className={Styles.sectionFinancingInstruments}>
      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPage.whiteH2}>
          {t('section6.title')}
        </h2>
        <ol className={Styles.financingInstruments}>

          <li>
            <strong>{t('section6.bullet1')}</strong>
            <div>
              {t('section6.subBullet1')}
            </div>
          </li>
          <li>
            <strong>{t('section6.bullet2')}</strong>
            <div>
              {t('section6.subBullet2')}
            </div>
          </li>
          <li>
            <strong>{t('section6.bullet3')}</strong>
            <div>
              {t('section6.subBullet3')}
            </div>
          </li>
        </ol>
      </div>

    </Section>
    <div className={Styles.wave}>
    </div>
  </>
  );
};

export default SectionFinancingInstruments;