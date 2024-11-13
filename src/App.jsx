
/*
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx';

function App() {

    return(
      <>
        <Header/>
        <Food/>
        <Footer/>
      </>
    );
}

export default App
*/
//-----------------------------------------------------------------------------------------------
//--------------CARD COMPONENTS 
/*
import Card from './Card.jsx'

function App(){
    return(
      <>
      <Card/>
      </>
      
      
      
    );
}

export default App
*/
//---------------------------------------------------------------------------------------------
//          HOW TO STYLE REACT COMPONENTS WITH CSS 
//---------------------------------------------------
// (not including external frameworks or processors)




//1 . EXTERNAL 
//2 . MODULES
//3 . INLINE 
/*
import Button from './Button.jsx'


function App() {

  return(<Button />);
}

export default App
*/
//-----------------------------------------------------------------------------------------------

// props = read-only properties that are shared between components.
//          A parent component can send data a child components.
//          <Components key=value />
/*
import Student from './Student.jsx'

function App() {
    return(
    <>
      <Student name="PAUL ALLEN" age={22} isStudent={false} />
      <Student name="Franz Jomar" age={23} isStudent={false}/>
      <Student name="Angel Cyril" age={15} isStudent={true}/>
      <Student name="Gabriel" age={17} isStudent={true}/>
    </>
    );
}

export default App
*/



//defaultProps = default values for props in case they are not 
//               passed from the parent component
//               name: "Guest"
/*
import Student from './Student.jsx'

function App() {
    return(
    <>
      <Student name="PAUL ALLEN" age={22} isStudent={false} />
      <Student name="Franz Jomar" age={23} isStudent={false}/>
      <Student name="Angel Cyril" age={15} isStudent={true}/>
      <Student name="Gabriel" age={17} isStudent={true}/>
      <Student name="Alicia" age={44} isStudent={false}/>
    </>
    );
}

export default App
*/

//-----------------------------------------------------------------------------
// conditional rendering = allows you to control what gets rendered 
//                         in your application based on certain conditions 
//                         (show, hide, or change components)
/*
import UserGreeting from './UserGreeting.jsx'

function App (){
    return(
        <>
            <UserGreeting isLoggedIn={true} username="Paul Allen"/>
        </>
    );
}

export default App
*/


//-------------------------------------------------------------------------------------
//____________CLICK EVENTS _________________________
/*
import List from './List.jsx'

function App (){

  const fruits = [{id: 1, name: "apple", calories: 95}, 
                  {id: 2, name: "orange", calories: 45}, 
                  {id: 3, name: "banana", calories: 105}, 
                  {id: 4, name: "coconut", calories: 159}, 
                  {id: 5, name: "pineapple", calories: 37}];

  const vegetables = [{id: 6, name: "potatoes", calories: 110}, 
                 {id: 7, name: "celery", calories: 15}, 
                 {id: 8, name: "carrots", calories: 25}, 
                 {id: 9, name: "corn", calories: 63}, 
                 {id: 10, name: "broccoli", calories: 50}];
  return(<>
        {fruits.length > 0 &&<List items={fruits} category="Fruits"/>}
        {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
        </>);
}
export default App
*/

//--------------------------------------------------------------------------------------------------------------
// click event = An interaction when a user clicks on a specific element.
//               We can respond to clicks by passing 
//               a callback to the onClick event handler.

// import ProfilePicture from "./profilePicture"
// //import Button from './Button.jsx'
// function App() {

//   return<ProfilePicture />;
//   //return(<Button/>);
// }
// export default App

//--------------------------------------------------------------------------------------------------------------

// React hook - Special function that allows functional components 
//              to use React features without writing class components (React v16.8)
//              (useState, useEffect, useContext, useReducer, useCallback, and more.....)

// useState - A React hook that allows the creation of a stateful variable
//            AND a setter function to update its value in the Virtual DOM.
//            [name, setName]

// //import MyComponents from "./MyComponent";
// import Counter from './Counter.jsx'

// function App() {
//   //return(<MyComponents/>); 
//   return (<Counter/>)
// }
// export default App


//-------------------------------------------------------------------------------------------------------

// onChange = event handler used primarly with form elemets 
//            ex. <input>, <textarea>, <select>, <radio>
//            Triggers a function every time the value of the input changes 
/*
import React, {useState} from 'react'

function MyComponents(){
  const [name, setName] = useState("GUEST");       //INPUT
  const [quantity, setQuantity] = useState(1);     //INPUT
  const [comment, setComment] = useState("");      // TEXTAREA
  const [payment, setPayment] = useState("");      //SELECT 
  const [shipping, setShipping] = useState("Delivery"); //RADIO

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleQuantityChange(event){
    setQuantity(event.target.value)
  }
  function handleCommentChange(event){
    setComment(event.target.value)
  }
  function handlePaymentChange(event){
    setPayment(event.target.value)
  }
  function handleShippingChange(event){
    setShipping(event.target.value)
  }

  return(<div>
            <input value={name} onChange={handleNameChange}></input>
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange}
            placeholder="Enter Your Address" />
            <p>Comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange} >
              <option value="">Select an Option</option>
              <option value="Visa">Visa</option>
              <option value="G-Cash">G-Cash</option>
              <option value="MasterCard">MasterCard</option>
              <option value="PayMaya">PayMaya</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
              <input type="radio" value="Pick Up"
                      checked={shipping === "Pick Up"}
                      onChange={handleShippingChange}/>
              Pick Up
            </label><br />
            <label>
            <input type="radio" value="Delivery"
                      checked={shipping === "Delivery"}
                      onChange={handleShippingChange}/> 
              Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>);
}

export default MyComponents
*/

//------------------------------------------------------------------------------------------
// COLOR PICKER APP 
/*
import ColorPicker from "./ColorPicker";

function App(){

  return(<ColorPicker/>)
}
export default App
*/

//---------------------------------------------------------------------------------------------
/*
import React, {useState} from 'react'

function MyComponent(){

  const [car, setCar] = useState({year: 2024, 
                                  make:"Ford",
                                  model:"Mustang"})


function handleYearChange(event){

  setCar(c => ({...c, year: event.target.value}));
}
function handleMakeChange(event){

  setCar(c => ({...c, make: event.target.value}));
}
function handleModelChange(event){

  setCar(c => ({...c, model: event.target.value}));
} 

return(<div>
  <p>Your Favorite Car is: {car.year} {car.make} {car.model} </p>
  <input type="number" value={car.year} onChange={handleYearChange}/><br/>
  <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
  <input type="text" value={car.model} onChange={handleModelChange}/><br/>
</div>)
}
export default MyComponent
*/

//-----------------------------------------------------------------------------------------------------------------------
//---------------------------------UPDATE ARRAY OF OBJECTS IN STATE 
/*
import MyComponent from "./MyComponent";
 
function App(){
  return(
    <MyComponent/>
  )
}
export default App
*/

//--------------------------------------------------------------------------------------------------------------------
/*
import ToDoList from './ToDoList.jsx';

function App (){
  return(<ToDoList />)
}

export default App
*/
//--------------------------------------------------------------------------------------------------------------
/*
import MyComponent from "./MyComponent";
function App(){
  return(<MyComponent/>)
}
export default App
*/

//---------------------------------------------------------------------------------------------------
/*
import DigitalClock from "./DigitalClock.jsx"

function App(){
  return(<DigitalClock/>)
}

export default App;
*/
//----------------------------------------------------------------------------------



















