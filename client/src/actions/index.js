import axios from 'axios';

//GETS
export function getDogs(){
    return async function (dispatch){
        let json = await axios.get("http://localhost:3001/dogs",{});

        return dispatch({
            type:'GET_DOGS',
            payload: json.data
        })
    }}

export function getTemperaments(){
    return async function (dispatch){
        let json = await axios.get("http://localhost:3001/temperament",{});
    
        return dispatch({
            type:'GET_TEMPERAMENTS',
            payload: json.data
        })
    }}

export function getNameDogs(name){
    return async function (dispatch){
        try {
            let json = await axios.get("http://localhost:3001/dogs?name=" + name)
            return dispatch({
                type: "GET_NAME_DOGS",
                payload: json.data
            })
        }
        catch (err){
            console.log(err);
            window.confirm("Dog Not Found!"); // call it here
        }
    }
}

export function getDetail(id){
    return async function(dispatch){
        try{
            let json;
            if ( id === 'reset'){
                return dispatch({
                    type: "GET_DETAIL",
                    payload: []
                })
            } else 
            json = await axios.get("http://localhost:3001/dogs/" + id)
            return dispatch({
                type: "GET_DETAIL",
                payload: json.data
            })
        }
        catch(err){
            console.log(err)
        }
    }
}

//POST

export function postDog(payload){
    return async function (dispatch){
        const response = await axios.post("http://localhost:3001/dog", payload)
        console.log(response)
        return response
    }
}

//FILTERS
export function filter(value){
        return {
            type: 'FILTRO_ORIGIN',
            payload: value
        }
    }

export function filterType(value){
        return{
            type: 'FILTRO_TEMP',
            payload: value
        }
    }

//ORDERS
export function orderByName(value){
    return {
        type: 'ORDER_BY_NAME',
        payload: value
    }
}

export function orderWeight(value){
    return {
        type: 'ORDER_WEIGHT',
        payload: value
    }
}

//DELETE

export function deleteDog(id){
        return {
            type: "DELETE_DOG",
            payload: id
        }

}