import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

function ServiceForm(props)
{
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDesc] = useState("");

    function submitService(e)
    {
        e.preventDefault();

        const data = {name, price, description};

        console.log(data);

        if(props.hideModal)
        {
            props.hideModal();
        }
    }

    return(
        <div className="d-flex justify-content-center">
            <Form className="col-12 col-md-10 col-lg-6" onSubmit={(e) => submitService(e)}>
                
                <div className="form-group mt-3 mt-3">
                    <label htmlFor="inputName">Product/Service name</label>
                    <input required value={name || ""} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputName" />
                </div>
                <div className="form-group mt-3 mt-3">
                    <label htmlFor="inputPrice">Price</label>
                    <input required value={price || ""} onChange={(e) => setPrice(e.target.value)} type="Number" className="form-control" id="inputPrice" min={0} />
                </div>
                <div className="form-group mt-3 mt-3">
                    <label htmlFor="inputDescription">Description</label>
                    <input value={description || ""} onChange={(e) => setDesc(e.target.value)} type="text" className="form-control" id="inputDescription" />
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

export default ServiceForm;