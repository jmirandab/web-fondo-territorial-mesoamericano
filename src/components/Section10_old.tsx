import React from 'react';
import Section from './Section';

import Styles from '../app/css/setion10.module.css'
import StylesPage from '../app/page.module.css'
import { useTranslation } from '../app/i18n'

const Section10= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section >
      <div className={Styles.totalScreenBackgroung}>
        <h2>
          {t('section10.title')}
        </h2>

        <ol>
          <li>{t('section10.text1')}</li>
        </ol>
        <ol>
          <li>{t('section10.text2')}</li>
        </ol>
        <ol>
          <li>{t('section10.text3')}</li>
        </ol>



      </div>
    </Section>
  );
};

export default Section10;