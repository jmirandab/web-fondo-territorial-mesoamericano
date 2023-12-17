"use client"

import React, {useState} from 'react';
import {cookieName } from '../../config/initi18n'
import styles from '../../app/page.module.css'
import TopMenu from './TopMenu';
import { useCookies } from 'react-cookie'

export default function Main({
  children,
  lng
}: {
  children: React.ReactNode,
  lng: string 
}) {
   
  const [isSmallDesktopMenu, setIsSmallDesktopMenu] = useState(false);
  const scrollListener: React.UIEventHandler<HTMLElement>  = (e) => {

    if(!isSmallDesktopMenu && e.currentTarget.scrollTop > 70) {
      setIsSmallDesktopMenu(true);
    } else if (isSmallDesktopMenu && e.currentTarget.scrollTop < 69 ){

      setIsSmallDesktopMenu(false);
    }
  }

  return (
    <main suppressHydrationWarning onScroll={scrollListener} className={styles.main}>
      <div className={styles.description}>
       <TopMenu isSmall={isSmallDesktopMenu} lng={lng} ></TopMenu>
      </div>
      <div className={styles.overflowScroll}>
        {children}
      </div>
    </main>

  )
}