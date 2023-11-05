import React from 'react';
import Section from './Section';

import Styles from '../app/css/setion8.module.css'
import StylesPages from '../app/page.module.css'
import { useTranslation } from '../app/i18n'
import Image from 'next/image';

const Section8 = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.section8}>
      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPages.gre}>
          {t('section8.title')}
        </h2>
        <div className={Styles.maizAlign}>
          <div className={Styles.sky}>
          <Image
            
            src={"../images/processSky2.svg"}
            fill={true} 
            alt="aria hidden"
            aria-hidden
          />
          </div>
          <ol className={Styles.maiz}>
            <li >
              <div className={Styles.subTitle}>{t('section8.subTitle1')}</div>
              <strong>{t('section8.sub2Title1')}</strong>
              <div >{t('section8.text1')}</div>
            </li>

            <li >
              <div className={Styles.maizDecor}></div>
              <div className={Styles.subTitle}>{t('section8.subTitle2')}</div>
              <strong>{t('section8.sub2Title2')}</strong>
              <div>{t('section8.text2')}</div>
            </li>
          </ol>
        </div>
      </div>
    </Section>
  );
};

export default Section8;