import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../Components/Icon'
import List from '../Components/List'
import SpotifyManager from '../Services/SpotifyManager'

export default function LeftSide() {

  const sampleData = {
    total: 2,
    items: [
      {
        title: "Beğenilen Şarkılar",
        songCount: 25,
        image: "https://picsum.photos/200"
      },
      {
        title: "Beğenilen Şarkılar2",
        songCount: 30,
        image: "https://picsum.photos/200"
      }
    ]
  }

  const [playListData, setPlayListData] = React.useState(sampleData);

  useEffect(() => {
    SpotifyManager.getMyPlayList().then(data => setPlayListData(data));
  }
    , []);

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
              <List data={playListData.items} />
            </div>
            <div className="listContainer">
              <List data={playListData.items} />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}
