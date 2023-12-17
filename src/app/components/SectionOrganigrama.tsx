import React from 'react';
import Section from './Section';

import Styles from '../../app/css/setionorganigrama.module.css'
import StylesPage from '../../app/page.module.css'
import clsx from 'clsx';
import { useTranslation } from '../i18n'
import Image from 'next/image';

const SectionOrganigrama = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <Section className={Styles.setionorganigrama} id={"FTM-Organizational-Chart"}>
      <div className={Styles.totalScreenBackgroung}>
        <h2 className={StylesPage.whiteH2}>
          {t('setionorganigrama.title')}
        </h2>

        <div className={Styles.gridTop}>
          <div className={clsx(Styles.board, Styles.bubble)}>
            {t('setionorganigrama.text1')}
          </div>
          <div className={clsx(Styles.management, Styles.bubble)}>
            {t('setionorganigrama.subText1')}
          </div>
          <div className={Styles.secretariaTecnica}>
            <div className={Styles.secretariaTecnicaImgWrap}>
              <div className={Styles.firstDecor}>
                {t('setionorganigrama.testaside')}
              </div>
              <div className={Styles.firstImg}>
                <Image
                  src={"../images/AMPB_logo.png"}
                  fill={true}
                  alt={"aria.imgAMPBLogo"}
                  lang="es"
                  unoptimized={true}
                />
              </div>
              <div className={Styles.secImg}>
                <Image
                  src={"../images/coordinadmujereslogo.png"}
                  fill={true}
                  alt={"aria.imgEMDLLogo"}
                  lang="es"
                  unoptimized={true}
                />
              </div>
              <div className={Styles.lastImg}>
                <Image
                  unoptimized={true}
                  src={"../images/escuela_meso_logo.png"}
                  fill={true}
                  alt={"aria.imgCMLTMLogo"}
                  lang="es"
                />
              </div >

              <div className={Styles.lastDecor}></div>
            </div>
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
              <div className={clsx(Styles.directTitle, Styles.bubble)}>
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