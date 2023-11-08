import React, { useState, useEffect } from 'react'
import SpotifyManager from '../Services/SpotifyManager';
import List from '../Components/List'

export default function Search() {
  const [search, setSearch] = useState(''); // search bar  
  const [searchResult, setSearchResult] = useState([]); // search result

  useEffect(() => {
    const fetchData = async () => {
      if (search.length > 3) {
        const result = await SpotifyManager.search(search);
        setSearchResult(result.items);
        console.log(result);
      }else{
        setSearchResult('');
      }
    };
    const timer = setTimeout(fetchData, 1000);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="rightSide">
      <h1>Search</h1>
      <div className="rightSideTop">
        <input className="searchbutton" value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Ne dinlemek istiyorsun?" />
      </div>
      <div className="searchResult">
        <List data={searchResult} />
      </div>
    </div>
  )
}