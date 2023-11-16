import React, { useEffect, useState } from 'react'
import './ListItem.css'
import ActionIcon from './ActionIcon';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ListItem({ id, type, isAction, title, total, image, owner, onItemClick, iconAction, activeId, setActiveId }) {
  
  const [holdTimeout, setHoldTimeout] = useState(null);
  const [statusActionClass, setStatusActionClass] = useState("plitemAction hidden");  
  const [actionObject, setActionObject] = useState({ id: '', dataType: '', title: '', action: '' });
  

  const handleClickItem = () => {     
    setActiveId(id);    
    setActionObject({ id: id, dataType: type, title: title, action: 'click' });    
    
  }

  const handleActionItem = ({action}) => {
             
    setActionObject({ id: id, dataType: type, title: title, action: action ? action : 'click' });
  }

  useEffect(() => {
    
    onItemClick(actionObject);
    
   /*  if (actionObject.action === 'click') {
      if (statusActiveClass.includes(" passiveelement")) {
        setStatusActiveClass((prev) => prev.replace(" passiveelement", " activeelement"));
      } else {
        setStatusActiveClass((prev) => prev.replace(" activeelement", " passiveelement"));
      }
    }     */
  }, [actionObject]);
 

  const handleMouseDown = (e) => {

    e.preventDefault();
    setHoldTimeout(setTimeout(() => {      
        setActiveId(id);

        if(statusActionClass.includes("hidden")) {
          setStatusActionClass("plitemAction visible");
        }
        else {
          setStatusActionClass("plitemAction hidden");
        }
    }, 500));
  }

  const handleMouseUp = () => {
    clearTimeout(holdTimeout);
  }

  const handleMouseLeave = () => {
    clearTimeout(holdTimeout);
  }

  const handleContextMenu = (e) => {

    toast.error(`Please don't use right click`);
    e.preventDefault();
  }

  return (
    <>
      <div
        className={`${activeId === id ? 'plitemContainer activeelement' : 'plitemContainer'}`}>
        <div className={`${activeId === id ? statusActionClass : 'plitemAction hidden'}`} >
          <ActionIcon t={false} i={true} guid={iconAction} handleActionItem={handleActionItem} />          
        </div>
        <div className="plItemInfo"
        onClick={handleClickItem}
        onMouseDown={isAction ? handleMouseDown : (e) => { e.preventDefault(); }}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        data-id={id}
        onContextMenu={handleContextMenu}>
          <div className="plitemImage">
            <img src={image ? image : "https://picsum.photos/200"} alt="playlist" />
          </div>
          <div className="plitemLabels">
            <h3>{title ? title : 'Beğenilen Şarkılar'}</h3>
            <span>{total ? total + ' Song,' : ''} {owner}</span>
          </div>
        </div>
      </div>
    </>

  )
}