import React from "react";

export default function Questions(props){
    return(
        <div>
            <p>{props.questions}</p>
            <div>{props.answers}</div>
        </div>
    )
}