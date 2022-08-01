import React from "react";

function Filter({ category, onCategoryChange}) {
 
  return (
    <div className="Filter">
      <select
        name="filter"
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="All">Filter by category</option>
        <option value="Break Your Fast">Break Your Fast</option>
        <option value="Time For Lunch">Time For Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
        <option value="Can I Have Snacks?">Can I have Snacks?</option>
        <option value="Burgers and Beverages?">Burgers and Beverages</option>
        <option value="Pizzanians">Pizzanians</option>
        <option value="Chips and Chicken">Chips and Chicken</option>
      </select>
    </div>
  );
}

export default React.memo(Filter);