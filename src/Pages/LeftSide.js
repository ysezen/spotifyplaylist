import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Components/Icon'
import List from '../Components/List'
import SpotifyManager from '../Services/SpotifyManager'
import { act } from 'react-dom/test-utils'

export default function LeftSide() {

  const samplePlaylistData = {
    total: 2,
    items: [
      {
        title: "Beğenilen Şarkılar",
        total: 25,
        image: "https://picsum.photos/200"
      },
      {
        title: "Beğenilen Şarkılar2",
        total: 30,
        image: "https://picsum.photos/200"
      }
    ]
  }

  const samplePlaylistTracks = {
    total: 2,
    items: [
      {
        id: "1",
        title: "Şarkı İsmi",
        owner: "Şarkıcı",
        album: "Albüm",
        uri: "",
        image: "https://picsum.photos/200",
        type: "track"
      },
      {
        id: "2",
        title: "Şarkı İsmi",
        owner: "Şarkıcı",
        album: "Albüm",
        uri: "",
        image: "https://picsum.photos/200",
        type: "track"
      }
    ]
  }

  const [playListData, setPlayListData] = React.useState(samplePlaylistData);
  const [activePlayList, setActivePlayList] = React.useState(null);
  const [activePlayListTracks, setActivePlayListTracks] = React.useState(samplePlaylistTracks);

  useEffect(() => {
    SpotifyManager.getMyPlayList().then(data => setPlayListData(data));
  }, []);

  useEffect(() => {
    if (activePlayList !== null) {
      const result = SpotifyManager.getPlayListTracks(activePlayList);
      result.then(data => setActivePlayListTracks(data));
    }
  }, [activePlayList]);

  const handleListClick = (id, type) => {
    switch (type) {
      case 'playlist':
        setActivePlayList(id);
        break;
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
    <>
      <div className="leftSide">
        <div className="leftSideTop">
          <Link to="/home"><Icon t={true} i={true} guid="home" /></Link>
          <Link to="/search"><Icon t={true} i={true} guid="search" /></Link>
        </div>
        <div className="leftSidePlaylist">
          <Icon t={true} i={true} guid="library" adDetail={` has ${playListData.total} playlist...`} />

          <div className="leftSidePlayListContainer">
            <div className="listContainer">
              <List onItemClick={handleListClick} data={playListData.items} />
            </div>
            <div className="listContainer">
              <List onItemClick={handleListClick} data={activePlayListTracks ? activePlayListTracks.items : samplePlaylistTracks.items} />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

