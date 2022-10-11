// import logo from './logo.svg';
import {useEffect, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



function App() {
  const MAX_LENGTH = 26 
  let text="This text can be up to 40 characters!!!"
  let width = 900;

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      {text}
    </Tooltip>
  );

  return (
    <div className="App">
     
      <Container fluid="xs" className='content-box-md'>
        <Row className='nowrap'>
          <Col xs sm="8" md="8" lg="8" className='pe-1 d-inline-block'>
             {windowSize.innerWidth < width ?
        (
          <OverlayTrigger
            placement="bottom"
            delay={{ show: 200, hide: 300 }}
            overlay={renderTooltip}
          >
            <Button className="me-3 mb-3">{`${text.substring(0, MAX_LENGTH)}...`}</Button>
          </OverlayTrigger>   
        ) :
        <Button className="me-3">{text}</Button>  
      }
       {windowSize.innerWidth < width ?
        (
          <OverlayTrigger
          placement="bottom"
          delay={{ show: 200, hide: 300 }}
          overlay={renderTooltip}
        >
          <Button className="me-3 mb-3">{`${text.substring(0, MAX_LENGTH)}...`}</Button>
        </OverlayTrigger>    
        ) :
        <Button className="me-3">{text}</Button>    
      }
          </Col>
          
          <Col xs sm="4" lg="4" className='align-right d-inline-block'>
            <Button className='align-right d-inline-block'>Save</Button>{" "}
            <Button className='lnk-btn align-right d-inline-block me-3' variant="link">Cancel</Button>{" "}  
          </Col>
        </Row>
      </Container>
   
    </div>
  );
}

export default App;
