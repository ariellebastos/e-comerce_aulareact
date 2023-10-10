import { Container } from "react-bootstrap"; 
import { NavBar } from "../Componentes/NavBar";
import { ListaProdutos } from "../Componentes/ListaProdutos";
function Produto(){
    return (
        <>
        <NavBar/>
        <ListaProdutos/>
        </>
    );
}

export {Produto};