import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className='page-container'>
          <h1 className="w-12 text-rose-900">Shayne Smith</h1>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
};

export default Layout;