import React, {Component} from "react";

class CardClass extends Component {
    render() {
        return(
            <div className="classCard">
                <h2 className="cardHeading">
                    Its created using class component
                </h2>
                <div className="stylingClassTexts">
                    <p className="italics">This is done using external css</p>
                    <p style={{color : "blue"}}>This is done using inline css</p>
                </div>
            </div>
        );
    }
}
    
export default CardClass;