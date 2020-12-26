import React from 'react';
import { Card, Button } from 'react-bootstrap';
import comingsoon from '../../assets/svg/comingsoon.svg';



function ContributeCard() {
    return (
        <Card className="text-center">
            <Card.Header>Want to Join our Journey ?</Card.Header>
            <Card.Text>{'       '}</Card.Text>
            <Card.Img variant="top" src={comingsoon} height="300" />
            <Card.Body>
                <Card.Title>Your help is needed to extend our community</Card.Title>
                <Card.Text>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            Intelligence is the ability to avoid doing work, yet getting the work done..{' '}
                        </p>
                        <footer className="blockquote-footer">
                            <cite title="Source Title">Linus Torvalds</cite>
                        </footer>
                    </blockquote>
                </Card.Text>
                <a href="https://github.com/tetra-devs"><Button variant="primary">Our Github Organization</Button></a>
            </Card.Body>

        </Card>

    );
}

export default ContributeCard;