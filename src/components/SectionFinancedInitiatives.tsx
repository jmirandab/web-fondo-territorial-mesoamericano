import React from 'react';
import Section from './Section';

import Styles from '../app/css/setionFinancedInitiatives.module.css'
import StylesPages from '../app/page.module.css'
import StylesPage from '../app/page.module.css'
import { useTranslation } from '../app/i18n'
import clsx from 'clsx';

const SectionFinancedInitiatives = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.section6}>
      <div className={Styles.totalScreenBackgroung}>

        <h2 className={StylesPages.greenH2}>
          {t('section10.title')}
        </h2>

        <ol>
          <li className={clsx(StylesPage.green_card, Styles.initiative)}>{t('section10.text1')}</li>
          <li className={clsx(StylesPage.green_card, Styles.initiative)}>{t('section10.text2')}</li>
          <li className={clsx(StylesPage.green_card, Styles.initiative)}>{t('section10.text3')}</li>
        </ol>

      </div>
      <div className={Styles.wave_container}>
        <div className={Styles.wave}>
        </div>
      </div>
    </Section>
  );
};

export default SectionFinancedInitiatives;