import React from "react";
import './Colors.css';
import Input from "../SidebarComponets/Input/Input";

const Colors = ({handleChange}) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <div className="sidebar-label">
      <lable className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className='checkmark all'></span> All
        </lable>

       <Input 
       handleChange={handleChange}
       value="black"
       title="Black"
       name="test3"
       color="black"/>
       <Input 
       handleChange={handleChange}
       value="blue"
       title="Blue"
       name="test3"
       color="blue"/>
       <Input 
       handleChange={handleChange}
       value="red"
       title="Red"
       name="test3"
       color="red"/>
       <Input 
       handleChange={handleChange}
       value="green"
       title="Green"
       name="test3"
       color="green"/>


       <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} name="test3" value="white" />
        <span className="checkmark" style={{background: "white", border: "0.13vw solid black"}}></span>
        White
       </label>
       
      </div>
    </div>
  );
};

export default Colors;
