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
    <div>
      {pizzas.map((pizza) => (
        <div key={pizza.ID} className="card">
          <img src='C:\Shivam\React\RedTube-Pizza\redtubepizza\public\Assets\vegCorn pizza.jpeg' alt={pizza.PizzaName} />
          <h1>{pizza.PizzaName}</h1>
          <p>{pizza.Description}</p>
        </div>
      ))}
    </div>
  );
}
export default CardList;
