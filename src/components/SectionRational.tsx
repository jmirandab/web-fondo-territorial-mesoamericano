import React from 'react';
import Section from './Section';
import Styles from '../app/css/setionRational.module.css'
import { useTranslation } from '../app/i18n'


const SectionRational = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <>
      <Section className={Styles.section4}>
        <div className={Styles.totalScreenBackgroung}>
          <h2>
            {t('section4.title')}
          </h2>
          <div className={Styles.card_top}>
            <div className={Styles.tucan_card}>
              <div className={Styles.scrollArea}>
                <p>{t('section4.text2')}</p>
                <p>{t('section4.text1')}</p>
              </div>
            </div>
          </div>
        </div>

      </Section>
      <div className={Styles.wave}></div>
    </>

  );
};

export default SectionRational;