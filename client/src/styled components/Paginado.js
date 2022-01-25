import styled from 'styled-components';

export const Nav = styled.nav`
display: flex;
justify-content: space-evenly;
width: 100vw;
`

export const Button = styled.button`
color: #FFCCD2;
font-family: 'Rubik', sans-serif;
font-weight: 900;
cursor: pointer;
font-size: 1em;
padding: 10px;
border: none;
border-radius: 5px;
margin: 1px 0px;
transition: all .3s ease-in-out;
background-color: #362222;
width: 60px;
height: 50px;
box-shadow: 0px 0px 19px 12px rgba(0,0,0,0.1);
&:hover {
    background-color: #B3541E;

}
`

export const Ul = styled.ul`
        width: 100vw;
        padding: 0px;
        list-style: none;
        display: flex;
        border: none;
        justify-content: center;
`

export const Li = styled.li`
margin: 5px;
border: none;
`