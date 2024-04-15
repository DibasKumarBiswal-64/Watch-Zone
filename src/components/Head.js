import React, { useEffect, useState } from 'react';
import { toggleMenu } from '../utils/appSlice';
import {useDispatch, useSelector} from "react-redux";
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import store from '../utils/strore';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(()=> {
    
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };

  },[searchQuery]);


  const getSearchSuggestions = async () => {
   const data = await fetch(YOUTUBE_SEARCH_API + searchQuery) ;
   const json = await data.json();
   //console.log(json[1]);
   setSuggestions(json[1]);
   // update cache
   dispatch(cacheResults({
    [searchQuery]:json[1],
   }));
  };


  

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };


  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg">
        <div className="flex col-span-1">
        <img 
        onClick={() => toggleMenuHandler()}
        className="h-12 cursor-pointer"
        alt="menu" src="https://www.svgrepo.com/show/312300/hamburger-menu.svg" 
        />
        <img 
        className="h-10 mx-2"
        alt="Watch-Zone logo"
        src="data:image/jpeg;base64,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" 
        
        />

    </div>
    <div className="col-span-10 px-10">
    <div>
        <input 
        className="px-5 w-1/2 border-gray-400 p-2 rounded-l-full"
        type='text' 
        value={searchQuery}
        onChange={(e)=> setSearchQuery(e.target.value)}
        onFocus={()=> setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
        />
        <button
        className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100"
        >🔍</button>
        </div>
     {showSuggestions && ( <div className="fixed bg-white py-2 px-2 w-[29.5rem] shadow-lg rounded-lg border border-gray-100">
      <ul>
        {suggestions.map((s) => (
          
        <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li> 
        ))}
      </ul>
    </div>
    )}
    </div>
    <div>
        <img 
        className="h-12"
        alt="user-icon" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" 
        />
    </div>
    </div>
    
  );
};

export default Head;
