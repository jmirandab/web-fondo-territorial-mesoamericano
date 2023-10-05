import React from 'react';
import LngSwitcher from './LngSwitcher';
import Link from 'next/link'
// import imf from "../../public/images/logo-FTM.svg"

import Styles from '../app/css/topMenu.module.css'
import { useTranslation } from '../app/i18n'

const TopMenu = async ({ lng }: { lng: string }) => {

  const { t } = await useTranslation(lng);
  return (
    <header className={Styles.allignTop}>
      <Link href={`/${lng}/home`}>
        <span className={Styles.logo}>
        </span>
      </Link>

      <span className={Styles.allign2}>
        <LngSwitcher lng={lng} />

      

        <ol className={Styles.allign2}>
          <li>
            <Link href={`/${lng}/home`}>
              {t("menu.option1")}
            </Link>
          </li>
          <li>
            <Link href={`/${lng}/whatwefund`}>
              {t("menu.option2")}
            </Link>
          </li>
          <li>
            <Link href={`/${lng}/how-we-operate`}>
              {t("menu.option3")}
            </Link>
          </li>
          <li>
            <Link href={`/${lng}/projects`}>
              {t("menu.option4")}
            </Link>
          </li>
        </ol>

      </span>
    </header>
  );
};

export default TopMenu;