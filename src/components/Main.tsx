"use client"

import React, {useState} from 'react';

// import imf from "../../public/images/logo-FTM.svg"
import styles from '../app/page.module.css'
import TopMenu from './TopMenu';




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
      console.log("Scroll set true")
      setIsSmallDesktopMenu(true);
    } else if (isSmallDesktopMenu && e.currentTarget.scrollTop < 69 ){
    console.log("Scroll set true")
      setIsSmallDesktopMenu(false);
    }
  }

  return (
    <main onScroll={scrollListener} className={styles.main}>
      <div className={styles.description}>
       <TopMenu isSmall={isSmallDesktopMenu} lng={lng} ></TopMenu>
      </div>
      {children}
    </main>

  )
}