import { useEffect, useState } from "react";
import Bottle from "./Bottle";
import ShoppingCart from "../ShoppingCart/ShoppingCart";
import { addToLocalStorage } from "../utilities/localStorage";
import { getStoredCart } from "../utilities/localStorage";

const Bottles = () => {
    const [bottles , setBottles]=useState([])
    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('bottles.json')
        .then(res=> res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        if (bottles.length) {
            const StoredCart=getStoredCart()
            const savedCart=[]
            for(const id of StoredCart){
                const bottle= bottles.find(bottle=>bottle.id===id)
                if (bottle) {
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }
    },[bottles])

    const handleAddToCart=bottle=>{
        const newCart=[...cart,bottle]
        setCart(newCart)
        addToLocalStorage(bottle.id)
    }
    return (
        <div>
            <h2>best water bottles in town:({bottles.length})</h2>
            <ShoppingCart cart={cart}></ShoppingCart>
            <div style={{
                display:'grid',
                gridTemplateColumns:'repeat(3,1fr)'
            }}>
                {
                    bottles.map(bottle=><Bottle 
                        key={bottle.id} 
                        bottle={bottle}
                        handleAddToCart={handleAddToCart}
                    ></Bottle>)
                }

            </div>
            
        </div>
    );
};

export default Bottles;