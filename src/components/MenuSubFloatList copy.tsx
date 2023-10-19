import React from 'react';
import Link from 'next/link'
// import imf from "../../public/images/logo-FTM.svg"

import Styles from '../app/css/topMenu.module.css'
import { useTranslation } from '../app/i18n'

interface MenuSubFloatListProps { lng: string, items: { text: string, href: string }[] }

const MenuSubFloatList = async ({ lng, items }: MenuSubFloatListProps) => {

  const { t } = await useTranslation(lng);

  // const options = items.map((item) => <li>
  //   <Link href={item.href}>
  //     {item.text}
  //   </Link>
  // </li>)


  return (
    <header className={Styles.allignTop}>
      options
    </header>
  );
};

export default MenuSubFloatList;