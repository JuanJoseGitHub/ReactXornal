import { useState } from "react";
function Pasatempos()  {
    let [contador,setContador]= useState(0);

    function manexadorDoClickSetter(){setContador(++contador)}

    function manexadorDoClickAsignacion (){contador=contador+1}

    return(
        <>
        <h1>Pasatempos</h1>
        <p>Total: {contador}</p>
        <button onClick={manexadorDoClickSetter}>Suma</button>
        <button onClick={manexadorDoClickAsignacion}>Asigna</button>
        </>
    )
}

export default Pasatempos;