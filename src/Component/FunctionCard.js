import React from "react";

function FunctionCard() {
    return(
        <div className="cardFunction">
            <h2 className="cardHeading">
                Its created using functional component
            </h2>
            <div className="stylingTexts">
                <p className="italics">This is done using external css</p>
                <p style={{color : "blue"}}>This is done using inline css</p>
            </div>
        </div>
    );
}
export default FunctionCard;