import Nova from "./Nova";

function CreaNova(props) {

    const novas = [
        {
        titulo:"nova1",
        contido:"contido1"
        },
        {
        titulo:"nova2",
        contido:"contido2"
        }
      ]
    
      const componentesNovas=novas.map(
        nova => <Nova titulo={nova.titulo} contido={nova.contido}/>
      )
    return (
      <> 
      <h2>Novas</h2>
      {componentesNovas}   
      </>
    )
  }
  
  export default CreaNova;