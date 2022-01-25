import React, {useState, useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {postDog, getTemperaments} from '../actions/index';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Input, Label, Labels, Select, P, Ps} from "../styled components/DogCreate";





export default function DogCreate(){
    const dispatch = useDispatch()
    const temperaments = useSelector((state) => state.temperaments)
    const history = useHistory()
    const [errors, setErrors] = useState({});

    const regExName = /^[A-Za-z][a-zA-Z ]{3,19}$/; // Solo letras y espacios (4 a 20 caracteres)
    const regExNumber = /^(\d?[1-9]|[1-9]0)$/; // solo numeros de dos cifras

    const [input, setInput] = useState({
        name:'',
        minHeight:'',
        maxHeight:'',
        minWeight:'',
        maxWeight:'',
        minLife:'',
        maxLife:'',
        createdInDb: true,
        temperament:[],
    })

    useEffect(() => {
        dispatch(getTemperaments());
    }, [dispatch]);


    function validate(error){
        console.log(error)
    let errors = {};
    
    if (!input.name || input.name === "" ||  !regExName.test(input.name)){
        errors.name = 'Required Field: Name (4 to 20 characters, only letters and spaces)';
    }
    
    if (!input.minHeight ||  input.minHeight === "" ||  !regExNumber.test(input.minHeight) || input.minHeight > input.maxHeight){
        errors.minHeight = 'Required Field: Minimum height (Range: 1 to 99)';
    }
    
    if (!input.maxHeight ||  input.maxHeight === "" ||  !regExNumber.test(input.maxHeight) || input.maxHeight < input.minHeight){
        errors.maxHeight = 'Required Field: Maximum height (Range: 1 to 99)';
    }
    
    if (!input.minWeight ||  input.minWeight === "" ||  !regExNumber.test(input.minWeight) || input.minWeight > input.maxWeight){
        errors.minWeight = 'Required Field: Minimum weight (Range: 1 to 99)';
    }
    
    if (!input.maxWeight ||  input.maxWeight === "" ||  !regExNumber.test(input.maxWeight) || input.maxWeight < input.minWeight){
        errors.maxWeight = 'Required Field: Maximum weight (Range: 1 to 99)';
    }
    
    if (!input.minLife ||  input.minLife === "" ||  !regExNumber.test(input.minLife) || input.minLife > error.maxLife){
        errors.minLife = 'Required Field: Minimum life expectancy (Range: 1 to 99)';
    }
    
    if (!input.maxLife ||  input.maxLife === "" ||  !regExNumber.test(input.maxLife) || input.maxLife < error.minLife){
        errors.maxLife = 'Required Field: Maximum life expectancy (Range: 1 to 99)';
    }
    
    if (!input.temperament.length || input.temperament.length < 1 || input.temperament.length > 3){
        errors.temperament = 'Required Field: Temperaments (max 3 per dog)';
    }
    return errors;
    }

    function handleSelect(e){
        setInput({
            ...input,
            temperament: input.temperament.includes(e.target.value) ? [...input.temperament] : [...input.temperament, e.target.value]
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
    }

    function handleDelete(el){
        setInput({
            ...input,
            temperament: input.temperament.filter(temp => temp !== el)
        })
        setErrors(validate({
            ...input,
            temperament: input.temperament.filter(temp => temp !== el)
        }));
    }

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }));
        
    }

    function handleSubmit(e){
        e.preventDefault()
        if(Object.values(validate(input)).length >= 1){
            alert(Object.values(validate(input)))
        } else  {
        dispatch(postDog(input))
        alert('Personaje Creado!')
        setInput({
            name:'',
            minHeight:'',
            maxHeight:'',
            minWeight:'',
            maxWeight:'',
            minLife:'',
            maxLife:'',
            createdInDb: true,
            temperament:[],
        })
        history.push('/home')
    }}

    return(
        <div className='container'>
            <Link to='/home'><Button>Home</Button></Link>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <Label required>Name: </Label>
                    <Input
                    onChange={handleChange}
                    type='text'
                    value={input.name}
                    name='name'
                    />
                <div>{errors.name && (<Ps className='error'>{errors.name}</Ps>)}</div>
                </div>
                <div>
                    <Label>Minimum Height:  </Label>
                    <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    value={input.minHeight}
                    name='minHeight'
                    />
                <div>{errors.minHeight && (<Ps className='error'>{errors.minHeight}</Ps>)}</div>
                </div>
                <div>
                    <Label>Maximum Height:  </Label>
                    <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    value={input.maxHeight}
                    name='maxHeight'
                    />
                <div>{errors.maxHeight && (<Ps className='error'>{errors.maxHeight}</Ps>)}</div>
                </div>
                <div>
                    <Label>Minimum Weight:  </Label>
                    <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    value={input.minweight}
                    name='minWeight'
                    />
                <div>{errors.minWeight && (<Ps className='error'>{errors.minWeight}</Ps>)}</div>
                </div>
                <div>
                    <Label>Maximum Weight:  </Label>
                    <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    value={input.maxWeight}
                    name='maxWeight'
                    />
                <div>{errors.maxWeight && (<Ps className='error'>{errors.maxWeight}</Ps>)}</div>
                </div>
                <div>
                    <Label>Minimum Life:  </Label>
                    <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    value={input.minLife}
                    name='minLife'
                    />
                <div>{errors.minLife && (<Ps className='error'>{errors.minLife}</Ps>)}</div>
                </div>
                <div>
                    <Label>Maximum Life:  </Label>
                    <Input
                    onChange={(e) => handleChange(e)}
                    type='text'
                    value={input.maxLife}
                    name='maxLife'
                    />
                <div>{errors.maxLife && (<Ps className='error'>{errors.maxLife}</Ps>)}</div>
                </div>
                    <br/>
                    <div>{errors.temperament && (<Ps className='error'>{errors.temperament}</Ps>)}</div>
                    <Select className='formSelect' name="temperament" onChange={(e) => handleSelect(e)}>
                        <option>Select Temperaments</option>
                        {temperaments?.map(temp =>
                            <option name='temperament' value={temp.name}>{temp.name}</option>
                        )}
                    </Select>
                    <br/>
                    <Labels>Temperaments selected: </Labels>
                    <div className='formTemp'>
                    {
                        input.temperament.map(el =>
                            <div className='divTemp'>
                                <button className='botonX' type="button" onClick={() => handleDelete(el)}>x</button>
                                <P>{el}</P>
                            </div>)
                    }
                </div>
                <Button type='submit' >Create Now!</Button>
            </form>
        </div>
    )
}