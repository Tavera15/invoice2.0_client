import React, {useState} from "react";
import AccountNav from "../../Components/AccountNav";
import { Form, Button, Table } from "react-bootstrap";

function InvoiceBookManager()
{
    const [name, setName] = useState("");
    const [logo, setLogo] = useState("");

    function submitInvoiceBook(e)
    {
        e.preventDefault();

        const data = {name, logo};

        console.log(data);

        if(props.hideModal)
        {
            props.hideModal();
        }
    }

    return(
        <div className="d-flex">
            <AccountNav />
            <div className="col-md-9 p-4 min-vh-100 work-area-base">
                <h1 className="display-1">Invoice Book</h1>
                <hr />
                
                <div className="d-flex justify-content-center row text-start">
                    <h1 className="text-start m-0">Invoice Book Info</h1>
                    <Form className="col-12 col-md-10 col-lg-6" onSubmit={(e) => submitInvoiceBook(e)}>
                        
                        <div className="form-group mt-3 mt-3">
                            <label htmlFor="inputName">Invoice Book Name</label>
                            <input required value={name || ""} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputName" />
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

                <hr />
                <div className="d-flex justify-content-center row text-start">
                    <div className="d-flex col justify-content-between align-items-center my-2">
                        <h1>Invoices</h1>
                        <Button variant="info">New Invoice</Button>
                    </div>
                    <div className="d-flex col flex-wrap work-area-base col-12 justify-content-between " 
                        style={{
                            "height": "100%",
                            "maxHeight": "65vh"
                        }}>

                        <div className="col-12">
                            <Table responsive border="solid">
                                <thead>
                                    <tr>
                                        <th scope="col" className="text-start">Actions</th>
                                        <th scope="col" className="text-start">Invoice #</th>
                                        <th scope="col" className="text-start">Customer Name</th>
                                        <th scope="col" className="text-start">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="align-middle">
                                            <div className="col-12 col-xl-6">
                                                <button className="btn btn-primary col-12 mb-2" type="button">View</button>
                                            </div>
                                            <div className="col-12 col-xl-6">
                                                <button className="btn btn-outline-secondary col-12" type="button">Select</button>
                                            </div>
                                        </td>
                                        <td className="align-middle text-start">1000</td>
                                        <td className="align-middle text-start">GROWTH CONTRUCTION</td>
                                        <td className="align-middle text-start">Desc</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoiceBookManager;