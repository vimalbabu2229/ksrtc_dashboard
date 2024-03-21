import React, {useState} from 'react'
import { IoSearchSharp } from "react-icons/io5";

import './Searchbar.css'

function Searchbar() {
  const [isSearchFocus, setSearchFocus] = useState(false);
  return (
    <div className={isSearchFocus ? 'search-wrap wrap-focus' : 'search-wrap'}>
        <input type="search" name="search" id="search" onFocus={()=>setSearchFocus(true)} onBlur={()=>setSearchFocus(false)}/>
        <IoSearchSharp className={isSearchFocus ? 'search-icon search-icon-focus' : 'search-icon'}/>
    </div>
  )
}

export default Searchbar