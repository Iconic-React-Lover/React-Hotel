import React, { useState } from 'react'

// 1. arrow function
/* 
    let increase = function(){
        return 12
    }
    let increase = // () =>{
        return 12
    }

    let increase = () => 12

*/

/*
    2. Spread

    Copying 1D array properly:
    let array = [1, 2, 3]
    // let newArray= array.slice()
    // let newArray= [...array]

    */


/*
    Copying 1D object properly:
    
    // let object ={ name: "Atiqah", gender: "Female"}
    // let newObject= Object.concat({}, object)
    // let newArray= {...object}
*/

/*
    Copying 2D array properly:
    
   let array = [1, 2, [1,2,3]]
    
   WRONG IN JS ONLY: 
   copying array and object will change the previous array and new array both
    
   let newArray= [...array]

    CORRECT: 
    let newArray= JSON.parse(JSON.stringify(array))

    JSON.stringify([1,2,3]) = "[1, 2, [1,2,3]]"
    JSON.stringify(JSON.parse([1,2,3])) = "[1, 2, [1,2,3]]"

    // other solutions like immer.js, immutable.js are faster

*/


/*
    Copying 2D object properly:
    
   let object = {name: "Atiqah", gender: "female", students: [{
       name: "Lee", gender: "male",
        name: "Syafiqah", gender: "female"
   }]}
    


    CORRECT: 
    let newArray= JSON.parse(JSON.stringify(array))

    JSON.stringify([1,2,3]) = "[1, 2, [1,2,3]]"
    JSON.stringify(JSON.parse([1,2,3])) = "[1, 2, [1,2,3]]"

    // other solutions like immer.js, immutable.js are faster

*/



/*
    3. == != doesnt exist
    ====
    !==

*/

function Basic() {

    let [count, setCount] = useState(0);
    let [string, setString] = useState("goodbye");
    let [array, setArray] = useState([1, 2, 3, 4]);
    let [twoDarray, setTwoDArray] = useState([1, 2, [1, 2]]);


    // A) String, number, boolean
    function countIncrease() {
        //  Rule 1 : Set state first, depend on previous value
        setCount(function (prev) {
            return prev + 1;
        })
    }

    function stringChange() {
        //  Rule 1 : Set state first, depend on previous value
        setString("good morning")
    }

    // A) 1D Array and Object

    function arrayChange() {
        //  Rule 2 : Discard the old array. Send a new array by copying the old array and sending a new array
        //  Rule 2a) : Array

        setArray(function () {

            // Copying String, number, boolean
            // let num =5
            // let num2 = num

            // PROBLEM: Copying array and object will change the previous array but the new array and object will change

            // let arr = [1, 2, 3]
            // let arr1 = arr
            // arr1[1] = 9999999
            // arr1 = [[1, 999999, 3]]       arr = [[1, 999999, 3]] 




            // SOLUTION: Copying array and object will NOT change the previous array but the new array and object will change

            // let newArray= array.slice()
            // let newArray= [...array]

            // newArray.push(5)
            let newArray = [...array, 5]
            return newArray
        })
    }



    // A) 1D Array and Object

    function twoDArrayChange() {

        setTwoDArray(function () {

            let newArray = JSON.parse(JSON.stringify(twoDarray))
            console.log(newArray)
            newArray[1] = 999
            newArray[2][0] = 999

            return newArray
        })
    }



    return (
        <div style={{ margin: " 100px 30vw" }}>
            {/* < button style=" "/> */}
            <button style={{ width: "100px", height: "100px" }} onClick={countIncrease} > Increase number </button>
            <br />
            {count}
            <br />
            <br />
            <button style={{ width: "100px", height: "100px" }} onClick={stringChange} > Change to "good bye" </button>
            <br />
            {string}

            <button style={{ width: "100px", height: "100px" }} onClick={arrayChange} > Add array  </button>
            <br />
            {array.map(function (currentNumber, currentIndex) {
                return (
                    <>
                        <h4>currentNumber: {currentNumber} currentIndex: {currentIndex}</h4>
                    </>
                )
            })}

            <button style={{ width: "100px", height: "100px" }} onClick={twoDArrayChange} > Add 2d array  </button>
            <br />
            {twoDarray.map(function (currentNumber, currentIndex) {
                // [1,2,[1,2]]
                if (currentIndex !== 2)
                    return (
                        <>
                            <h4>currentNumber: {currentNumber} currentIndex: {currentIndex}</h4>
                        </>
                    )
                else
                    return (
                        <>
                            {currentNumber.map(function (insideCurrentNumber, insidecurrentIndex) {
                                return (
                                    <>
                                        <h4>insideCurrentNumber: {insideCurrentNumber} insidecurrentIndex: {insidecurrentIndex}</h4>
                                    </>
                                )
                            })}
                        </>
                    )
            })}


        </div >

    )
}

export default Basic
