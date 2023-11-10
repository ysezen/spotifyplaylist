import React from 'react';
import ListItem from './ListItem';

export default function List({data, onItemClick}) {
/*data object fitter by SpotifyObjects.playlist
item.title = SpotifyObjects.playlist.items.name,
item.songCount = SpotifyObjects.playlist.items.tracks.total,
item.image = SpotifyObjects.playlist.items.images[0].url
*/
  if (!data || data.length === 0) {
    console.log('data yok');
    return (
      <>
      </>
    )
  }

  return (
    <div className="listSub">
      {data.map((item, index) => {
        return (
          <ListItem 
            key={index}
            id={item.id}            
            title={item.title}
            owner={item.owner}            
            image={item.image}
            album={item.album}
            uri={item.uri}            
            type={item.type}
            handleClick={onItemClick}
          />
        )
      }
      )}   

    </div>
  )
}
