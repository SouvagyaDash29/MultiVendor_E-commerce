import React from 'react'
import './SidebarCategory.css'
import Input from '../../Input/Input'


const SidebarCategory = () => {
  return (
    <div>
      <h2 className='sidebar-title'> Category</h2>
      <div className='sidebar-label'>
        <Input/>
        <Input/>
        <Input/>
        <Input/>
      </div>
    </div>
  )
}

export default SidebarCategory