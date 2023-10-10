import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListaProdutos } from "../Componentes/ListaProdutos";
import { Produto } from "../pages/produto";
import {Home} from "../pages/Home"
import { Login } from "../pages/login";

export function RouteApp(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path= "/" element= {<Home/>} />
            <Route path= "/produtos" element= {<Produto/>}/>
            <Route path= "/login" element= {<Login/>}/>
        </Routes>
        </BrowserRouter>
    )
}