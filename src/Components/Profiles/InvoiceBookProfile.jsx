import React from "react";
import { Card, Button } from "react-bootstrap";

function InvoiceBookProfile()
{
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Code Bizz Invoice</Card.Title>
                    <Card.Text>Invoice Count: 12</Card.Text>
                    <div className="d-flex row">
                        <Button className="my-2" variant="success">Create Invoice</Button>
                        <Button variant="primary">Edit</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default InvoiceBookProfile;