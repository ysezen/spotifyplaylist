import React from 'react';

export default function ContainerBox({ classNames, title, children }) {
   console.log(title);
   return (
      <div className={classNames}>
         <p>{title}</p>                  
            {children}
      </div>
   );
};