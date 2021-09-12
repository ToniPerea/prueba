import { Form, Button } from "react-bootstrap";
import CardComponet from "./Card";
import { useHistory } from "react-router";

const Login = (props) => {

  let history = useHistory();
 
  function handleSubmitClick(){
    alert("hola me llamo pepe")
    history.push('/exercises');
  }
      
  return (
    <>
      <CardComponet
        hijo={
          <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="mt-3">Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="mb-3" variant="primary" type="submit" onClick={handleSubmitClick}>
              Submit
            </Button>
          </Form>
        }
      />
    </>
  );
};

export default Login;
