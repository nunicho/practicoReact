import React from 'react';
import {useState} from "react";

const Header = (props) =>{

const [estado1, estado2] = useState ('')

const cambiar = () =>{
    if (estado1 === (''))
    estado2 (estado1 + '(from changed state)')
}

    console.log(props)
    return (
        <div>
        <h1>Hello {props.titulo}{estado1}!</h1>
        <button onClick={cambiar}>Click me</button>
        </div>
       
    )
}

export default Header; 