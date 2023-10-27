import React from 'react';
import Styles from '../app/page.module.css'
import clsx from 'clsx';

type SectionProps = {
    children: React.ReactNode,
    className?: string,
    id?: string
  }

export default function Section(props: SectionProps) {
    let {
        className,
        children,
        id,
      } = props
    return (
        <section {...props} className={clsx(className, Styles.sectionHeight)} >
           {children}
        </section>
    );
  }
