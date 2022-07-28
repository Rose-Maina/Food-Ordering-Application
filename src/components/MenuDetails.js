import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SEARCH_MEAL = "https://afternoon-bastion-34435.herokuapp.com/menu"

export default function MealDetails(){

    const [image, setImage] = useState("")
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")

    let {mealId} = useParams()

    const actualSearch = SEARCH_MEAL + mealId

    const mealFetcher = () => {
        fetch(actualSearch)
            .then((response) => response.json())
            .then((data) => {
                const meal = data.meals[0]

                setTitle(meal.title)
                setPrice(meal.price)
                setCategory(meal.category)
                setImage(meal.img)
                setDescription(meal.desc)
                
            })
    }

    useEffect(
        mealFetcher, []
    )

    return(
        <div className="container">
            <center>
                <img src={image} style={{height: 200 + 'px', width: 200 + 'px',}} />
                <h4>{title}</h4>
                <h6 className="badge bg-success">{category}</h6>
                <p>{price}</p>
                <p>{description}</p>
            </center>
        </div>
    )

}