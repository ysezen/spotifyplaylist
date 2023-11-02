import styled from 'styled-components';

export const GridLayout = styled.div`  
  background: white;  
  height: 100%;
  display: grid;
  padding:10px;
  gap:0.5%;
  grid-template-columns: 24.25% 75.25%;  
  color:#555555;

  > *{
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
    border-radius:5px;  
  }
`;


export const ComponentContainer = styled.div`  
  display: flex;    
  padding: 20px 10px;  
  gap:10px;
  border-bottom:1px solid darkgray;  
  > * {
    cursor:default;
  }
  > .title{
    color:lightgray;    
    border-bottom: 1px solid lightgray;
    padding-bottom: 1px;
    
  }  
  > .object{    
    display:flex;
    flex-direction:column;
    height:100%;    
    width:100%;
  } 
`;