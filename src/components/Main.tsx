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
  
      setIsSmallDesktopMenu(true);
    } else if (isSmallDesktopMenu && e.currentTarget.scrollTop < 69 ){
   
      setIsSmallDesktopMenu(false);
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <TopMenu isSmall={isSmallDesktopMenu} lng={lng} ></TopMenu>
      </div>
      {children}
    </main>

  )
}