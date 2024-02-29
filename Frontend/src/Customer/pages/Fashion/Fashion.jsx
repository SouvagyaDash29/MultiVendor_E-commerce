import React from 'react'
import Product from '../../components/Products/Product'
import Categories from './Categories/Categories'
import Sidebar from '../../components/Sidebar/Sidebar'
const Fashion = () => {
  return (
    <div>
      <Sidebar />
      <Categories />
      <Product />
    </div>
  )
}

export default Fashion