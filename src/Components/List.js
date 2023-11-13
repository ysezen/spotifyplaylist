import React, { useEffect, useState } from 'react';
import ListItem from './ListItem';
import './List.css';

export default function List({ data, onItemClick }) {
  /*data object fitter by SpotifyObjects.playlist
  item.title = SpotifyObjects.playlist.items.name,
  item.songCount = SpotifyObjects.playlist.items.tracks.total,
  item.image = SpotifyObjects.playlist.items.images[0].url
  */

  useEffect(() => {
    if (!data || data.length === 0) {
      console.log('data yok');
      return (
        <>
        </>
      )
    }
  }, [data])

  const [filterValue, setFilterValue] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [isUserInput, setIsUserInput] = useState(false);

  useEffect(() => {     
    console.log(data);
    setFilteredData(data);
    const filterListAction = () => {
      if (filterValue.length > 3) {
        let filtered = data.filter(item => {
          return item.title.toLowerCase().includes(filterValue.toLowerCase());
        })
        setFilteredData(filtered);
      }
    };

    const timer = setTimeout(() => {
      if (isUserInput) {
        filterListAction();        
      }
    }, 500);

    return () => clearTimeout(timer);

  }, [data, filterValue]);

  return (
    <div className="listContainer">
      <div className="listSearchContainer">
        <input className="searchInput" onChange={(e) => { setFilterValue(e.target.value); setIsUserInput(true); }} value={filterValue} type="text" placeholder="For filter type Here" />
      </div>
      <div className="listItemsContainer">
        {filteredData.map((item, index) => {
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
    </div>
  )
}
