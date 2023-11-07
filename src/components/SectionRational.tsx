import React from 'react';
import Section from './Section';
import Styles from '../app/css/setionRational.module.css'
import StylesPage from '../app/page.module.css'
import { useTranslation } from '../app/i18n'


const SectionRational = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <>
      <Section id='rational' className={Styles.section4}>
        <div className={Styles.totalScreenBackgroung}>
          <h2 className={StylesPage.whiteH2}>
            {t('section4.title')}
          </h2>
          <div className={Styles.card_top}>
            <div className={Styles.tucan_card}>
              <div className={Styles.scrollArea}>
                <p>
                  {t('section4.text1_part1')}
                  <span className={Styles.super}>{t('section4.text1_super')}</span>
                  {t('section4.text1_part2')}
                </p>
                <p>
                  {t('section4.text2_part1')}
                  {t('section4.text2_part2')}
                  {t('section4.text2_part3')}
                </p>
                <p>
                  {t('section4.text3_part1')}
                  <strong className={Styles.green}>{t('section4.text3_part2')}</strong>
                </p>

                <p className={Styles.small}>
                  <span className={Styles.green}>{t('section4.text4_part1')}</span>
                  {t('section4.text4_part2')}
                </p>
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