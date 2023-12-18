"use client"

import React from 'react';
import LngSwitcher from './LngSwitcher';
import Link from 'next/link'
import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import Styles from '../../app/css/topMenu.module.css'
import clsx from 'clsx';


const lng_en = {
  "option1": "About us",
  "option2": "What we fund",
  "option3": "Board of Directors",
  "option4": "Strategic Partners",
  "option5": "Complaint Form",
  "submenu1_1": "Home",
  "submenu1_2": "About us",
  "submenu1_3": "AMPB Members",
  "submenu1_4": "Rationale",
  "submenu1_5": "What do we finance?",
  "submenu1_6": "How we work?",
  "submenu1_7": "Organizational Chart"
};

const lng_es = {
  "option1": "Quiénes somos",
  "option2": "Qué financiamos",
  "option3": "Junta Directiva",
  "option4": "Socios Estratégicos",
  "option5": "Formulario de quejas",
  "submenu1_1": "Inicio",
  "submenu1_2": "Quiénes somos",
  "submenu1_3": "Miembros de la AMPB",
  "submenu1_4": "Razón de ser",
  "submenu1_5": "Qué financiamos",
  "submenu1_6": "Cómo trabajamos",
  "submenu1_7": "Organigrama FTM"
}



const TopMenu = ({ lng, isSmall = false }: { lng: string, isSmall?: boolean }) => {
  const menu = lng === "es" ? lng_es : lng_en;
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
      text: menu.option1,
      subItems: [
        {
          href: `/${lng}/home#whoarewe`,
          text: menu.submenu1_1,
        },
        {
          href: `/${lng}/home#AMPBMembers`,
          text: menu.submenu1_3,
        },
        {
          href: `/${lng}/home#rational`,
          text: menu.submenu1_4,
        },
        {
          href: `/${lng}/home#whatdowefinance`,
          text: menu.submenu1_5,
        },
        {
          href: `/${lng}/home#HowWeWork`,
          text: menu.submenu1_6,
        },
        {
          href: `/${lng}/home#FTM-Organizational-Chart`,
          text: menu.submenu1_7,
        }
      ]
    }, {
      href: `/${lng}/what-we-fund`,
      text: menu.option2,

    },
    , {
      href: `/${lng}/board`,
      text: menu.option3,

    },
    // {
    //   href: `/${lng}/how-we-operate`,
    //   text: menu.option3
    // },
    {
      href: `/${lng}/strategic-partners`,
      text: menu.option4
    },
    {
      href: `/${lng}/form`,
      text: menu.option5
    },
  ]

  const SubMenuOptions = (subItems: { href: string, text: string }[]) => subItems.map((item) => <li className={Styles.subMenuItem} key={item?.href}>
    <Link href={item.href} onClick={menuOff}>
      {item.text}

    </Link>
  </li>)




  //  const [menuOptions, setMenuOptions] = useState<React.JSX.Element[]>([])


  const menuOptions = menuItems.map((item) => <li className={Styles.menuItem} key={item?.href}>
    <Link href={item?.href || "#"} onClick={menuOff}>
      {item?.text}
      <FontAwesomeIcon className={Styles.chevrionIcon} icon={faChevronLeft} />
    </Link>
    {item?.subItems && <ol className={Styles.subItems}>
      {SubMenuOptions(item?.subItems)}
    </ol>}
  </li>)
  //setMenuOptions(menuOptionsVar)

  // console.log("TOP "+ lng );
  // console.log("homeLogo " + t('aria.homeLogo'));

  return (
    <header suppressHydrationWarning className={clsx(Styles.allignTop, isSmall && Styles.smallMenu)}>
      {/* <Link suppressHydrationWarning aria-label={t('aria.homeLogo')} href={`/${lng}/home`}> */}
      <Link suppressHydrationWarning aria-label={menu.submenu1_1} href={`/${lng}/home`}>
        <span className={Styles.logo}>
        </span>
      </Link>

      <div className={Styles.allign2}>

        <div className={Styles.menuOptions} onBlur={hideListForMobile}>
          <div className={Styles.buttonAlign}>
            <button aria-label='navigation menu' onClick={toggleMenu} className={Styles.hambMenu} >
              <FontAwesomeIcon className={Styles.icon} icon={faBars} />
            </button >
          </div>

          {/* <ol className={clsx(Styles.allign3, menuOpen && Styles.list_visible)}> */}
          <ol className={clsx(Styles.allign3, menuOpen && Styles.list_visible)}>
            {menuOptions}
          </ol>
        </div>
        <LngSwitcher lng={lng} />
      </div>
      {/* <h1 className={Styles.screen_reader_text}>{t('topH1')}</h1> */}
    </header>
  );
};

export default TopMenu;