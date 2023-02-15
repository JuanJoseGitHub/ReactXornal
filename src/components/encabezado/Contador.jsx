import { useState } from "react";
function Contador() {
    let [contador,setContador]= useState(0);

    function manexadorDoClickSetter(){setContador(++contador)}

    function manexadorDoClickAsignacion (){contador=contador+1}

    return(
        <>
        <p>Total: {contador}</p>
        <button onClick={manexadorDoClickSetter}>Suma</button>
        <button onClick={manexadorDoClickAsignacion}>Asigna</button>
        </>
        )
}
export default Contador