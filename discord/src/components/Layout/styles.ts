import styled from "styled-components";
// SL - server List
// SV - server Name
// CI - Channel Info
//CL - Channel List
//CD - Channel Data
//UL - User List
//UI - User Info
export const Grid = styled.div`
display: grid;

grid-template-columns: 71px 240px auto 240px ;
grid-template-rows: 46px auto 52px ;

grid-template-areas: 
' SL SV CI CI '
' SL CL CD UL'
' SL UI  CD  UL';

height: 100vh;
`;