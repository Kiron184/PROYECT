const { Router } = require('express');
const axios = require ("axios");
const {Dog, Temperament} = require('../db');
const e = require('express');
const {API_KEY} = process.env
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getApiInfo = async () => {
    const apiUrl = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
    const apiInfo = await apiUrl.data?.map(el => {
        return {
            id: el.id,
            name: el.name,
            minWeight: parseInt(el.weight.metric.split(" -")).toString() === "NaN" ? 0 : parseInt(el.weight.metric.split(" -")).toString(),
            maxWeight: parseInt(el.weight.metric.slice(el.weight.metric.indexOf("-") + 2).split(" ")).toString() === "NaN" ? 0 : parseInt(el.weight.metric.slice(el.weight.metric.indexOf("-") + 2).split(" ")).toString(),
            minHeight: parseInt(el.height.metric.split(" -")).toString() === "NaN" ? 0 : parseInt(el.height.metric.split(" -")).toString(),
            maxHeight: parseInt(el.height.metric.slice(el.height.metric.indexOf("-") + 2).split(" ")).toString() === "NaN" ? 0 : parseInt(el.height.metric.slice(el.height.metric.indexOf("-") + 2).split(" ")).toString(),
            life: el.life_span,
            image: el.image.url,
            temperament: el.temperament?.split(", "),
        }
    });
    for (let i=0; i<apiInfo.length; i++){
        
    }
    return apiInfo;
};

const getDbInfo = async () => {
    return await Dog.findAll({
        include:{
            model: Temperament,
            attributes: ['name'],
            through: {
                attributes:[],
            },
        }
    })
}

const getAllDogs = async () => {
    let apiInfo = await getApiInfo();
    let dbInfo = await getDbInfo();
    let totalInfo = apiInfo.concat(dbInfo);
    return totalInfo;

}

function quicksort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    var pivot = array[0];
    
    var left = []; 
    var right = [];
  
    for (var i = 1; i < array.length; i++) {
      array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
    }
  
    return quicksort(left).concat(pivot, quicksort(right));
  }

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

router.get('/dogs', async (req,res) => {
   try{
    const name = req.query.name;
    let totalDogs = await getAllDogs();
    if (name){
        let dogName = await totalDogs.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
        dogName.length ?
        res.status(200).send(dogName) :
        res.status(404).send("no se econtro la raza");
    } else {
        res.status(200).send(totalDogs);
    }
} catch (err){
    console.log(err)
}
})

router.get("/temperament", async (req,res) => {
    try{
        const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`)
        const temperaments = temperamentsApi.data?.map(el => el.temperament)

        const temperamentsJoin = temperaments.join()
        const temperamentsSplitted = temperamentsJoin.split(",")

        let finalTemperaments = temperamentsSplitted.filter((el, pos) => temperamentsSplitted.indexOf(el) === pos)
        
        finalTemperaments.sort();
        finalTemperaments.shift();
        for(let i=0; i<finalTemperaments.length; i++){
            finalTemperaments[i] = finalTemperaments[i].toLowerCase()
        }
        finalTemperaments = quicksort(finalTemperaments);

        for(let i=0; i<finalTemperaments.length; i++){
            finalTemperaments[i] = capitalizeFirstLetter(finalTemperaments[i].trim())
        }

        
        finalTemperaments.forEach(el => {
            Temperament.findOrCreate({
                where : {name: el}
            })
        })

        const allTemperaments = await Temperament.findAll();
        res.send(allTemperaments);

    } catch(err){
        console.log(err);
    }
})

router.post("/dog", async (req,res) => {
try{
        let{
        name,
        minHeight,
        maxHeight,
        minWeight,
        maxWeight,
        minLife,
        maxLife,
        temperament,
        createdInDb,

    } = req.body;

    let dogCreated = await Dog.create({

        name,
        minHeight,
        maxHeight,
        minWeight,
        maxWeight,
        minLife,
        maxLife,
        temperament,
        createdInDb,

    })

    let temperamentDb = await Temperament.findAll({
        where: {
            name: temperament
        }
    })

    dogCreated.addTemperament(temperamentDb);
    res.send("Dog creado con exito");
} catch(err){
    console.log(err)
}
    })

router.get("/dogs/:id", async (req,res) => {
try{
    const id = req.params.id;
    const totalDogs = await getAllDogs();
    if (id) {
        let dogId = await totalDogs.filter(el => el.id == id)
        dogId.length?
        res.status(200).json(dogId) :
        res.status(404).json("No se encontro el Dog")
    }
}
catch (err){
    console.log(err)
}
})
module.exports = router;
