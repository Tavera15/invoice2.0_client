import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function InvoiceBookForm(props)
{
    const [name, setName] = useState("");
    const [startingNumber, setStartNumber] = useState(1000);
    const [logo, setLogo] = useState("");

    function submitInvoiceBook(e)
    {
        e.preventDefault();

        const data = {name, startingNumber, logo};

        console.log(data);

        if(props.hideModal)
        {
            props.hideModal();
        }
    }

    return(
        <div className="d-flex justify-content-center">
            <Form className="col-12 col-md-10 col-lg-6" onSubmit={(e) => submitInvoiceBook(e)}>
                
                <div className="form-group mt-3 mt-3">
                    <label htmlFor="inputName">Invoice Book Name</label>
                    <input required value={name || ""} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputName" />
                </div>
                <div className="form-group mt-3 mt-3">
                    <label htmlFor="inputStartingNumber">Starting Number</label>
                    <input required value={startingNumber || ""} onChange={(e) => setStartNumber(e.target.value)} type="Number" className="form-control" id="inputStartingNumber" min={0} />
                </div>
                <div className="form-group mt-3 mt-3">
                    <label htmlFor="inputLogo">Logo URL</label>
                    <input value={logo || ""} onChange={(e) => setLogo(e.target.value)} type="text" className="form-control" id="inputLogo" />
                </div>

                <div className="form-row row">
                    <div>
                        <Button className="border col-12 my-4" type="submit" variant="success">Save</Button>
                    </div>
                </div>
            </Form>
        </div>
    )
}

export default InvoiceBookForm;