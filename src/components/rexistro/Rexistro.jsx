
import { useState } from "react"
function Rexistro(){
   let [nome, setNome]= useState("Daniel")
   let [email,setEmail]= useState()

    function manexadorDeInputNome(evento){
        setNome(evento.target.value)
    }

    return(
        <>
        <label>
            Nombre:
        <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome}/>
        <p>Este é o contido do nome en maiusculas</p>
        </label>
        <label>
            E-mail
        <input type="email" name="email"/>
        </label>
        </>
    )
}

export default Rexistro