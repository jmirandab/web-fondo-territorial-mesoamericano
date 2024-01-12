import React from 'react';
import Section from './Section';

import Styles from '../../app/css/sectionHowWeWork.module.css'
import StylesPage from '../../app/page.module.css'
import { useTranslation } from '../i18n'
import clsx from 'clsx'
import Link from 'next/link'

const SectionHowWeWork = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <Section id="HowWeWork" className={Styles.section9}>
      <div className={Styles.wave}></div>

      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPage.whiteH2}>
          {t('section9.title')}
        </h2>
        <p>{t('section9.pre_text1')}</p>

        <p>{t('section9.pre_text2')}</p>

        <p>
          {t('section9.pre_text3')}
          <Link target="_blank" href="https://www.alianzamesoamericana.org/es/escuela-liderazgo/">{t('section9.pre_text4')}</Link>
          {t('section9.pre_text5')}
          <Link target="_blank" href="https://www.mujeresmesoamericanas.org/">{t('section9.pre_text6')}</Link>
        </p>

        <div className={Styles.greenText}>{t('section9.text1')}</div>
        <div className={Styles.firstRow}>
          <div className={Styles.col1}>
            <div className={Styles.peopleImage} ></div>
            <div className={Styles.peopleTextWrap}>
              <div className={clsx(Styles.col1PeopleSub, Styles.col1PeopleSub1)}>
                <div className={Styles.bracket}>
                  <div className={Styles.bracketArrow}></div>
                </div>
                {t('section9.text2')}
              </div>
              <div className={Styles.col1PeopleSub}>
                <div className={Styles.bracket}>
                  <div className={Styles.bracketArrow}></div>
                </div>
                <div>

                  {t('section9.text3')}
                </div>
                <div>
                  {t('section9.text4')}
                </div>
              </div>
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

export default SectionHowWeWork;