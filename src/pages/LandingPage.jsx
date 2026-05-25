import React from 'react'
import Footer from '../components/Footer'
import Content from '../components/Content'
import Items from '../components/Items'

export default function LandingPage({ search }) {
  return (
    <>
      <Items />
      <Content search={search} />
      <Footer />    
    </>
  )
}