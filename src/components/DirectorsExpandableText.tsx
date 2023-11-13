"use client"
import Styles from '../app/css/sectionBoard.module.css'
import clsx from 'clsx'
import { useState } from 'react'
import { useTranslation } from '../app/i18n/client'

const DirectorsExpandableText = ({
  children,
  lng,
}: {
  children: React.ReactNode,
  lng: string
}) => {

  const { t } = useTranslation(lng);
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
        {isExpanded?t('sectionBoard.colapsedText'): t('sectionBoard.expandText')}
        </button>
   
    </>
  )
}


export default DirectorsExpandableText;
