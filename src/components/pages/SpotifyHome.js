import React from 'react';
import ContainerBox from '../material/ContainerBox';
import styles from '../../css/Container.module.css';

export default function SpotifyHome() {
  const bodyContainer = ['bodyContainer', 'blockColums', 'alignleft'];
  const mainContainer = ['mainContainer', 'flexrow', 'alignleft'];
  const subContainer = ['subContainer', 'flexrow', 'aligncenter'];

  const styleSheet = (arr, obj) => {
    const result = arr.map(className => obj[className]).join(' ');
    return result;
  };

  return (
    <>
      <ContainerBox {...{ classNames: styleSheet(bodyContainer, styles), title: "body" }}>
        <ContainerBox {...{ classNames: styleSheet(mainContainer, styles) , title: "main"}}>
          {/* <ContainerBox {...{ classNames: styleSheet(subContainer, styles), title: "sub" }}>
          </ContainerBox>
          <ContainerBox {...{ classNames: styleSheet(subContainer, styles), title: "sub2" }}>
          </ContainerBox> */}
        </ContainerBox>
      </ContainerBox>
    </>
  );
}