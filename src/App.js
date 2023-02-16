import './App.css';
import './components/login/Login'
import Login from './components/login/Login';
import Nova from './components/nova/Nova';
import Rexistro from './components/rexistro/Rexistro';
import Navegador from './components/vistas/Navegador';

function App() {
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
      <Login></Login>
      <Rexistro></Rexistro>
      <h2>Novas</h2>
      {componentesNovas}
      <Navegador></Navegador>
    </>
  );
}

export default App;
