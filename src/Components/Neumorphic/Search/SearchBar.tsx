import React, {useState} from "react";
import './SearchBar.css'
import SearchIcon from '@mui/icons-material/Search';
const SearchBar = () => {
    const [color, setColor] = useState('#9DABD0')
    return (
        <div className='neumo neumo-search' >
            <SearchIcon className='search-icon' sx={{fontSize: 48, color}} />
            <input 
            onFocus={() => {setColor('#386ff8')}} 
            type="text" 
            className="search__input" 
            placeholder="Search..." 
            onBlur={() => {setColor('#9DABD0')}}
            />
        </div>
    )
}

export default SearchBar;