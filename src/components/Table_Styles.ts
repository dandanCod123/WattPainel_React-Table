import styled, { css } from "styled-components";

export const Table1  = styled.table`
 
  text-align: center;
   
  border-collapse: collapse;
  height:350px; 
 
`;

export const Container = styled.div`
  max-width: 1200px;
  display: flex;
 
  align-items: center;
  
`;

export const Name = styled.tr`

text-align: center;

  font-family: 'Lato';
font-style: normal;
font-weight: 800;
font-size: 13px;
line-height: 14px;

color: #333333; 

${props =>
    props &&
    css`
      

      &:nth-child(odd) {
        background-color: #E4E4E4;
      }
    `}

`;


export const Linha = styled.th`



border: 1px solid #C6C6C6;

font-family: 'Lato';
font-style: normal;
font-weight: 800;

color: #333333;
text-align: center;


`;

export const Linha2 = styled.td`

text-align: center;

border: 1px solid #C6C6C6;

font-family: 'Lato';
font-style: normal;
font-weight: 800;
width: 8vw;

color: #333333;
`;

