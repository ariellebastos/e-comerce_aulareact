import {Col, Row} from "react-bootstrap";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../_Service/api";
import { CardProduto } from "./cardProduto";


function ListaProdutos(){
    const [produtos, setProdutos] = useState([]);

    useEffect(() =>{
        buscarProdutos();
    }, []);

  function mensagemDeErro(mensagem = "Mensagem de erro") {
    toast.error(mensagem, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true, 
      progress: undefined,
      theme: "dark",
    });
  }

  async function buscarProdutos() {
    try {
      const response = await api.get("/productlistbyremark/home");
      setProdutos(response.data);
    } catch (error) {
      mensagemDeErro("Erro para buscar os produtos.");
    }
  }


    return(
        <>
        <Row className= "justify-content-md-center">
            <Col md={2}>
                <h1>Lista Produtos</h1>
            </Col>
         </Row>
         <Row>
          {produtos.map ((produto, index) => {
            return (
              <Col className="m-2">
                <CardProduto 
                nome={produto.title}
                preco={produto.price}
                linkImagem={produto.image}
                descricao={produto.category}

                />
              </Col>
            )
          })}
          </Row>   
        </>
    );
}

export {ListaProdutos};