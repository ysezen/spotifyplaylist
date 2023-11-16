import React, { useState, useEffect, useCallback } from 'react'
import SpotifyManager from '../Services/SpotifyManager';
import List from '../Components/List';
import { sampleSearchlistTracks } from '../Services/SpotifyObjects';
import { toast } from 'react-toastify'


export default function Search() {

  const [searchTerm, setSearchTerm] = useState(''); 
  const [searchResult, setSearchResult] = useState({});
  const [isUserInput, setIsUserInput] = useState(false);
  const [actionObject, setActionObject] = useState({});
  const [activeTrackId, setActiveTrackId] = useState(null);
  const [activePlayListId, setActivePlayListId] = useState(null);

  useEffect(() => {
    const result = sessionStorage.getItem('searchResult');
    const inputValue = sessionStorage.getItem('searchTerm');
    const playListId = sessionStorage.getItem('activePlayListId');
    setIsUserInput(false);
    setSearchResult(result ? JSON.parse(result) : []);
    setSearchTerm(inputValue ? inputValue : '');
    setActivePlayListId(playListId ? playListId : null);
  }, []);

  const startSearch = useCallback(async () => {
    const data = sessionStorage.getItem('searchResult');

    if (searchTerm) {
      if (searchTerm.length > 3 && isUserInput) {
        const result = await SpotifyManager.search(searchTerm);
        setSearchResult(result);
        sessionStorage.setItem('searchResult', JSON.stringify(result));
        sessionStorage.setItem('searchTerm', searchTerm);
      } else if (searchTerm.length > 3 && !isUserInput) {
        setSearchResult(JSON.parse(data));
        setSearchTerm(sessionStorage.getItem('searchTerm'));
      } else {
        sessionStorage.setItem('searchResult', []);
        sessionStorage.setItem('searchTerm', '');
        setSearchResult([]);
        setSearchTerm('');

      }
    } else {
      setSearchResult([]);
      setSearchTerm('');
    }

  }, [searchTerm, isUserInput]);

  useEffect(() => {
    sessionStorage.setItem('searchResult', JSON.stringify(searchResult));
  }, [searchResult]);

  useEffect(() => {
    sessionStorage.setItem('searchTerm', searchTerm);
    const timer = setTimeout(startSearch, 500);
    return () => clearTimeout(timer);
  }, [searchTerm, startSearch]);

  const handleListItemClick = (object) => {
    setActionObject(object);
  };

  useEffect(() => {
    if (Object.keys(actionObject).length !== 0 && actionObject.id !== '' && actionObject.id && actionObject.id !== null && actionObject.id !== 'tempValue') {      
      switch (actionObject.dataType) {
        case 'searchListTracks':
          if (actionObject.action === 'click') {
            if (actionObject.id) {
              if (actionObject.id !== activeTrackId) {
                setActiveTrackId(actionObject.id);
              }
            }
          } else if (actionObject.action === 'add') {
            if (activePlayListId === "null") {
              toast.info(`Select playlist for add track!`);
            } else {
              setActivePlayListId(sessionStorage.getItem('activePlayListId'));
              const result = SpotifyManager.addItemToPlayList(activePlayListId, actionObject.id);
              toast.success(`Playlist ${actionObject.title} added`);
            }
          }
          break;
        case 'playListTracks':
          if (actionObject.action === 'click') {
            toast.success(`Track ${actionObject.title} selected`);
          } else if (actionObject.action === 'delete') {

          }
          break;
        default:
          console.log(actionObject);
          console.log('Unknown dataType');
      }
    }
  }, [actionObject]);

  return (
    <div className="rightSide">
      <h1>Search</h1>
      <div className="rightSideTop">
        <input className="searchbutton" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value); setIsUserInput(true); }} type="text" placeholder="Ne dinlemek istiyorsun?" />
      </div>

      {
        searchResult.items ? <div className="searchResult">
          <List
            onItemClick={handleListItemClick}
            iconAction="add"
            isAction={true}
            data={searchResult.items} />
        </div> : <></>
      }


    </div>
  )
}