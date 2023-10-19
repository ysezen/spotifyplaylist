import React from 'react';
import ContainerBox from '../material/ContainerBox';
import styles from '../../css/Container.module.css';

export default function SignOut() {
  const bodyContainer = ['bodyContainer', 'blockRow', 'alignleft'];
  const mainContainer = ['mainContainer', 'flexRow', 'alignleft'];
  const subContainer = ['subContainer', 'flexColumn', 'aligncenter'];

  const styleSheet = (arr, obj) => {
    const result = arr.map(className => obj[className]).join(' ');
    return result;
  };

  return (
    <>
      <ContainerBox {...{ classNames: styleSheet(bodyContainer, styles)}}>
        <ContainerBox {...{ classNames: styleSheet(mainContainer, styles) }}>
          <ContainerBox {...{ classNames: styleSheet(subContainer, styles), title: 'Playlist' }}></ContainerBox>
          <ContainerBox {...{ classNames: styleSheet(subContainer, styles), title: 'Search' }}></ContainerBox>
          <ContainerBox {...{ classNames: styleSheet(subContainer, styles), title: 'Songs' }}></ContainerBox>
        </ContainerBox>
      </ContainerBox>

    </>
  );
}