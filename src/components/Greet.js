import React from "react";

function Greet(props) {
    // console.log(props)
    var sd_score = (props.score -50) / 20
    return (
    <div>
        <h1>
            Hello {props.name} , Score : {props.score} , sd: {sd_score}
        </h1>
        {props.children}
    </div>
    )
}

export default Greet