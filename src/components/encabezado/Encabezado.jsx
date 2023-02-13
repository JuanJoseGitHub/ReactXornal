import telefono from "../../images/phone.jpg"
function Encabezado() {
    return (
      <>
        <h1 className="Encabezado">Encabezado</h1>
        <img src={telefono} alt="phone" width="150" height="150" />
        <h2>Encabezado 2</h2>
      </>
    );
  }
  
  export default Encabezado;