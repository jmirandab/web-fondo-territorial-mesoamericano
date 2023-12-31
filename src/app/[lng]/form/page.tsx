"use client"

import SectionQuejas from "../../components/SectionQuejas"
import Main from '@/app/components/Main'

export default function Home({ params: { lng } }: { params: { lng: string } }) {

  return (
    <Main lng={lng} >
      <SectionQuejas lng={lng} />

    </Main>
  )
}
