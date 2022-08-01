import React, { useEffect, useState } from "react";
// import { alignPropType } from "react-bootstrap/esm/types";
import MenuCard from "./MenuCard";

const RestaurantMeals = "https://nameless-fortress-22217.herokuapp.com/menu"

function Home(){

const [meals, setMeals] = useState([])
// load items from the API
const mealFetcher = () => {
    fetch(RestaurantMeals)
        .then((response) => response.json())
        .then((data) => {
            setMeals(data)}
)
        }
    
useEffect(
    mealFetcher, []
    )
let menuCards = meals.map((meal) => (<MenuCard mealName={meal.itemName} mealImage={meal.img} mealPrice={meal.price} mealCategory={meal.category}key={meal.id}/>))

return(
    <div className="container text-center bg-green" >
        <h2>Menu</h2>
        <p>Whether It Is Time To Break Your Fast, Have Lunch Or Get Some Dinner? Simply Get It From The Best</p>
        <div className="row">
        {menuCards}
        </div>
        
    </div>
)
}

 export default Home;