import React from "react";

import { Link } from "react-router-dom";

export default function MenuCard({mealName, mealImage, mealPrice, mealId}){

    return (
        <div className="card" style={{width: 18 + "rem"}} >
            <img src={mealImage} className="card-img-top" alt={mealImage}/>
            <div className="card-body">
                <h5 className="card-title">{mealName}</h5>
                <p className="card-price">{mealPrice}</p>
                {/* <a href="#" class="btn btn-primary">Add to Cart</a> */}
                <Link to={"/meal/"+mealId} className="btn btn-primary">Add to Cart</Link>
            </div>
        </div>
    )

}