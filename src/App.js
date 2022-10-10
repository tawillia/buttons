// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';



function App() {
  return (
    <div className="App">
      <Container className='content-box-md'>
      <Row className='nowrap'>
        {/* <div> */}
        <Col xs sm="3" md="3" lg="3" className='d-inline-block'>
          <Button className='d-inline-block' limit = {10}>This text can be up to 40 characters!!!</Button>{" "}
          </Col>
        <Col xs sm="3" md="3" lg="3" className='d-inline-block'>
          <Button className='d-inline-block'>This text can be up to 40 characters!!!</Button>
        </Col>
        <Col md="auto">
        </Col>
 
        <Col xs sm="4" md="4" lg="4" className='align-right d-inline-block'>
        <Button className='align-right d-inline-block'>Save</Button>{" "}
        <Button className='lnk-btn align-right d-inline-block' variant="link">Cansel</Button>{" "}  
        </Col>
  
      </Row>

      
      </Container>
   
    </div>
  );
}

export default App;
