import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';

function InvoiceBookForm(props)
{
    const [name, setName] = useState("");
    const [startingNumber, setStartNumber] = useState(1000);
    const [logo, setLogo] = useState("");
    const {id} = useParams();
    const token = useSelector(state => state.token.value);

    useEffect(() => {
        if(props.origin)
        {
            setName(props.origin.name);
            setStartNumber(props.origin.startingNumber);
            setLogo(props.origin.logo);
        }
    }, [])

    function submitInvoiceBook(e)
    {
        e.preventDefault();

        const data = {name, startingNumber, logo};

        if(props.origin)
            {
                axios.put(import.meta.env.VITE_SERVER_API + `/Invoice/UpdateInvoiceBook/${id}/`, data, {headers: {Authorization: token}})
                    .then(() => location.reload())
                    .catch((err) => console.log(err))
            }
            else
            {
                axios.post(import.meta.env.VITE_SERVER_API + "/Invoice/CreateNewInvoiceBook/", data, {headers: {Authorization: token}})
                    .then(() => location.reload())
                    .catch((err) => console.log(err))
            }

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

                {
                    props.origin
                        ? ""
                        :   <div className="form-group mt-3 mt-3">
                                <label htmlFor="inputStartingNumber">Starting Number</label>
                                <input required value={startingNumber || ""} onChange={(e) => setStartNumber(e.target.value)} type="Number" className="form-control" id="inputStartingNumber" min={0} />
                            </div>
                }
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