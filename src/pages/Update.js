import React, {useState} from 'react'

export default function Update() {

    // 1. state changes : this.setState({}) in class component or React HOOKS like setName(here)
    // 2. props of parent change because parent changes the state

    const [name, setName] = useState("Afifah")

    function changeName(){
        setName("Hamidah")
    }

    function changeNameWrong(){
        name=""
    }

    return (
        <div>
            <div style={{ margin: " 100px 30vw" }}>
                {/* < button style=" "/> */}
                <button style={{ width: "100px", height: "100px" }} onClick={changeName} > Change name </button>
                <br />
                {name}
                <br />
                <br />
                <UpdateChild  nameParent={name} />
                <br />
            </div>
        </div>
    )
}


function UpdateChild({ nameParent }) {
    return (
        <div style={{ backgroundColor: "red", color: "white" }} >
            {nameParent}
        </div>
    )
}

