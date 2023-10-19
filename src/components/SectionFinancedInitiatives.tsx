import React from 'react';
import Section from './Section';

import Styles from '../app/css/setionFinancedInitiatives.module.css'
import StylesPage from '../app/page.module.css'
import { useTranslation } from '../app/i18n'
import clsx from 'clsx';

const SectionFinancedInitiatives= async ({lng}: {lng:string}) => {

  const { t } = await useTranslation(lng);
  return (
    <Section >
      <div className={Styles.totalScreenBackgroung}>
        <h2>
          {t('section10.title')}
        </h2>

        <ol>
          <li className={StylesPage.green_card}>{t('section10.text1')}</li>
 
          <li className={StylesPage.green_card}>{t('section10.text2')}</li>

          <li className={StylesPage.green_card}>{t('section10.text3')}</li>
        </ol>



      </div>
    </Section>
  );
};

export default SectionFinancedInitiatives;