const initialState = {
    dogs : [],
    dogs2 : [],
    dogs3: [],
    todos : [],
    temperaments : [],
    detail: []
}

export default function rootReducer(state = initialState, action){
    switch(action.type){
        case 'GET_DOGS':
            return {
                ...state,
                dogs:action.payload,
                todos: action.payload,
                dogs2: action.payload,
                dogs3: action.payload,
            }
     
        case 'GET_TEMPERAMENTS':
                return {
                    ...state,
                    temperaments:action.payload
                }

        case "GET_NAME_DOGS":
            return{
                ...state,
                dogs: action.payload

            }

        case "GET_DETAIL":
            return{
                ...state,
                detail: action.payload
            }

        case 'POST_DOG':
            return{
                ...state,
            }

        case 'FILTRO_ORIGIN':

            if (action.payload === 'created' && state.dogs.length < state.todos.length){
            return{
                ...state,
                dogs: state.dogs2.filter( el => el.createdInDb),
                dogs3: state.dogs2.filter( el => el.createdInDb)
            }
            } else
            if (action.payload === 'existent' && state.dogs.length < state.todos.length){
            return{
                ...state,
                dogs: state.dogs2.filter( el => !el.createdInDb),
                dogs3: state.dogs2.filter( el => !el.createdInDb)
            }
            } else
            if (action.payload === 'created' && state.dogs.length === state.todos.length){
            return{
                ...state,
                dogs: state.dogs.filter( el => el.createdInDb),
                dogs3: state.dogs.filter( el => el.createdInDb)
            }
            } else
            if (action.payload === 'existent' && state.dogs.length === state.todos.length){
            return{
                ...state,
                dogs: state.dogs.filter( el => !el.createdInDb),
                dogs3: state.dogs.filter( el => !el.createdInDb)
            }}
            else return{
                ...state,
                dogs: state.dogs2,
                dogs3: state.dogs2
            }
                    
            
        case 'FILTRO_TEMP':
            let allDogs = state.todos;

            let filtrados = [];
            let dogsDb = allDogs.filter(dog => typeof dog.id === "string");
            let dogsApi = allDogs.filter(dog => typeof dog.id === "number");

            if(action.payload === "all"){
                filtrados = allDogs
            } else {
                
                dogsDb = dogsDb.filter(dog => dog.temperament?.includes(action.payload))
                dogsApi = dogsApi.filter(dog => dog.temperament?.includes(action.payload))
            }

            filtrados = dogsApi.concat(dogsDb)

            return{
                ...state,
                dogs: filtrados,
                dogs2: filtrados,
            }

        case 'ORDER_BY_NAME':
            let arraySort = [];

            if(action.payload === 'all'){
                arraySort = state.dogs2;
            }
            else if(action.payload === 'asc'){
                arraySort = state.dogs.sort(function(a,b) {
                    if(a.name > b.name) {
                        return 1;
                    }
                    if(b.name > a.name){
                        return -1;
                    }
                    return 0;
                })
            } else if (action.payload === 'desc'){
                arraySort = state.dogs.sort(function(a,b) {
                    if(a.name > b.name) {
                        return -1;
                    }
                    if(b.name > a.name){
                        return 1;
                    }
                    return 0;
                })
            }
            return {
                ...state,
                dogs: arraySort,
                dogs2: arraySort,
            }

        case 'ORDER_WEIGHT':
                let arraySorted = [];
                console.log(state.dogs)
                if(action.payload === 'all'){
                    arraySorted = state.dogs2;
                }
                else if(action.payload === 'minWeight_asc'){
                    arraySorted = state.dogs.sort(function(a,b) {
                        if(parseInt(a.minWeight) > parseInt(b.minWeight)){
                            return 1;
                        }
                        if(parseInt(b.minWeight) > parseInt(a.minWeight)){
                            return -1;
                        }
                        return 0;
                    })
                } else if (action.payload === 'minWeight_desc'){
                    arraySorted = state.dogs.sort(function(a,b) {
                        if(parseInt(a.minWeight) > parseInt(b.minWeight)){
                            return -1;
                        }
                        if(parseInt(b.minWeight) > parseInt(a.minWeight)){
                            return 1;
                        }
                        return 0;
                    })
                } else if(action.payload === 'maxWeight_asc'){
                    arraySorted = state.dogs.sort(function(a,b) {
                        if(parseInt(a.maxWeight) > parseInt(b.maxWeight)){
                            return 1;
                        }
                        if(parseInt(b.maxWeight) > parseInt(a.maxWeight)){
                            return -1;
                        }
                        return 0;
                    })
                } else if (action.payload === 'maxWeight_desc'){
                    arraySorted = state.dogs.sort(function(a,b) {
                        if(parseInt(a.maxWeight) > parseInt(b.maxWeight)){
                            return -1;
                        }
                        if(parseInt(b.maxWeight) > parseInt(a.maxWeight)){
                            return 1;
                        }
                        return 0;
                    })
                }
                return {
                    ...state,
                    dogs: arraySorted,
                    dogs2: arraySorted,
                }

        case 'DELETE_DOG':
            let deleted = state.dogs.filter(dog => dog !== action.payload)
            return {
                ...state,
                dogs:deleted,
                todos: deleted,
                dogs2: deleted,
                dogs3: deleted,
            }


        default: return state;
    }

}
