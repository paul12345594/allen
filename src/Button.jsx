
//------------INLINE
/*
function Button(){

    const styles ={
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
    }

    return(<button style={styles}>Click Me</button>)
}
export default Button
*/

//------------------------------------------------------------------------------------------
/*
function Button(){

    let count = 0;
    const handleClick = (name) => {
        if(count < 10){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name} stop clicking me!`);
        }
    }
    return(<button onClick={() => handleClick("BOSSING")}> Click Me😎 </button>);

}
export default Button
*/
/*
    const handleClick =(e) => e.target.textContent = "OUCH 🤕"

    return(<button onDoubleClick={(e) => handleClick(e)}>Click me 😍</button>)
}
export default Button
*/

// its another method 
    //const handleClick = () => console.log("OUCH!");
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    
//-----------------------------------------------------------------------------------------------------


















