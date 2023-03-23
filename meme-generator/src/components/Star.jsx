import React from "react";

export default function Star(props){

    return (
        <section>
            <h1>Welcome back, {props.user}</h1>
        </section>
    )

    // const starIcon = props.isFilled ? '/vite.svg' : '/images/Troll Face.png'
    // return (
    //     <div>
    //         <img 
    //             src={starIcon} 
    //             className="card--favorite"
    //             onClick={props.handleClick}
    //                 />
    //     </div>
    // )
}