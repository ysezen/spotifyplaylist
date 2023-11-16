import React from 'react';
import './icons.css';
import { icons } from '../Assets/img/icons/SvgIcons';

export default function ActionIcon({ t, i, guid, adDetail , handleActionItem}) {
  const findedIcon = icons.find(icon => icon.guid === guid);
  

  const handleActionClick = (e) => {    
    e.preventDefault();    
    handleActionItem({action:guid});    
  }
 
  if(adDetail === undefined) adDetail = '';

  if (!findedIcon) return null; 

  if (!t && !i) {
    return null;
  }

  if (t && !i) {
    return (
      <div className="iconContainer" 
      onClick={handleActionClick}>
        <div><span className="icontitle">{t ? findedIcon.title + adDetail : ''}</span></div>
      </div>
    )    
  }

  if (!t && i) {
    return (
      <div className="iconContainer" 
      onClick={handleActionClick}>
        <div className="iconStyle">
          <svg viewBox={findedIcon.viewBox}>
            <g>
              <path d={i ? findedIcon.iconpath : ''} />
              <path d={i ? findedIcon.iconpath2 : ''} />
            </g>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="iconContainer" 
    onClick={handleActionClick}>
      <div className="iconStyle">
        <svg viewBox={findedIcon.viewBox}>
          <g>
            <path d={i ? findedIcon.iconpath : ''} />
            <path d={i ? findedIcon.iconpath2 : ''} />
          </g>
        </svg>
      </div>
      <div><span className="icontitle">{t ? findedIcon.title + adDetail : ''}</span></div>
    </div>
  )
}
