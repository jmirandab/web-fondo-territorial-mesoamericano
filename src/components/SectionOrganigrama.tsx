import React from 'react';
import Section from './Section';

import Styles from '../app/css/setionorganigrama.module.css'
import StylesPage from '../app/page.module.css'
import clsx from 'clsx';
import { useTranslation } from '../app/i18n'

const SectionOrganigrama = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <Section >
      <div className={Styles.totalScreenBackgroung}>
        <h2>
          {t('setionorganigrama.title')}
        </h2>

        <div>
          <div className={Styles.bubble}>
            {t('setionorganigrama.text1')}
          </div>
          <div className={Styles.directTop}>
            <div>
              <div className={clsx(Styles.directTitle, Styles.bubble)}>{t('setionorganigrama.text2')}</div>
              <div className={Styles.officers}>
                <div className={Styles.bubble}>{t('setionorganigrama.text5')}</div>
                <div className={Styles.bubble}>{t('setionorganigrama.text6')}</div>
              </div>
            </div>

            <div className={Styles.direct}>
              <div className={clsx(Styles.directTitle, Styles.bubble)}>{t('setionorganigrama.text3')}</div>
              <div className={Styles.officers}>
                <div className={Styles.bubble}>{t('setionorganigrama.text7')}</div>
                <div className={Styles.bubble}>{t('setionorganigrama.text8')}</div>
                <div className={Styles.bubble}>{t('setionorganigrama.text9')}</div>
              </div>
            </div>
            <div className={Styles.direct}>
              <div className={Styles.bubble}>
                {t('setionorganigrama.text4')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionOrganigrama;