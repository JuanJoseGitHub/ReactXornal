import { useState } from "react";
import styles from "./Rexistro.module.css"
function Rexistro(props) {
  let [nome, setNome] = useState("");
  let [email, setEmail] = useState("");
  let [clave, setClave] = useState("");
  let [radio, setRadio] = useState("");
  let [radio2, setRadio2] = useState("");
  let [TextArea, setTextArea] = useState("");
  let [sel, setSel] = useState([]);

  function manexadorDeInputNome(evento) {
    setNome(evento.target.value);
  }
  function manexadorDeInputeMail(evento) {
    setEmail(evento.target.value);
  }
  function manexadorDeInputClave(evento) {
    setClave(evento.target.value);
  }
  function manexadorDeInputRadio(evento) {
    setRadio(evento.target.value);
  }
  function manexadorDeInputRadio2(evento) {
    setRadio2(evento.target.value);
  }
  function manexadorDeInputTextArea(evento) {
    setTextArea(evento.target.value);
  }
  function manexadorClick(evento) { 
    let nSel
    const cClick = evento.target
    if (cClick.checked) {
      nSel=[...sel]
      nSel.push(cClick.value)
    } else {
      nSel=sel.filter(elemento=>elemento !== cClick.value)
     }
    setSel(nSel)
  }

  return(
    <> 
      <h1 className={styles.nome} >Benvido ao formulario de rexistro</h1> 
      <label>
        Nome:
        <input type="text" id="nome" value={props.nome} onInput={manexadorDeInputNome} />
        {nome}
      </label>
      
      <label>
        E-mail:
        <input type="email" id="email" onInput={manexadorDeInputeMail}/>
        {email}
      </label>

      <label for="clave">
        Password:
        <input type="password" id="clave" onInput={manexadorDeInputClave}/>
        {clave}
      </label>

      <label for="radio">
        Radio:
        <input type="radio" name="radio" id="radio" value="r1" onInput={manexadorDeInputRadio}/>
        {radio}
        Radio2:
        <input type="radio" name="radio" id="radio2" value="r2" onInput={manexadorDeInputRadio2}/>
        {radio2}
      </label>

      { <label for="TextArea">
        TextArea:
         <textarea  id="TextArea" onInput={manexadorDeInputTextArea} ></textarea>  
         {TextArea}   
      </label>}

      <input type={"checkbox"} value="Peras" name="frutas" onClick={manexadorClick}/>
      <input type={"checkbox"} value="Maz??s" name="frutas" onClick={manexadorClick}/>
      <input type={"checkbox"} value="Noces" name="frutas" onClick={manexadorClick}/>
      <input type={"checkbox"} value="Casta??as" name="frutas" onClick={manexadorClick}/>
      {sel}

    </>
  );
}
export default Rexistro;
