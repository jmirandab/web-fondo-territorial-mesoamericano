"use client"
import Styles from '../../app/css/sectionBoard.module.css'
import clsx from 'clsx'
import { useState } from 'react'


const lng_es = {
  "title": "Junta Directiva",
  "expandText": "Ver más",
  "colapsedText": "Ver menos",
};


const lng_en = {
  "title": "Board of Directors",
  "expandText": "Read more",
  "colapsedText": "See less"
}



const DirectorsExpandableText = ({
  children,
  lng,
}: {
  children: React.ReactNode,
  lng: string
}) => {

 // const { t } = useTranslation(lng);
  const sectionBoard = lng==="es"? lng_es: lng_en;
  const [isExpanded, setIsexpanded] = useState(false);
  const onClick = () => {
    setIsexpanded(!isExpanded);
  }

  return (
    <>
      <div className={clsx(Styles.personText, isExpanded && Styles.expanded)}>
        {children}
      </div>
        <button onClick={onClick}>
        {isExpanded?sectionBoard.colapsedText: sectionBoard.expandText}
        </button>
   
    </>
  )
}


export default DirectorsExpandableText;
