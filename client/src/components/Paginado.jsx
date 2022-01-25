import React from "react";
import { Button, Ul, Li, Nav } from "../styled components/Paginado";

export default function Paginado ({dogsPerPage, allDogs, paginado}){
    const pageNumbers = [];

    for (let i=0; i<=Math.ceil(allDogs/dogsPerPage); i++){
        pageNumbers.push(i+1)
    }
    pageNumbers.pop();
    return(
        <Nav>
            <Ul className='paginado'>
                {pageNumbers &&
                pageNumbers.map(number => (
                    <Li className='number' key={number}>
                    <Button onClick={() => paginado(number)}>{number}</Button>
                    </Li>
                ))}
            </Ul>
        </Nav>
    )
}