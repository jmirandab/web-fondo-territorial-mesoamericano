"use client"

import SectionQuejas from "../../components/SectionQuejas"
import SectionDialogo from "@/app/components/SectionDialogo"
import SectionDialogBanner from "@/app/components/SectionDialogBanner"
import Main from '@/app/components/Main'

export default function Home({ params: { lng } }: { params: { lng: string } }) {

  return (
    <Main lng={lng} >
      <SectionDialogBanner lng={lng} />
      <SectionDialogo lng={lng} />
    </Main>
  )
}
