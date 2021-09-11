const Exercise = (props) => {
    return (
      <>
        <Card>
          <Card.Title className="mt-2 mb-2">{props.titulo}</Card.Title>
          <Card.Header>
            <img src={props.imagen}></img>
          </Card.Header>
          <Card.Body>este ejercicio se realiza con mancuernas</Card.Body>
        </Card>
      </>
    );
}


export default Exercise;