import React, {useEffect, useState} from 'react';
import { ComponentContainer } from './styles';
import UserPlaylists from "./UserPlaylists";

function ComponentBox({ title, subtitle, height,direction,dataList}) {

  return (
    <ComponentContainer style={{ height: height, flexDirection: direction }}>
      {title ? <h3 className="title">{title}</h3> : ""}      
      {subtitle ? <p className="subtitle">{subtitle}</p> : ""}      
      {dataList ? <UserPlaylists playlists={dataList} /> : ""}  

    </ComponentContainer>
  );
}

export default ComponentBox;