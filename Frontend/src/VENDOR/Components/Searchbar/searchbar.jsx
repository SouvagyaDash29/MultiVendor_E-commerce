import React from 'react';
import '../Searchbar/searchbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <div className="rectangle-286"><svg width="60" height="60" className="search-svg" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" >
<circle cx="35.7471" cy="35.7471" r="30" fill="#081225" transform='translate(-1, -1)'  />
<path d="M 35.7765 26.2569C 35.5176 26.9901 35.3766 27.7791 35.3766 28.601H 26.0003V 45.0095H 42.4088V 35.6332C 43.2308 35.6332 44.0197 35.4922 44.7529 35.2331V 46.1815C 44.7529 46.8288 44.2282 47.3535 43.5808 47.3535H 24.8283C 24.181 47.3535 23.6562 46.8288 23.6562 46.1815V 27.4289C 23.6562 26.7817 24.181 26.2569 24.8283 26.2569H 35.7767ZM 42.4088 30.9451C 43.7034 30.9451 44.7529 29.8956 44.7529 28.601C 44.7529 27.3064 43.7034 26.2569 42.4088 26.2569C 41.1142 26.2569 40.0647 27.3064 40.0647 28.601C 40.0647 29.8956 41.1142 30.9451 42.4088 30.9451ZM 42.4088 33.2891C 39.8197 33.2891 37.7207 31.1902 37.7207 28.601C 37.7207 26.0118 39.8197 23.9128 42.4088 23.9128C 44.998 23.9128 47.097 26.0118 47.097 28.601C 47.097 31.1902 44.998 33.2891 42.4088 33.2891Z" fill="white" transform="translate(-5, -5)" />
</svg></div>
      <div className="rectangle-287">
        <input type="text" placeholder="Search" className="search-input" />
         <button className='search-button' > <FontAwesomeIcon icon={faSearch} className='search-icon'/></button>
       
      </div>
    </div>
  );
};

export default SearchBar;
