import React from "react";
import { Container, Card, Row, Col, Image, Button } from "react-bootstrap";

const profilepic = "https://images.unsplash.com/photo-1644982647844-5ee1bdc5b114?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
const profilepicMe = "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/281488276_2029099700629048_7152044730680568298_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG-8MrdGXRNX03_sJMXu5HOmPKKf9oy7FeY8op_2jLsV3Vbm79ViE_Yic88eYTqFO61nKclxUUUoIzogG1PvcA4&_nc_ohc=-VqUOx0qaWsAX-o893L&tn=PyfEhWWpsZx5eQpB&_nc_ht=scontent.fbkk28-1.fna&oh=00_AT9E2VSjYjxncNsW-UzjLH8WDNrLj0ZnsavUavP9wa7bmg&oe=62A5265E"
export const Home = () => {
    return(
        <div className="home-body mt-5">
            <Container>
                <Row>
                    <Col>
                    <Card className="p-5">
                        <Card.Body>
                            <Image src={profilepicMe} height={300} roundedCircle/>
                            <Card.Title>
                                <h1>Mos Pumiphat</h1>
                            </Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                <h2>Full-Stack Developer</h2>
                            </Card.Subtitle>
                            <Card.Text>
                                <p>Mos pumiphat is happy. Mos pumiphat is happy. Mos pumiphat is happy.</p>
                            </Card.Text>
                            <Card.Link href="/about">
                                < Button variant="primary">About</Button>
                            </Card.Link>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}