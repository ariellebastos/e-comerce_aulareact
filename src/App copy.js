import "./App.css"
import { ComponenteNome } from "./Componentes/ComponenteNome";
import { ComponenteResumoSobreVoce } from "./Componentes/ComponenteResumoSobreVoce";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
function App(){
  return(
    <div className="app">
    <p>Importando Componentes</p>
    <hr/>
  
    <ComponenteNome />
    <hr/>
    <ComponenteResumoSobreVoce
    nome= "Arielle"
    idade= "20"
    
    >
sou legal
      </ComponenteResumoSobreVoce>
      
     <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </div>   
  );
}

export default App;