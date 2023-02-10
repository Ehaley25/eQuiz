import React from "react";

export default function Questions(props){
    return(
        <>
            <p>{props.question}</p>
            <button>{props.answers}</button>
        </>
    )
}
// pass props to "questions" that involve question & answers

// I THINK