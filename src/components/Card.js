import { Card,Row,Col,Container } from "react-bootstrap";

const CardComponet = (props) =>{
    return (
      <Container fluid="sm" style={{ /*backgroundColor: "blue"*/ }} className="mt-4 mb-4">
        <Row className="justify-content-md-center">
          <Col xs={6}>
              <Card>
            {props.hijo}
            </Card>
          </Col>
        </Row>
      </Container>
    );
}

export default CardComponet;