import "./App.css"
import { ComponenteNome } from "./Componentes/ComponenteNome";
import { ComponenteResumoSobreVoce } from "./Componentes/ComponenteResumoSobreVoce";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Button from 'react-bootstrap/Button';
import { RouteApp } from "./route";
// import { ToastContainer } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { NavBar } from "./Componentes/NavBar";
import CarouselAnuncios from "./Componentes/carousel";
function App(){
  
  return (
    <>  
    
    <ToastContainer/>
    <RouteApp/>
    </>
  )

}
 export default App;