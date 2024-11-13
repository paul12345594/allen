/*
import React, {useState} from 'react';

function MyComponents (){
    
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(false)

    const updateName = () => {
        setName("Paul Allen");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed);
    }

    return (<div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
            
                <p>IsEmployed: {isEmployed ? "YES" : "NO"}</p>
                <button onClick={toggleEmployedStatus}>Toggle Status</button>
            </div>);
}
export default MyComponents 
*/

//---------------------------------------------------------------------------------------------------------------------

//---------------------------------UPDATE ARRAY OF OBJECTS IN STATE 
/*
import React, { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"])

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value ="";

        setFoods (f => [...f,newFood]);
    }

    function handleRemoveFood(index){
        setFoods (foods.filter((_, i) => i !== index));
    }

    return (<div>
                    <h2>List of Foods</h2>
                    <ul>
                        {foods.map((food, index) => 
                        <li key={index} onClick={() => handleRemoveFood(index)}>
                            {food}
                        </li>)}
                    </ul>
                    <input type="text" id="foodInput" placeholder="Enter food name"/>
                    <button onClick={handleAddFood}>Add food</button>
           </div>)
}
export default MyComponent
*/

//-------------------------------------------------------------------------------------------------------------------------
// useEffect() = React Hook that tells React DO SOME CODE WHEN (pick one):
//                This component re-renders
//                 This component mounts
//                  The state of a value

//  useEffect(function, [dependencies])

//  1. useEffect(() => {})          // Runs after every re-render
//  2. useEffect(() =>, [])         // Runs only on amount
//  3. useEffect(() => {}, [value]) // Runs on mount + when value changes 

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


//----------------------------EXAMPLE 1---------------
//import React, {useState, useEffect} from 'react'
/*
function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green")
    useEffect(() => {
        document.title = `count: ${count} ${color}`;
    },[count, color])

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }

    function changeColor(){
        setColor(c => c === "green" ? "red" : "green" )

    }


    return(<>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>ADD</button>
            <button onClick={subtractCount}>SUBTRACT</button><br />
            <button onClick={changeColor}>Change Color</button>
           </>);
}
export default MyComponent
*/
//-----------------------------EXAMPLE 2----------------------------
//import React, {useState, useEffect} from 'react'
// useEffect(function, [depencies])
/*
function MyComponent(){
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }

    }, [])


    useEffect(() => {
        document.title = `Size ${width} x ${height}`
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    return(<>
           <p>Window Width: {width}px</p>
           <p>Window Height: {height}px</p>
    </>);
}
export default MyComponent;
*/

//-------------------------------------------------------------------------------------------------------















