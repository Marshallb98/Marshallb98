import React from "react";
import { Container, Card, Button, CardGroup } from "react-bootstrap";
// import ProjectDisplay from "../pages/ProjectDisplay"
function Project(props) {
  return (
    <div>
        <Container>
        <CardGroup>
      {props.projectDemos.map(({ id, name, repo, live, img }) => {
        return (
          <div>
            <Card className="ProCards">
              <Card.Img variant="top" src={img} />
              <Card.Body key={id}>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                </Card.Text>
                <a href={repo}>
                  <Button variant="dark">Repo</Button>{" "}
                </a>
                <a href={live}>
                  <Button variant="dark">Live Site</Button>
                </a>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </CardGroup>
      </Container>
    </div>
  );
}
export default Project;
