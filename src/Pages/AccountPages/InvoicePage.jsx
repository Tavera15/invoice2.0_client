import React, {useState} from "react";
import AccountNav from "../../Components/AccountNav";
import { Button, Form, Table } from "react-bootstrap";

function InvoicePage()
{
    const [businessName, setBusinessName]                   = useState("");
    const [businessEmail, setBusinessEmail]                 = useState("");
    const [businessPhone, setBusinessPhone]                 = useState("");
    const [businessAddressLine1, setBusinessAddress1]       = useState("");
    const [businessAddressLine2, setBusinessAddress2]       = useState("");
    const [businessCity, setBusinessCity]                   = useState("");
    const [businessState, setBusinessState]                 = useState("");
    const [businessZipCode, setBusinessZipCode]             = useState("");

    return(
        <div className="d-flex">
            <AccountNav />

            <Form className="col-md-9 p-4 min-vh-100 work-area-base">
                <h1 className="display-1">Invoices</h1>
                
                <hr />
                <div className="d-flex justify-content-center row">
                    <div className="col-12 d-flex row align-items-start">
                        <div className="d-flex col-12 col-md-6 justify-content-center row text-center p-0 m-0 mb-4">
                            <h1>Business Info</h1>
                            <div className="col-12">
                                <div className="form-group mb-4">
                                    <label for="business" className="form-label"><strong>Autofill Business</strong></label>
                                    <div>
                                        <select id="business" className="form-select" aria-label="Default select example">
                                            <option selected value={""} disabled>Select Business</option>
                                            <option value={"1"}>Business 1</option>
                                            <option value={"2"}>Business 2</option>
                                            <option value={"3"}>Business 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-6 mt-3">
                                        <label htmlFor="inputBusinessName">Name</label>
                                        <input required value={businessName || ""} onChange={(e) => setBusinessName(e.target.value)} type="text" className="form-control" id="inputBusinessName" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-md-6 mt-3">
                                        <label htmlFor="inputBusinessPhone">Telephone</label>
                                        <input required value={businessPhone || ""} onChange={(e) => setBusinessPhone(e.target.value)} type="telephone" className="form-control" id="inputBusinessPhone" placeholder="123-456-7890" />
                                    </div>
                                </div>
                                <div className="form-row row">
                                    <div className="form-group mt-3">
                                        <label htmlFor="inputBusinessEmail">Email</label>
                                        <input required value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} type="email" className="form-control" id="inputBusinessEmail" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group mt-3 mt-3">
                                    <label htmlFor="inputBusinessAddress1">Address Line 1</label>
                                    <input required value={businessAddressLine1 || ""} onChange={(e) => setBusinessAddress1(e.target.value)} type="text" className="form-control" id="inputBusinessAddress1" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group mt-3 mt-3">
                                    <label htmlFor="inputBusinessAddress2">Address Line 2</label>
                                    <input value={businessAddressLine2 || ""} onChange={(e) => setBusinessAddress2(e.target.value)} type="text" className="form-control" id="inputBusinessAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputBusinessCity">City</label>
                                        <input required value={businessCity || ""} onChange={(e) => setBusinessCity(e.target.value)} type="text" className="form-control" id="inputBusinessCity" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputBusinessState">State</label>
                                        <input required value={businessState || ""} onChange={(e) => setBusinessState(e.target.value)} type="text" className="form-control" id="inputBusinessState" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputBusinessZip">Zip</label>
                                        <input required value={businessZipCode || ""} onChange={(e) => setBusinessZipCode(e.target.value)} type="text" className="form-control" id="inputBusinessZip" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex col-12 col-md-6 justify-content-center align-items-start row text-center p-0 m-0 mb-4">
                            <h1>Client Info</h1>
                            <div className="col-12">
                                <div className="form-group mb-4">
                                    <label for="customer" className="form-label"><strong>Autofill Customer</strong></label>
                                    <div>
                                        <select id="customer" className="form-select" aria-label="Default select example">
                                            <option selected value={""} disabled>Select Customer</option>
                                            <option value={"1"}>Client 1</option>
                                            <option value={"2"}>Client 2</option>
                                            <option value={"3"}>Client 3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-row row">
                                    <div className="form-group mt-3">
                                        <label htmlFor="inputBusinessName">Name</label>
                                        <input required value={businessName || ""} onChange={(e) => setBusinessName(e.target.value)} type="text" className="form-control" id="inputBusinessName" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="inputBusinessAddress1">Address Line 1</label>
                                    <input required value={businessAddressLine1 || ""} onChange={(e) => setBusinessAddress1(e.target.value)} type="text" className="form-control" id="inputBusinessAddress1" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="inputBusinessAddress2">Address Line 2</label>
                                    <input value={businessAddressLine2 || ""} onChange={(e) => setBusinessAddress2(e.target.value)} type="text" className="form-control" id="inputBusinessAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputBusinessCity">City</label>
                                        <input required value={businessCity || ""} onChange={(e) => setBusinessCity(e.target.value)} type="text" className="form-control" id="inputBusinessCity" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputBusinessState">State</label>
                                        <input required value={businessState || ""} onChange={(e) => setBusinessState(e.target.value)} type="text" className="form-control" id="inputBusinessState" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputBusinessZip">Zip</label>
                                        <input required value={businessZipCode || ""} onChange={(e) => setBusinessZipCode(e.target.value)} type="text" className="form-control" id="inputBusinessZip" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                    <div className="d-flex justify-content-center row text-center">
                        <h1>Services</h1>
                        <div className="d-flex justify-content-center row p-0 m-0 text-start">
                            <div className="col-12 col-md-6">

                                <div className="form-group mb-4">
                                    <label for="services" className="form-label"><strong>Autofill Customer</strong></label>
                                    <div>
                                        <select id="services" className="form-select" aria-label="Default select example">
                                            <option selected value={""} disabled>Select Service/Product</option>
                                            <option value={"1"}>Service 1</option>
                                            <option value={"2"}>Service 2</option>
                                            <option value={"3"}>Service 3</option>
                                        </select>
                                    </div>
                                </div>

                                <Form>
                                    <div className="form-row row">
                                        <div className="col-12">
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="serviceName">Name</label>
                                                    <input type="text" className="form-control" id="serviceName" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="price">Price</label>
                                                    <input type="number" step="1" className="form-control" id="price" placeholder="Price" />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="quantity">Quantity</label>
                                                    <input type="number" step="1" defaultValue={1} className="form-control" min="1" id="quantity" />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="description">Description</label>
                                                    <textarea rows={4} type="text" className="form-control" id="description" placeholder="Description" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex col my-4 justify-content-between">
                                            <Button variant="primary" className="col-5">Add</Button>
                                            <Button variant="secondary" className="col-5">Clear</Button>
                                        </div>
                                    </div>
                                </Form>
                            </div>

                            <div className="col-12 col-md-6 d-flex row justify-content-between">
                                <div className="col-12">

                                    <h2 className="form-name">Invoice Details</h2>
                                    <Table responsive border="solid">
                                        <thead>
                                            <tr>
                                                <th scope="col">Actions</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Description</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="align-middle"><button className="btn btn-danger" type="button">Delete</button></td>
                                                <td className="align-middle">name</td>
                                                <td className="align-middle">$10.00</td>
                                                <td className="align-middle">1</td>
                                                <td className="align-middle">Desc</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle"><button className="btn btn-danger" type="button">Delete</button></td>
                                                <td className="align-middle">name</td>
                                                <td className="align-middle">$10.00</td>
                                                <td className="align-middle">1</td>
                                                <td className="align-middle">Desc</td>
                                            </tr>
                                            <tr>
                                                <td className="align-middle"><button className="btn btn-danger" type="button">Delete</button></td>
                                                <td className="align-middle">name</td>
                                                <td className="align-middle">$10.00</td>
                                                <td className="align-middle">1</td>
                                                <td className="align-middle">Desc</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="col-12">
                                    <h3 className="form-name">Totals</h3>
                                    <Table>
                                        <tbody>
                                            <tr>
                                                <td className="left">
                                                    <strong>Subtotal</strong>
                                                </td>
                                                <td className="right">$100.00</td>
                                            </tr>
                                            <tr>
                                                <td className="left">
                                                    <strong>Tax % <input className="bg-light text-dark col-6" defaultValue={0} type="number" step="0.01" min="0" id="inputTaxRate" /></strong>
                                                </td>
                                                <td className="right">$0</td>
                                            </tr>
                                            <tr>
                                                <td className="left">
                                                    <strong>Grand Total</strong>
                                                </td>
                                                <td className="right">
                                                    <strong>$100.00</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="justify-content-end align-items-end d-flex">
                                    <div className="d-flex col my-4 justify-content-between">
                                        <Button variant="warning" className="col-5">Draft</Button>
                                        <Button type="submit" variant="success" className="col-5">Generate</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default InvoicePage;