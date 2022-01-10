import React from 'react'
import './layout.css'
import Sidebar from '../Sidebar/Sidebar'
import Header from '../Header/Header'

const Layout = (props) => {
  return (
    <>
      <Header />
      <div className='layOut'>
        <Sidebar />
        <div className='mainScreen'>{props.children}</div>
      </div>
    </>
  )
}

export default Layout
