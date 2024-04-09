import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import './style.css'
import ReportCart from '../../components/reportCart/ReportCart'

const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='homeWrapper'>
            <Header/>
           <div className='reortCartContainer'>
           <ReportCart/>
           <ReportCart/>
           <ReportCart/>
           <ReportCart/>
           </div>
        </div>
    </div>
  )
}

export default Home