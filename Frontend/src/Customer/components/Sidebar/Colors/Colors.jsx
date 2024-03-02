import React from "react";
import './Colors.css';
import Input from "../../Input/Input";

const Colors = () => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors</h2>

      <div className="sidebar-label">
       <Input />
       <Input />
       <Input />
       <Input />
      </div>
    </div>
  );
};

export default Colors;
