import React from 'react'
import './Sidebar.css';
import SidebarCategory from "./Category/SidebarCategory";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";


const Sidebar = () => {
  return (
    <>
    <section className='sidebar'>
        <div className="logo-container">
            <h1>🛒</h1>
            <div>
                <SidebarCategory />
                <Price />
                <Colors />
            </div>
        </div>
    </section>
    </>
  )
}

export default Sidebar