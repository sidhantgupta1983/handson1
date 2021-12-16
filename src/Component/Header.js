import React, {useState} from "react";
import FunctionCard from './FunctionCard.js'
import CardClass from './CardClass.js';

function Header(){
    const [functionCard,setFunctionCard] = useState(false);
    const [classCard,setClassCard] = useState(false);

    return (
        <div className="container">
            <div>
                <h1 className="heading">Styling using Functional and Class Component </h1>
            </div>
            <div className="buttons">
                <button className="btn1" onClick={()=>setFunctionCard(!functionCard)}>To see styling in Functional Component</button>
                <button className="btn2" onClick={()=>setClassCard(!classCard)}>To see styling in Class Component</button>
            </div>
            <div className="cards">
                <div className="functionCard" >
                    {functionCard && <FunctionCard/>}
                </div>
                <div className="classCard" >
                    {classCard && <CardClass/>}
                </div>
            </div>
        </div>
    );
}

export default Header;