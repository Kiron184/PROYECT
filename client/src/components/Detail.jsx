import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {getDetail, deleteDog, getDogs} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import { Button, H1, H3, H4, H5, Div, Img } from "../styled components/Detail";

export default function Detail(props){
    const history = useHistory()
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDetail(props.match.params.id))
    },[])

    function handleClick(e){
        e.preventDefault();
        dispatch(getDetail('reset'));
        history.push('/home')
    }

    function handleDelete(e){
        e.preventDefault();
        dispatch(deleteDog(props.match.params.id))
        history.push('/home')
    }

    
    const myDog = useSelector((state) => state.detail)

    return(
        <div className='container'>
        <Link to='/home'>
                <Button onClick={(e) => handleClick(e)}>Home</Button>
                <Button onClick={(e) => handleDelete(e)}>Delete Dog</Button>
        </Link>
        <Div>
            {
                myDog.length > 0 ?
                <div>
                    
                    <H1>{myDog[0].name}</H1>
                    <Img src={myDog[0].createdInDb ? "https://www.creativefabrica.com/wp-content/uploads/2021/07/04/cat-and-dog-silhouette-logo-for-pet-shop-Graphics-14248406-1.jpg" : myDog[0].image} alt="not found"  width='400px' height='350px' />
                    <H3>Temperaments: </H3>
                    <H4>{myDog[0].temperament?.map(el => el + " ")}</H4>
                    <div className="stats">
                    <H5>Minimum weight: {myDog[0].minWeight === 0 ? "No Info" : myDog[0].minWeight + " Kg"}</H5>
                    <H5>Maximum weight: {myDog[0].maxWeight === 0 ? "No Info" : myDog[0].maxWeight + " Kg"}</H5>
                    <H5>Minimum height: {myDog[0].minHeight === 0 ? "No Info" : myDog[0].minHeight + " Mts."}</H5>
                    <H5>Maximum height: {myDog[0].maxHeight === 0 ? "No Info" : myDog[0].maxHeight + " Mts."}</H5>
                    <H5>Life expectancy: {myDog[0].life ? myDog[0].life : myDog[0].minLife + " - " + myDog[0].minLife + " years"}</H5>
        
                    </div>
                </div> : <p>Loading...</p>
                
            }
        </Div>
        </div>
    )
}