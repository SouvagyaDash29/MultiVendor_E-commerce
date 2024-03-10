import React from 'react'
import './Category.css'
import Input from '../SidebarComponets/Input/Input'


const Category = ({handleChange}) => {
  return (
    <div>
      <h2 className='sidebar-title'> Category</h2>
      <div className='sidebar-label'>
        <lable className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className='checkmark'></span> All
        </lable>


        <Input 
        handleChange={handleChange}
        value="sneakers"
        title="Sneakers"
        name="test"
        />
        <Input 
        handleChange={handleChange}
        value="flats"
        title="Flats"
        name="test"
        />
        <Input 
        handleChange={handleChange}
        value="sandals"
        title="Sandals"
        name="test"
        />
        <Input 
        handleChange={handleChange}
        value="heels"
        title="Heels"
        name="test"
        />

      </div>
    </div>
  )
}

export default Category