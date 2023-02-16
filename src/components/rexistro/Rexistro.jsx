import { useState } from "react";
function Rexistro() {
  let [nome, setNome] = useState("Daniel");
  let [email, setEmail] = useState();

  function manexadorDeInputNome(evento) {
    setNome(evento.target.value);
  }

  return (
    <>
      <label>
        Nome:
        <input type="text" name="nome" value={nome} onInput={manexadorDeInputNome} />
      </label>
      
      <label>
        E-mail
        <input type="email" name="email" />
      </label>
    </>
  );
}

export default Rexistro;
