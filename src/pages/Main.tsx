import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/footer/Footer'
import Navbar from '../components/navbar/Navbar'
import '../styles/css/styles.css'

const Main = () => {
  return (
    <div>
      <header><Navbar/></header>
      <Outlet/>
      <footer><Footer/></footer>
    </div>
  )
}

export default Main
