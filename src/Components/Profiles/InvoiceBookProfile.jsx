import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function InvoiceBookProfile({id})
{
    const [book, setBook] = useState({});
    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        function getInvoiceBook()
        {
            axios.get(import.meta.env.VITE_SERVER_API + "/Invoice/GetInvoiceBook/" + id, {headers: {Authorization: token}})
                .then((res) => {
                    setBook(res.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        }

        getInvoiceBook()
    }, [isLoading]);

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            {
                isLoading
                    ? ""
                    :   <Card>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>{book.name}</Card.Title>
                                <Card.Text>Invoice Count: {book.invoices.length}</Card.Text>
                                <div className="d-flex row">
                                    <Button className="my-2" variant="success">Create Invoice</Button>
                                    <Button variant="primary">View</Button>
                                </div>
                            </Card.Body>
                        </Card>
            }
        </div>
    );
}

export default InvoiceBookProfile;