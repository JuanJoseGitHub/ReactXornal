
import './App.css';
import './components/login/Login'
import Login from './components/login/Login';
import Encabezado from './components/encabezado/Encabezado';
import Nova from './components/nova/Nova';

function App() {
  return (
    <>
      <Login></Login>
      <Encabezado></Encabezado>
      <Nova titulo="Este é o título por props" contido="contido nº 1"></Nova>
      <Nova titulo="Este é o outro título" contido="contido nº 2"></Nova>
    </>
  );
}

export default App;
