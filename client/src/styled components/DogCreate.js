import styled from 'styled-components';

export const Button = styled.button`
color: #FFCCD2;
font-family: 'Rubik', sans-serif;
box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
margin: 10px;
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

font-family: 'Rubik', sans-serif;
color: #362222;
background-color: #FFEDED;
box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);
text-align: center;
height: 45px;
width: 500px;
font-size: 20px;
border: none;
border-radius: 20px;
margin: 10px;
margin-right:215px
`


export const Label = styled.label`
color: #362222;
font-family: 'Rubik', sans-serif;
text-transform: uppercase;
display: inline-block;
font-size: 20px;
width: 200px;
text-align: right;
margin-right: 5px;
`

export const Labels = styled.label`
margin: 10px 0px;
color: #362222;
font-family: 'Rubik', sans-serif;
text-transform: uppercase;
display: inline-block;
font-size: 20px;
width: 200px;
text-align: center;
margin-right: 5px;
`

export const Select = styled.select`
color: #FFCCD2;
font-family: 'Rubik', sans-serif;
font-size: 15px;
text-align: center;
flex-grow: 1;
height: 50px;
margin: 0px 1px;
width: 250px;
text-transform: uppercase;
border: none;
border-radius: 10px;
background-color: #362222;
cursor: pointer;
transition: all .4s ease;
box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.2);

&:hover {
background-color: #B3541E;
width: 350px;
}
`
export const P = styled.p`
color: #FFCCD2;
font-family: 'Rubik', sans-serif;
font-size: 15px;
`

export const Ps = styled.p`
background-color: white;
color: red;
font-weight: 500;
font-family: 'Rubik', sans-serif;
font-size: 15px;
font-weight: 500;
padding: 10px;
border-radius: 15px;
margin: 0px 700px;
transition: all .2s ease;
`