import React from 'react'
import './Brands.css'
import Button from '../../../components/Sidebar/SidebarComponets/Button/Button'

const Brands = ({handleClick}) => {
  return (
    <div className='categories'>
      <>Brands</>
    <div className='categories-btns'>
      {/* <button className='btns'>All Products</button> */}
        <Button onClickHandler={handleClick} value="" title="All Products"/>
        <Button onClickHandler={handleClick} value="Nike" title="Nike"/>
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas"/>
        <Button onClickHandler={handleClick} value="Puma" title="Puma"/>
        <Button onClickHandler={handleClick} value="Vans" title="Vans"/>
    </div>
    </div>
  )
}

export default Brands