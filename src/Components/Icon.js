import React from 'react';
import './icons.css';
import { icons } from '../Assets/img/icons/SvgIcons';

export default function Icon({ t, i, guid, adDetail }) {
  const findedIcon = icons.find(icon => icon.guid === guid);

  if(adDetail === undefined) adDetail = '';

  if (!findedIcon) return null; 

  if (!t && !i) {
    return null;
  }

  if (t && !i) {
    return (
      <div className="iconContainer">
        <div><span className="icontitle">{t ? findedIcon.title + adDetail : ''}</span></div>
      </div>
    )    
  }

  if (!t && i) {
    return (
      <div className="iconContainer">
        <div className="iconStyle">
          <svg>
            <g>
              <path d={i ? findedIcon.iconpath : ''} />
            </g>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <div className="iconContainer">
      <div className="iconStyle">
        <svg viewBox={findedIcon.viewBox}>
          <g>
            <path d={i ? findedIcon.iconpath : ''} />
          </g>
        </svg>
      </div>
      <div><span className="icontitle">{t ? findedIcon.title + adDetail : ''}</span></div>
    </div>
  )
}
