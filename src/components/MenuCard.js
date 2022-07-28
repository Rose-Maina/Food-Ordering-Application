import React from "react";

// import { Link } from "react-router-dom";

export default function MenuCard({mealName, mealImage, mealPrice}){

    return (
        <div className="card" style={{width: 18 + 'rem'}}>
            <img src={mealImage} className="card-img-top" alt={mealImage}/>
            <div className="card-body">
                <h5 className="card-title">{mealName}</h5>
                <p className="card-price">{mealPrice}</p>
                {/* <Link to={"/meal/"+mealId} className="btn btn-primary">Description</Link> */}
            </div>
        </div>
    )

}