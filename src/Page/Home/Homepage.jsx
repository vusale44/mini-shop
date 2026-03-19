import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Homemain from '../../components/Homemain/Homemain'
import Brends from '../../components/Brends/Brends'
import Clothes from '../../components/Clothes/Clothes'
import Clothes2 from '../../components/Clothes2/Clothes2'
import List from '../../components/List/List'
import Feedback from '../../components/Feedback/Feedback'





const Homepage = () => {
  return (
    <main >

      <Header />
      <Homemain />
      <Brends />
      <Clothes />
      <Clothes2 />
      <List />
      <Feedback/>
      <Footer />
    </main>
  )
}

export default Homepage