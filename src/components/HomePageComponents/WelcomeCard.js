import React from 'react';
import { Card,Button} from 'react-bootstrap';
import uploadpic from '../../assets/svg/main-logo.svg';



function WelcomeCard() {
    return (
        <Card className="text-center">
            <Card.Header>We believe that Empowerment of individuals is a key part of what makes open source work to foster innovations.</Card.Header>
            <Card.Img variant="top" src={uploadpic} height="420"/>
            <Card.Body>
                <Card.Title>Learn Sanskrit while playing</Card.Title>
                <Card.Text>
                 Explore our new initiative to Learn Sanskrit Language via an Attractive Game
                </Card.Text>
                <a href="/comingsoon"><Button variant="outline-primary">Enter the Game</Button></a>
            </Card.Body>

            {/* <Card.Footer className="text-muted">See our Projects</Card.Footer> */}
        </Card>

    );
}

export default WelcomeCard;