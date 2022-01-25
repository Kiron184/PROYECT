import React from "react";
import { Div, H2, H3, H5, Img } from "../styled components/Card";

export default function Card({name, image, temperament, minWeight, maxWeight}){
    console.log(temperament)
    return(
        
        <Div key="Div1">
        <Div className="img" key="Div2">
            <Img key="Img" src={image ? image : "https://www.creativefabrica.com/wp-content/uploads/2021/07/04/cat-and-dog-silhouette-logo-for-pet-shop-Graphics-14248406-1.jpg"} alt='Not Found' width='400px' height='300px' />
        </Div>
        <Div className="info" key="Div3">
            {
                name.length<18 ?
                <H2 key="H2-1">{name}</H2> :
                <H2 key="H2-2">{name.substring(0,14) + "..."}</H2>
            }        

            <H3 key="H3">Temperament:</H3>
            <div className="bubleContainer">
            {
                temperament && temperament.length < 7 ?
                temperament?.map((el) => <div key={`div${el}`} className="tempBuble"><H5 key={`${el}`} >{el + " "}</H5></div>):
                temperament?.slice(1,7).map((el) => <div key={`div${el}`} className="tempBuble"><H5 key={`${el}`} >{el + " "}</H5></div>)
            }
            </div>
            <H5 key="H5-3">Minimum Weight: {minWeight === 0 ? "No Info" : minWeight + " Kg"}</H5>
            <H5 key="H5-4">Maximum Weight: {maxWeight === 0 ? "No Info" : maxWeight + " Kg"}</H5>
        
        </Div>
        </Div>
    );
}