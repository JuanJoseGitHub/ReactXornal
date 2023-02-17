import { useState } from "react";
import Rexistro from "./Rexistro"

function Login() {

  const [nome, setNome] = useState("");
  const [amosarRexistro, setAmosarRexistro] = useState(false)


  function manexaSubmit(evento) {
    const NovoSubmit=evento.target.value
    setAmosarRexistro(NovoSubmit)
  }

  function manexaInput(evento) {
    const NovoNome=evento.target.value
    setNome(NovoNome)
  }
  
  return (
    <>
      <label for="nome">Nome: </label>
      <input type="text" name="nome" onInput={manexaInput} />
      {nome}

      <label for="password">Clave: </label>
      <input type="password" name="contrasinal" />
      
      <input type="submit" name="submit" value="Enviar" onClick={manexaSubmit} />     
      {amosarRexistro && <Rexistro nome={nome}></Rexistro>}
    </>   
   
  );
}

export default Login;
