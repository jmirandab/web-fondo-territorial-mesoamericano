import React, { ReactNode } from 'react';
import Styles from '../app/page.module.css'
import clsx from 'clsx';

type SectionProps = {
    children: React.ReactNode,
    className?: string,
  }

export default function Section(props: SectionProps) {
    let {
        className,
        children,
      } = props
    return (
        <section className={clsx(className, Styles.sectionHeight)} >
           {children}
        </section>
    );
  }
