import React from "react";
import HomeNav from "../Components/HomeNav";
import { Card } from "react-bootstrap";

function AboutPage()
{
    return(
        <div className="d-flex">
            <HomeNav />

            <div className="col-md-9 text-light d-flex  justify-content-center align-items-start p-4" 
                    style={{"backgroundImage": "url(https://img.freepik.com/premium-photo/cozy-home-office-with-desk-computer-warm-lighting-vector-illustration-flat-style_1029473-422475.jpg)", 
                    "height": "100vh",
                    "filter": "brightness(.8)",
                    "backgroundPosition": "center", 
                    "backgroundSize": "cover", 
                    "backgroundRepeat": "no-repeat",
                    "overflow": "hidden",
                    "overflowY": "scroll",
                    "flexWrap": "wrap"}}>

            {/* <div className="col-md-9 d-flex justify-content-center align-items-center p-4" style={{height: "100vh"}}> */}
                
                <div className="col-12 col-md-12 rounded bg-dark border p-4 mb-2"
                    style={{"filter": "brightness(1)", opacity: .95}}>
                    <h1 className="display-1">About</h1>
                    <hr />
                    <h3 className="display-5">A free software to manage your business' invoices</h3>
                </div>

                <div className="col-12 col-md-6 rounded bg-dark border p-4 mb-2"
                    style={{"filter": "brightness(1)", opacity: .95}}>
                    <h3>Easily keep track of your businesses and customers</h3>
                    <hr />
                    
                    <div className="d-flex col text-dark">
                        <Card className="col-6">
                            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/07/67/48/21/360_F_767482124_P2kBhb0LBNJzdxzx6SQ2B4b1tfR70QpQ.jpg" />
                            <Card.Body>
                                <Card.Title>Customer 1</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card className="col-6">
                            <Card.Img variant="top" src="https://t4.ftcdn.net/jpg/07/67/48/21/360_F_767482124_P2kBhb0LBNJzdxzx6SQ2B4b1tfR70QpQ.jpg" className="rounded"/>
                            <Card.Body>
                                <Card.Title>Customer 2</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-12 col-md-6 rounded bg-dark border p-4 mb-2"
                    style={{"filter": "brightness(1)", opacity: .95}}>
                    <h3>Email your invoices straight to your customers with a simple click</h3>
                    <hr />
                    
                    <div className="d-flex col text-dark">
                        <Card className="col-11">
                            <Card.Img variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/053/716/770/small_2x/minimalist-black-envelope-icon-on-a-transparent-background-representing-email-communication-and-messaging-applications-png.png" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;