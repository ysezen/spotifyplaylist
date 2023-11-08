import React from 'react'
import './SearchListItem.css'

export default function SearchListItem({title, total, image, owner}) {
  return (
    <div className="plitemContainer">
      <div className="plitemImage">
        <img src={image ? image : "https://picsum.photos/200"} alt="playlist" />
      </div>
      <div className="plitemInfo">
        <h3>{title ? title : 'Beğenilen Şarkılar'}</h3>
        <span>{total ? total : 20} Song, {owner}</span>
      </div>
    </div>
  )
}