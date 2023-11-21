"use client"

// import Image from 'next/image'

// import styles from './../../page.module.css'
import Section1 from '../../../components/Section1'
import Section2 from '../../../components/Section2'
import SectionRational from '../../../components/SectionRational'
import SetionAMPBMembers from '../../../components/SetionAMPBMembers'
import Section5 from '../../../components/Section5'
import Section7 from '../../../components/Section7'
import Section8 from '../../../components/Section8'
import SectionHowWeWork8 from '../../../components/SectionHowWeWork'
import SectionOrganigrama9 from '../../../components/SectionOrganigrama'
import SectionVideo from '@/components/SectionVideo'
import Main from '@/components/Main'


export default function Home({ params: { lng } }: { params: { lng: string } }) {

  return (
    <Main lng={lng} >
      <Section1 lng={lng} />
      <SectionVideo />
      <Section2 lng={lng} />
      <SetionAMPBMembers lng={lng} />
      <SectionRational lng={lng} />
      <Section5 lng={lng} />
      <Section7 lng={lng} />
      <Section8 lng={lng} />
      <SectionHowWeWork8 lng={lng} />
      <SectionOrganigrama9 lng={lng} />

    </Main>
  )
}
