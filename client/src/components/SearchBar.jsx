import React from "react";
import {useState} from "react";
import {useDispatch} from 'react-redux';
import { getNameDogs } from "../actions";
import { Button, Input, Div } from "../styled components/Searchbar";

export default function SearchBar(){
    const dispatch = useDispatch()
    const [name,setName] = useState("")

    function handleInputChange(e){
        e.preventDefault()
        setName(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        dispatch(getNameDogs(name))
        setName("")
    }
    return (
        <Div>
            <Input
            type='search'
            placeholder='Search'
            onChange={(e) => handleInputChange(e)}
            />
            <Button type='submit' onClick={(e) => handleSubmit(e)}>Search</Button>
        </Div>
    )
}