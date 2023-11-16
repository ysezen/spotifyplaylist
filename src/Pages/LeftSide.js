import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Components/Icon'
import List from '../Components/List'
import SpotifyManager from '../Services/SpotifyManager'
import { samplePlaylistData, samplePlaylistTracks } from '../Services/SpotifyObjects'
import { toast } from 'react-toastify'

export default function LeftSide() {

  const [playListData, setPlayListData] = useState(samplePlaylistData);
  const [activePlayListId, setActivePlayListId] = useState(null);  
  const [activePlayListTracks, setActivePlayListTracks] = useState(samplePlaylistTracks);
  const [actionObject, setActionObject] = useState({});
  const [updatePlayList, setUpdatePlayList] = useState(0);
  const [updatePlayListTracks, setUpdatePlayListTracks] = useState(0);

  useEffect(() => {
    SpotifyManager.getMyPlayList().then(data => setPlayListData(data));    
  }, []);

  const handleListItemClick = (object) => {    
    setActionObject(object); 
  }; 

  useEffect(() => {  

    if (Object.keys(actionObject).length !== 0 && actionObject.id !== '' && actionObject.id && actionObject.id !== null && actionObject.id !== 'tempValue' ) {
      
      switch(actionObject.dataType) {
        case 'playList':
          if(actionObject.action === 'click') {
            if(actionObject.id) {
              if(actionObject.id !== activePlayListId) {
              setActivePlayListId(actionObject.id);          
              }else{
                setUpdatePlayListTracks(updatePlayListTracks + 1);
              }
            }
          } else if(actionObject.action === 'delete') {
            toast.success(`Playlist ${actionObject.title} deleted`);
          }
          break;
        case 'playListTracks':
          if(actionObject.action === 'click') {        
          } else if(actionObject.action === 'delete') {
            const result = SpotifyManager.removeItemFromPlayList(activePlayListId, actionObject.id);
            result.then((data) => {
              if(data.snapshot_id) {
                toast.success(`Track ${actionObject.title} deleted`);
                setUpdatePlayListTracks(updatePlayListTracks + 1)
              }
            
            });
            
          }
          break;
          case '':
            console.log('Unknown empty dataType');
            break;
        default:      
          console.log('Unknown dataType');
      }
              
    }   

  }, [actionObject]);

  useEffect(() => {
    sessionStorage.setItem('activePlayListId', activePlayListId);
    if (activePlayListId !== '' || activePlayListId !== null || activePlayListId !== 'tempValue') {
      const result = SpotifyManager.getPlayListTracks(activePlayListId);
      result.then(data => setActivePlayListTracks(data));
    }
  }, [activePlayListId,updatePlayListTracks]);
  

  return (
    <>    
      <div className="leftSide">
        <div className="leftSideTop">
          <Link to="/home"><Icon t={true} i={true} guid="home" /></Link>
          <Link to="/search"><Icon t={true} i={true} guid="search" /></Link>
        </div>
        <div className="leftSidePlaylist">
          <Icon t={true} i={true} guid="library" adDetail={` has ${playListData.total} playlist...`} />
          <div className="leftSidePlayListContainer">
              <List 
              onItemClick={handleListItemClick}               
              isAction={false}
              data={playListData.items} />
              <List 
                onItemClick={handleListItemClick}
                iconAction="delete"
                isAction={true}                 
                data={activePlayListTracks ? activePlayListTracks.items : samplePlaylistTracks.items} />
          </div>
        </div>
      </div>
    </>

  )
}

