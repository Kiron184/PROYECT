import styled from 'styled-components';

export const Div = styled.div`
width: 500px;
display: flex;
align-items: flex-start;
justify-content: flex-end;
`
export const Button = styled.button`
color: #FFCCD2;
font-family: 'Rubik', sans-serif;
box-shadow: 0px 0px 19px 12px rgba(0,0,0,0.1);
margin: 0px 1px 0px 2px;
padding: 0px;
height: 50px;
width: 180px;
font-size: 15px;
text-transform: uppercase;
border: none;
border-radius: 10px;
background-color: #362222;
cursor: pointer;
transition: all .2s ease;

&:hover {
background-color: #B3541E;
width: 250px;
}
`

export const Input = styled.input`
margin-left: 2px;
color: #FFCCD2;
font-family: 'Rubik', sans-serif;
box-shadow: 0px 0px 19px 12px rgba(0,0,0,0.1);
background-color: #362222;
text-align: center;
height: 50px;
width: 200px;
flex-grow: 4;
font-size: 20px;
border: none;
border-radius: 10px;
transition: all .4s ease;

&:hover{
   width: 450px;
   background-color: #B3541E;
}

&::placeholder{
   color: #FFCCD2;
   text-transform: uppercase;

}
`
