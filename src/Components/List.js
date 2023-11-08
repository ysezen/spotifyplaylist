import React from 'react';
import ListItem from './ListItem';

export default function List({data}) {
/*data object fitter by SpotifyObjects.playlist
item.title = SpotifyObjects.playlist.items.name,
item.songCount = SpotifyObjects.playlist.items.tracks.total,
item.image = SpotifyObjects.playlist.items.images[0].url
*/

  if (!data) {
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
            total={item.total}
            image={item.image}
            owner={item.owner}
          />
        )
      }
      )}   

    </div>
  )
}
