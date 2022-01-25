import React from "react";
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getDogs, getTemperaments, filter, filterType, orderByName, orderWeight } from "../actions";
import {Link} from 'react-router-dom';
import Card from './Card';
import Paginado from "./Paginado";
import SearchBar from "./SearchBar";
import {Button, Div} from "../styled components/Home";

export default function Home(){
    const dispatch = useDispatch()
    const allDogs = useSelector ((state) => state.dogs)
    const allTemperaments = useSelector ((state) => state.temperaments)

    //PAGINADO
    const [orden, setOrden] = useState('')
    const [currentPage,setCurrentPage] = useState(1)
    const [dogsPerPage,setDogsPerPage] = useState(8)
    const indexOfLastDog = currentPage * dogsPerPage
    const indexOfFirstDog = indexOfLastDog - dogsPerPage
    const currentDogs = allDogs.slice(indexOfFirstDog,indexOfLastDog)

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    //PAGINADO

    useEffect ( () => {
        dispatch(getDogs())
    },[dispatch])

    useEffect ( () => {
        dispatch(getTemperaments())
    },[dispatch])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDogs());
    }

    //FILTROS
    function handleFilterChangeOrigin(e){
        e.preventDefault();
        dispatch(filter(e.target.value))
    }

    function handleFilterChangeTemp(e){
        dispatch(filterType(e.target.value))
    }

    //ORDERS
    function handleOrderChange(e){
        e.preventDefault();
        dispatch(orderByName(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    function handleOrderWeight(e){
        e.preventDefault()
        dispatch(orderWeight(e.target.value))
        setCurrentPage(1);
        setOrden(`Ordenado ${e.target.value}`)
    }

    //RENDER
    return (
        <div key="div1" className="homeContainer">
        <div key="div2" className="navBar">
            <SearchBar key="SearchBar"/>
        <Div key="Div1">
            <Link key="Link1" to="/dog"><Button>Create Breed</Button></Link>
            <Link key="Link2" to="" onClick={e=> {handleClick(e)}}><Button>Refresh Dogs</Button></Link>
        </Div>
        <div key="div3" className="selected">
                <select key="select1" onChange={handleFilterChangeTemp}>
                    <option key="option1" value ='all'>select temperament filter</option>
                    {allTemperaments?.map(temp =>
                    <option key={temp.id} value={temp.name}>{temp.name}</option>
                    )}
                </select>
                <select key="select2" onChange={handleFilterChangeOrigin}>
                    <option key="option2" value='all'>select origin filter</option>
                    <option key="option3" value='created'>Creados</option>
                    <option key="option4" value='existent'>Existentes</option>
                </select>
                <select key="select3" onChange={handleOrderChange}>
                    <option key="option5" value='all'>select alfabetical order</option>
                    <option key="option6" value="asc">A a la Z</option>
                    <option key="option7" value="desc">Z a la A</option>
                </select>
                <select key="select4" onChange={handleOrderWeight}>
                    <option key="option8" value='all'>select wheight order</option>
                    <option key="option9" value='minWeight_asc'>Minimum weight ascendent</option>
                    <option key="option10" value='minWeight_desc'>Minimum weight descendent</option>
                    <option key="option11" value='maxWeight_asc'>Maximum weight ascendent</option>
                    <option key="option12" value='maxWeight_desc'>Maximum weight descendent</option>
                </select>
        </div>
        </div>
                <Paginado
                key="Paginado" 
                dogsPerPage = {dogsPerPage}
                allDogs = {allDogs.length}
                paginado = {paginado}
                />
            <div key="div4" className="dogsContainer">
                {
                currentDogs.length < 1 ? <p>NO DOGS</p> :
                
                currentDogs?.map((el)=> {
                    return(
                        <div key={`div${el.id}`} >
                            <Link key={`Link${el.id}`}to={"/dogs/" + el.id}>
                                <Card name={el.name} image={el.image} temperament={el.temperament} minWeight={el.minWeight} maxWeight={el.maxWeight} key={el.id}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    
    )
}