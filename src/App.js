import './App.css';
import './components/login/Login'
import Login from './components/login/Login';
import Encabezado from './components/encabezado/Encabezado';
import Nova from './components/nova/Nova';
import Contador from './components/encabezado/Contador'
import Rexistro from './components/rexistro/Rexistro';

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
      <Encabezado></Encabezado>
      <Contador></Contador>
      <Rexistro></Rexistro>
      <h2>Novas</h2>
      {componentesNovas}
    </>
  );
}

export default App;
