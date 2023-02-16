import { useState } from "react";
function Rexistro() {
  let [nome, setNome] = useState("");
  let [email, setEmail] = useState("");
  let [clave, setClave] = useState("");
  let [radio, setRadio] = useState("");
  let [radio2, setRadio2] = useState("");
  let [check, setCheck] = useState("");
  let [check2, setCheck2] = useState("");
  let [TextArea, setTextArea] = useState("");

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
  function manexadorDeInputCheck(evento) {
    setCheck(evento.target.value);
  }
  function manexadorDeInputCheck2(evento) {
    setCheck2(evento.target.value);
  }
  function manexadorDeInputTextArea(evento) {
    setTextArea(evento.target.value);
  }

  return (
    <>
      <label>
        Nome:
        <input type="text" id="nome" value={nome} onInput={manexadorDeInputNome} />
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

      <label for="check">
        Check:
        <input type="checkbox" id="check" value="ch1" onInput={manexadorDeInputCheck}/>
        {check}
        Check2:
        <input type="checkbox" id="check" value="ch2" onInput={manexadorDeInputCheck2}/>
        {check2}
      </label>

      { <label for="TextArea">
        TextArea:
         <textarea  id="TextArea" onInput={manexadorDeInputTextArea} ></textarea>  
         {TextArea}   
      </label>}

    </>
  )
}

export default Rexistro;
