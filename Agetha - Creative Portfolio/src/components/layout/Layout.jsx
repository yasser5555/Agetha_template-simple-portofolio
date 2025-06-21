import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../Navbar/NavBar'
export default function Layout() {
  return (
   <React.Fragment>
    <Navbar/>
    <Outlet/>
   </React.Fragment>
  )
}
