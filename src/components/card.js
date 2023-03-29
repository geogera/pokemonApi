import React, { useState } from "react";



function Card(props) {
    const [show, setShow] = useState(false)
    const [buttonText, setText] = useState("Show more")
    function handleClick() {
        if (!show) {
            setText("Show less")
        } else {
            setText("Show more")
        }
        setShow(!show)


    }
    return <div class="card m-2 ">
        <img class="card-img-top" src={props.image} alt="Card image cap" />
        <div class="card-body">
            <h5 class="card-title">{props.name}</h5>
            <p class="">{props.type}</p>
            {show && <ul class="list-unstyled card-text my-2 aling-center">
                <li>{props.stat1} {props.bs1}</li>
                <li>{props.stat2} {props.bs2}</li>
                <li>{props.stat3} {props.bs3}</li>
                <li>{props.stat4} {props.bs4}</li>
                <li>{props.stat5} {props.bs5}</li>
                <li>{props.stat6} {props.bs6}</li>

            </ul>}

            <button class="btn btn-dark" onClick={handleClick}>{buttonText}</button>
            
        </div>
    </div>
}

export default Card;