import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./bottles.css"


const Bottles = () => {

    const [bottles, setBottles]=useState([])
    const [cart, setCart]=useState([])
    useEffect(()=>{
        fetch("bottle.json")
        .then(res=>res.json())
        .then(data=> setBottles(data))
    },[])

    const handleAddToCard = bottle=>{
        // console.log(bottle)
        const newCard = [...cart, bottle]
        setCart(newCard)
    }



    return (
        <div>
            <h2>Bottles Available:{bottles.length} </h2>
            <h3>Cart: {cart.length}</h3>

            <div className="bottle-container">
            {
                bottles.map(bottleVariable => <Bottle handleAddToCard={handleAddToCard}  key={bottleVariable.id}  bottle={bottleVariable}></Bottle>)
            }
            </div>
           

            
        </div>


    );
};

export default Bottles;