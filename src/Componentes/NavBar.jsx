import {Navbar, Nav, Container} from "react-bootstrap";

function NavBar(){
    return (
        <>
        <Navbar bg="primary" data-bs-theme="primary">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/produtos">Produtos</Nav.Link>
            
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
  
  export { NavBar};