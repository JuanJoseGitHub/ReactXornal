import { useState } from "react";
import Internacional from "./Internacional";
import Local from "./Local";
import Nacional from "./Nacional";
import Pasatempos from "./Pasatempos";
import Portada from "./Portada";
import Provincial from "./Provincial";
import Login from "../rexistro/Login";

function Navegador()    {

   const [vista, setVista]= useState("portada")

    function manexadorNav(evento)   {
        setVista(evento.target.id)
    }

    return(
       
       <>

        <nav>
            <h3>Menú</h3>
            <ol>
                <li><a id="portada" onClick={manexadorNav}>Portada</a></li>
                <li><a id="internacional" onClick={manexadorNav}>Internacional</a></li>
                <li><a id="nacional" onClick={manexadorNav}>Nacional</a></li>
                <li><a id="provincial" onClick={manexadorNav}>Provincial</a></li>
                <li><a id="local" onClick={manexadorNav}>Local</a></li>
                <li><a id="pasatempos" onClick={manexadorNav}>Pasatempos</a></li>
                <li><a id="login" onClick={manexadorNav}>Login</a></li>
            </ol>              
        </nav>

        <main>
            { vista ==="portada" && <Portada/> }
            { vista ==="internacional" && <Internacional/> }
            { vista ==="nacional" && <Nacional/> }
            { vista ==="provincial" && <Provincial/> }
            { vista ==="local" && <Local/> }
            { vista ==="pasatempos" && <Pasatempos/> }
            { vista ==="login" && <Login/> }
            
        </main>

        </>
    )
}

export default Navegador