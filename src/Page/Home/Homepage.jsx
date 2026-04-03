import React from 'react'


import Brends from '../../components/Brends/Brends'
import Clothes from '../../components/Clothes/Clothes'
import Clothes2 from '../../components/Clothes2/Clothes2'
import List from '../../components/List/List'
import Feedback from '../../components/Feedback/Feedback'
import { ProviderContext } from '../../components/Context/Contextapi'
import Homemain from '../../components/Homemain/Homemain'
import Search from '../../components/Search/Search'





const Homepage = () => {
  return (
    <main >
      <Homemain/>
        <Brends />
        <Clothes />
        <Clothes2 />
        <List />
        <Feedback />
     
      

    </main>
  )
}

export default Homepage