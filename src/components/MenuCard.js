import React from "react";

export default function MenuCard({mealName, mealImage, mealPrice, mealCategory}){

    return (
        <div className="col-md-4">
        <div className="card text-center" style={{width: 18 + "rem"}} >
            <img src={mealImage} className="card-img-top height-medium" alt={mealImage}/>
            <div className="card-body">
                <div className="col">
                <h5 className="card-title">{mealName}</h5>
                <p  className="card-category">{mealCategory}</p>
                <p className="card-price">{mealPrice}</p>      
            </div>     
        </div>
        </div>
        </div>
        
    )

}