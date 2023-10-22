"use client"

import React from 'react';
import LngSwitcher from './LngSwitcher';
import Link from 'next/link'
import { useState } from 'react';
// import imf from "../../public/images/logo-FTM.svg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Styles from '../app/css/topMenu.module.css'
import { useTranslation } from '../app/i18n/client'
import clsx from 'clsx';
// import { useTranslation } from '../../../i18n/client'

const TopMenu = ({ lng, isSmall = false }: { lng: string, isSmall?: boolean }) => {

  const { t } = useTranslation(lng);
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const menuOff = () => {
    setMenuOpen(false);
  }

  const hideListForMobile = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget?.contains(e.relatedTarget)) {
      setMenuOpen(false);
    }
  }

  let menuItems = [
    {
      href: `/${lng}/home`,
      text: t("menu.option1"),
      subItems: [
        {
          href: `/${lng}/home`,
          text: t("menu.option3"),
        },
        {
          href: `/${lng}/home#video`,
          text: "video",
        },
        {
          href: `/${lng}/home#FTM-Organizational-Chart`,
          text: t("menu.option1"),
        },
      ]
    }, {
      href: `/${lng}/what-we-fund`,
      text: t("menu.option2"),

    },
    // {
    //   href: `/${lng}/how-we-operate`,
    //   text: t("menu.option3")
    // },
    {
      href: `/${lng}/strategic-partners`,
      text: t("menu.option4")
    },
  ]

  const SubMenuOptions = (subItems: { href: string, text: string }[]) => subItems.map((item) => <li className={Styles.subMenuItem} key={item.href}>
    <Link href={item.href} onClick={menuOff}>
      {item.text}

    </Link>
  </li>)

  const menuOptions = menuItems.map((item) => <li className={Styles.menuItem} key={item.href}>
    <Link href={item.href} onClick={menuOff}>
      {item.text}
      <FontAwesomeIcon className={Styles.chevrionIcon} icon={faChevronLeft} />
    </Link>
    {item.subItems && <ol className={Styles.subItems}>
      {SubMenuOptions(item.subItems)}
    </ol>}
  </li>)



  return (
    <header className={clsx(Styles.allignTop, isSmall && Styles.smallMenu)}>
      <Link href={`/${lng}/home`}>
        <span className={Styles.logo}>
        </span>
      </Link>

      <div className={Styles.allign2}>

        <div className={Styles.menuOptions} onBlur={hideListForMobile}>
          <div className={Styles.buttonAlign}>
            <button aria-label='navigation menu' onClick={toggleMenu} className={Styles.hambMenu} >
              <FontAwesomeIcon className={Styles.icon} icon={faBars} />
            </button>
          </div>

          {/* <ol className={clsx(Styles.allign3, menuOpen && Styles.list_visible)}> */}
          <ol className={clsx(Styles.allign3, menuOpen && Styles.list_visible)}>
            {menuOptions}
          </ol>
        </div>
        <LngSwitcher lng={lng} />
      </div>
      <h1 className={Styles.screen_reader_text}>{t('topH1')}</h1>
    </header>
  );
};

export default TopMenu;