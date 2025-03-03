import React from "react";
import { Container, Card } from "react-bootstrap";
import './Home.css';  // Import the CSS file

const Home = () => {
    return (
        <Container className="mt-5">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title as="h1">Welcome to Suraj Agro Chemicals</Card.Title>

                    {/* Apply the image-container class */}
                    <div className="image-container">
                        <img src="./HumicAcid.jpg" alt="Humic Acid" className="img-fluid" />
                        <img src="./FulvicAcid.jpg" alt="Fulvic Acid" className="img-fluid" />
                        <img src="./GreenSeweed.jpg" alt="Green Seweed" className="img-fluid" />
                        <img src="./Amino.jpg" alt="Amino " className="img-fluid" />
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Home;








