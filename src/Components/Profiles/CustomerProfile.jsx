import React from "react";
import { Card, Button } from "react-bootstrap";

function CustomerProfile()
{
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <Card>
                <Card.Body>
                    <Card.Title>Customer Name</Card.Title>
                    <Card.Text>addressLine1</Card.Text>
                    <Card.Text>addressLine2</Card.Text>
                    <Card.Text>city, st zip</Card.Text>
                    <div className="d-flex row">
                        <Button className="my-2" variant="primary">Edit</Button>
                        <Button variant="danger">Delete</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default CustomerProfile;