import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Sidebar/sidebar_vendor.css'
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { MdDashboard } from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiOutlineTransaction } from "react-icons/ai";
import { TbReportSearch } from "react-icons/tb";
import { IoLogOutOutline } from "react-icons/io5";
function Sidebar_vendor({ openSidebarToggle, OpenSidebar }) {
  const [username, setUsername] = useState("");
  const [UserProfileImage,setUserProfileImage] =useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        // Fetch username from the backend
        const response = await axios.get('YOUR_BACKEND_API_ENDPOINT_FOR_USERNAME');
        setUsername(response.data.username);
      } catch (error) {
        console.error('Error fetching username:', error);
      }
     
    };
    const fetchUserProfileImageVendor = async()=>{
      try{
        const response =await axios.get('YOUR_BACKEND_API_ENDPOINT_FOR_USERPROFILEIMAGE')
        setUserProfileImage(response.data.UserProfileImage|| 'https://png.pngitem.com/pimgs/s/22-223968_default-profile-picture-circle-hd-png-download.png');
      }catch(error){
        console.error("Error fetching user profile-image",error);
        setUserProfileImage('https://png.pngitem.com/pimgs/s/22-223968_default-profile-picture-circle-hd-png-download.png');
      }
    }

    fetchUsername();
    fetchUserProfileImageVendor();
  }, []);

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div onClick={OpenSidebar} className="close-btn" />
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <div className="header-info ms-3">
           
          </div>
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <NavLink to="/" className='sidebar-text'><MdDashboard/>
           Dashboard</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Product" className='sidebar-text'><FaProductHunt/> Product</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Order" className='sidebar-text'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
            <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" fill="black" />
          </svg> Order</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Transaction" className='sidebar-text'><AiOutlineTransaction/> Transaction</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Profile" className='sidebar-text'><CgProfile/> Profile</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Report" className='sidebar-text'><TbReportSearch/>Reports </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Logout" className='sidebar-text'><IoLogOutOutline/> Logout</NavLink>
        </li>
      </ul>
      <div className="user-details">
              {UserProfileImage ? (
                <img src={UserProfileImage} alt='' height={100} width={100} className='UserProfileImage' style={{position:'absolute',top:'592px'}} /> 
              ) : (
                <img src="https://png.pngitem.com/pimgs/s/22-223968_default-profile-picture-circle-hd-png-download.png" alt="Default" height={50} width={50} />
              )}
              <span className="font-w600"><h1> Hi, {username} </h1></span>
             
              </div>
    </aside>
  );
}

export default Sidebar_vendor;
