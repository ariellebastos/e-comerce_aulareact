import { ListaProdutos } from "../Componentes/ListaProdutos";
import { NavBar } from "../Componentes/NavBar";
import CarouselAnuncios from "../Componentes/carousel";


function Home() {
return (
    <>
    <NavBar/>
    <CarouselAnuncios/>
    <ListaProdutos/>
    </>

);

}
export {Home};