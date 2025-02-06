import React, {useState} from "react";
import AccountNav from "../../Components/AccountNav";
import CustomerProfile from "../../Components/Profiles/CustomerProfile";
import ProductServiceProfile from "../../Components/Profiles/ProductServiceProfile";
import { Button, Form } from "react-bootstrap";

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

            <div className="col-md-9 p-4 min-vh-100 work-area-base">
                <h1 className="display-1">Invoices</h1>
                
                <hr />
                <div className="d-flex justify-content-center row text-start">
                    <h1>Business Info</h1>
                    <div className="col-12 col-md-6">
                        <div className="form-row row">
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputBusinessName">Name</label>
                                <input required value={businessName || ""} onChange={(e) => setBusinessName(e.target.value)} type="text" className="form-control" id="inputBusinessName" placeholder="Name" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputBusinessEmail">Email</label>
                                <input required value={businessEmail} onChange={(e) => setBusinessEmail(e.target.value)} type="email" className="form-control" id="inputBusinessEmail" placeholder="Email" />
                            </div>
                            <div className="form-group col-md-4 mt-3">
                                <label htmlFor="inputBusinessPhone">Telephone</label>
                                <input required value={businessPhone || ""} onChange={(e) => setBusinessPhone(e.target.value)} type="telephone" className="form-control" id="inputBusinessPhone" placeholder="123-456-7890" />
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
                    <div>  
                        <hr />

                        <div className="d-flex justify-content-center row text-start">

                            <h1>Client Info</h1>
                            <div className="col-12 col-md-6">
                                <div className="form-row row">
                                    <div className="form-group mt-3 mt-3">
                                        <label htmlFor="inputBusinessName">Name</label>
                                        <input required value={businessName || ""} onChange={(e) => setBusinessName(e.target.value)} type="text" className="form-control" id="inputBusinessName" placeholder="Name" />
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InvoicePage;