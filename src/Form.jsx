import { useState } from "react";

export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(event) {
        event.preventDefault();

        if(!description) return;

        const newItem = { id: new Date().getTime(), description, quantity, packed: false };
        
        onAddItems(newItem);
        
        setDescription("");
        setQuantity(1);
    }

    function handleInput(event) {
        setDescription(event.target.value); 
    }

    function handleSelect(event) {
        setQuantity(Number(event.target.value)); //converts value into a number    
    }

    return (
        <form  onSubmit={handleSubmit} className="add-form">

            <h3>What do you need for your trip? </h3>

            <select onChange={handleSelect} value={quantity}>
                {Array.from({ length: 20}, (_, i) => i + 1).map(num => <option value={num} key={num}>{num}</option>)}
            </select>
            <input onChange={handleInput} type="text" placeholder="Item" value={description}/>
            <button type="submit">Add</button>

        </form>
    )
}