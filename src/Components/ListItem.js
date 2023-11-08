import React from 'react'
import './ListItem.css'

export default function ListItem({title, total, image, owner}) {
  return (
    <div className="plitemContainer">
      <div className="plitemImage">
        <img src={image ? image : "https://picsum.photos/200"} alt="playlist" />
      </div>
      <div className="plitemInfo">
        <h3>{title ? title : 'Beğenilen Şarkılar'}</h3>
        <span>{total ? total + ' Song,' : ''} {owner}</span>
      </div>
    </div>
  )
}