import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Sidebar/sidebar_vendor.css'
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

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
          <NavLink to="/" className='sidebar-text'><svg width="31" height="32" viewBox="0 0 31 32" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7917 27.625V14.7083H27.125V27.625H16.7917ZM3.875 17.2917V4.375H14.2083V17.2917H3.875ZM11.625 14.7083V6.95833H6.45833V14.7083H11.625ZM3.875 27.625V19.875H14.2083V27.625H3.875ZM6.45833 25.0417H11.625V22.4583H6.45833V25.0417ZM19.375 25.0417H24.5417V17.2917H19.375V25.0417ZM16.7917 4.375H27.125V12.125H16.7917V4.375ZM19.375 6.95833V9.54167H24.5417V6.95833H19.375Z" fill="black" />
          </svg> Dashboard</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Product" className='sidebar-text'><svg width="23" height="23" viewBox="0 0 23 23" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
            <path d="M11.4125 22.8291C5.15864 22.8291 0.0888672 17.7592 0.0888672 11.5054C0.0888672 5.25153 5.15864 0.181763 11.4125 0.181763C17.6664 0.181763 22.7362 5.25153 22.7362 11.5054C22.7362 17.7592 17.6664 22.8291 11.4125 22.8291ZM11.4125 20.5643C16.4157 20.5643 20.4715 16.5085 20.4715 11.5054C20.4715 6.50231 16.4157 2.44649 11.4125 2.44649C6.40941 2.44649 2.3536 6.50231 2.3536 11.5054C2.3536 16.5085 6.40941 20.5643 11.4125 20.5643ZM12.9225 11.5054C13.8606 11.5054 14.6211 10.7449 14.6211 9.80686C14.6211 8.86878 13.8606 8.10832 12.9225 8.10832H9.71399V11.5054H12.9225ZM12.9225 5.84359C15.1114 5.84359 16.8858 7.618 16.8858 9.80686C16.8858 11.9957 15.1114 13.7701 12.9225 13.7701H9.71399V17.1672H7.44924V5.84359H12.9225Z" fill="black" />
          </svg> Product</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Order" className='sidebar-text'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
            <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" fill="black" />
          </svg> Order</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Transaction" className='sidebar-text'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7V2H4V7M4 22H20C21.1046 22 22 21.1046 22 20V11H2V20C2 21.1046 2.89543 22 4 22ZM12 12V8.41421L14.2929 10.7071C14.6834 11.0976 15.3166 11.0976 15.7071 10.7071C16.0976 10.3166 16.0976 9.68342 15.7071 9.29289L12.7071 6.29289C12.3166 5.90237 11.6834 5.90237 11.2929 6.29289L8.29289 9.29289C7.90237 9.68342 7.90237 10.3166 8.29289 10.7071C8.68342 11.0976 9.31658 11.0976 9.70711 10.7071L12 8.41421L12 12Z" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg> Transaction</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Profile" className='sidebar-text'><svg width="19" height="24" viewBox="0 0 19 24" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
            <path d="M0.5 23.75C0.5 18.7794 4.52943 14.75 9.5 14.75C14.4706 14.75 18.5 18.7794 18.5 23.75H16.25C16.25 20.0221 13.2279 17 9.5 17C5.77208 17 2.75 20.0221 2.75 23.75H0.5ZM9.5 13.625C5.77063 13.625 2.75 10.6044 2.75 6.875C2.75 3.14562 5.77063 0.125 9.5 0.125C13.2294 0.125 16.25 3.14562 16.25 6.875C16.25 10.6044 13.2294 13.625 9.5 13.625ZM9.5 11.375C11.9862 11.375 14 9.36125 14 6.875C14 4.38875 11.9862 2.375 9.5 2.375C7.01375 2.375 5 4.38875 5 6.875C5 9.36125 7.01375 11.375 9.5 11.375Z" fill="black" />
          </svg> Profile</NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Report" className='sidebar-text'><svg width="19" height="24" viewBox="0 0 19 24" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
          <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 192.287 192.287" space="preserve"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <g> <path d="M122.901,0H19.699v192.287h152.889v-142.6L122.901,0z M146.981,45.299h-19.686V25.612L146.981,45.299z M34.699,177.287V15 h77.596v37.799c0,4.142,3.357,7.5,7.5,7.5h37.793v116.988H34.699z" /> <rect x="53.141" y="149.004" width="86.006" height="10" /> <rect x="53.141" y="55.101" width="51.058" height="10" /> <polygon points="121.248,86.935 126.79,86.935 105.371,108.353 88.623,91.605 51.597,128.634 58.667,135.706 88.623,105.748 105.371,122.495 133.861,94.005 133.861,99.535 143.861,99.535 143.861,76.935 121.248,76.935 " /> <rect x="53.141" y="33.283" width="51.058" height="10" /> </g> </g></svg>
          </svg> Reports </NavLink>
        </li>
        <li className='sidebar-list-item'>
          <NavLink to="/Logout" className='sidebar-text'><svg width="22" height="20" viewBox="0 0 22 20" fill="none" className='dashboard-svg' xmlns="http://www.w3.org/2000/svg">
            <path d="M10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C13.2713 0 16.1757 1.57078 18.0002 3.99923L15.2909 3.99931C13.8807 2.75499 12.0285 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C12.029 18 13.8816 17.2446 15.2919 15.9998H18.0009C16.1765 18.4288 13.2717 20 10 20ZM17 14V11H9V9H17V6L22 10L17 14Z" fill="black" />
          </svg> Logout</NavLink>
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
