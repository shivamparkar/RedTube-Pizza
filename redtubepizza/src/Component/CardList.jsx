import React,{useEffect, useState} from "react";
import "./CardList.css";
import PizzaMaster from "../Data/Pizza";


function CardList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    // Simulating fetching data from a local file
    setPizzas(PizzaMaster);
  }, []);

  return (
    <div className="card-container">
    {pizzas.map((pizza) => (
      <div key={pizza.ID} className="card">
        <img src='/Assets/vegCorn pizza.jpeg' alt={pizza.PizzaName} />
        <h1>{pizza.PizzaName}</h1>
        <p>{pizza.Description}</p>
      </div>
    ))}
  </div>
  
  );
}
export default CardList;
