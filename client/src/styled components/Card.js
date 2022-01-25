import styled from 'styled-components';

export const Div = styled.div`
color: #362222;
font-family: 'Rubik', sans-serif;
flex-direction: column;
border: none;
margin: 20px auto;
height: 570px;
width: 400px;
border-radius: 15px;
background: rgba(255, 255, 255, 0.4);
box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;

.img{
    background: none;
    margin: 0px;
    box-shadow: none;
    height: 300px;
}
.info{
    color: #362222;
    background: none;
    height: 260px;
    display: grid;
    grid-template-rows: 50px;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 0px;
    box-shadow: none;
    padding: 0px;
}
`

export const H2 = styled.h2`
align-self: center;
justify-self: center;
grid-column-start: 1;
grid-column-end: 4;
font-size: 1.5em;
margin: 0px;
padding: 0px;
text-transform: uppercase;
`

export const H3 = styled.h3`
grid-column-start: 1;
grid-column-end: 4;
font-size: 1.2em;
margin: 0px;
padding: 0px;
`

export const H5 = styled.h5`
font-weight: 300;
text-decoration: none;
align-self: center;
justify-self: center;
width: fit-content;
font-size: 1em;
margin: 0px;
padding: 0px;
grid-column-start: 1;
grid-column-end: 4;
`

export const Img = styled.img`
object-fit: cover;
`