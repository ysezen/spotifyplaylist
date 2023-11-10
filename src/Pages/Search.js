import React, { useState, useEffect } from 'react'
import SpotifyManager from '../Services/SpotifyManager';
import List from '../Components/List';

export default function Search() {
  const sampleSearchlistTracks = {
    total: 2,
    items: [
      {
        id: "1",
        title: "Şarkı İsmi",
        owner: "Şarkıcı",
        album: "Albüm",
        uri: "",
        image: "https://picsum.photos/200",
        type: "searchListtrack"
      },
      {
        id: "2",
        title: "Şarkı İsmi",
        owner: "Şarkıcı",
        album: "Albüm",
        uri: "",
        image: "https://picsum.photos/200",
        type: "searchListtrack"
      }
    ]
  }
  
  const [search, setSearch] = useState(''); // search bar  
  const [searchResult, setSearchResult] = useState(sampleSearchlistTracks); // search result
  const [isUserInput, setIsUserInput] = useState(false);  

  useEffect(() => {
    const data = sessionStorage.getItem('searchresult');      
      setIsUserInput(false);
      setSearchResult(data ? JSON.parse(data): []);
      setSearch(sessionStorage.getItem('searchTerm'));    
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = sessionStorage.getItem('searchresult');  
        
      if (search) {
        
        if (search.length > 3 && isUserInput) {
          const result = await SpotifyManager.search(search);
          setSearchResult(result);
          sessionStorage.setItem('searchresult', JSON.stringify(result));
          sessionStorage.setItem('searchTerm', search);
        }else if(search.length > 3 && !isUserInput){
          setSearchResult(JSON.parse(data));
          setSearch(sessionStorage.getItem('searchTerm'));
        }else if(search.length < 3 && isUserInput){
          sessionStorage.setItem('searchresult', []);
          sessionStorage.setItem('searchTerm', '');   
          setSearchResult([]);
          setSearch('');
               
        }else{
          setSearchResult([]);
        }
        
      }
      
    };
    const timer = setTimeout(fetchData, 1000);

    return () => clearTimeout(timer);
  }, [search,isUserInput]);
  
  const handleListClick = (id, type) => {
    switch (type) {      
      case 'playListtrack':
        console.log('playlist_track_played');
        break;
      case 'searchListtrack':
        console.log('search_track_played');
        break;
      default:
        break;
    }
  };

  return (
    <div className="rightSide">
      <h1>Search</h1>
      <div className="rightSideTop">
        <input className="searchbutton" value={search} onChange={(e) =>{setSearch(e.target.value); setIsUserInput(true);}} type="text" placeholder="Ne dinlemek istiyorsun?" />
      </div>
      <div className="searchResult">
        <List onItemClick={handleListClick} data={searchResult ? searchResult.items : sampleSearchlistTracks.items} />
      </div>
    </div>
  )
}