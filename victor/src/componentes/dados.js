import React from "react";

export default function Dados(props) {
    
    const n1 = 2
    const n2 = 3

    return (

        <section>

            <p>Canal : {props.canal}</p>
            <p>Youtube</p>
            <p>Curso</p>
            <p> { 'a soma do primeiro valor + ' +n1+ 'mais o segundo valor ->'+n2+'é de : '+ props.somar(n1,n2)}</p>
            
        </section>

    )

}