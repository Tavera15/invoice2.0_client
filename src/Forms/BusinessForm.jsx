import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BusinessForm()
{
    const [name, setName]                   = useState("");
    const [email, setEmail]                 = useState("");
    const [phone, setPhone]                 = useState("");
    const [addressLine1, setAddress1]       = useState("");
    const [addressLine2, setAddress2]       = useState("");
    const [city, setCity]                   = useState("");
    const [state, setState]                 = useState("");
    const [zipCode, setZipCode]             = useState("");

    return(
        <Form className="col-12 col-md-10 col-lg-6" onSubmit={(e) => SubmitOrder(e)}>
            <div className="form-row row">
                <div className="form-group col-md-6 mt-3">
                    <label htmlFor="inputName">Name</label>
                    <input required value={name || ""} onChange={(e) => setName(e.target.value)} type="text" className="form-control" id="inputName" placeholder="Name" />
                </div>
                
                <div className="form-group col-md-6 mt-3">
                    <label htmlFor="inputPhone">Telephone</label>
                    <input required value={phone || ""} onChange={(e) => setPhone(e.target.value)} type="telephone" className="form-control" id="inputPhone" placeholder="123-456-7890" />
                </div>
            </div>
            <div className="form-row row">
                <div className="form-group mt-3">
                    <label htmlFor="inputEmail">Email</label>
                    <input required value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="inputEmail" placeholder="Email" />
                </div>
            </div>
            <div className="form-group mt-3 mt-3">
                <label htmlFor="inputAddress1">Address Line 1</label>
                <input required value={addressLine1 || ""} onChange={(e) => setAddress1(e.target.value)} type="text" className="form-control" id="inputAddress1" placeholder="1234 Main St" />
            </div>
            <div className="form-group mt-3 mt-3">
                <label htmlFor="inputAddress2">Address Line 2</label>
                <input value={addressLine2 || ""} onChange={(e) => setAddress2(e.target.value)} type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
            </div>
            <div className="form-row row">
                <div className="form-group col-md-4 mt-3">
                    <label htmlFor="inputCity">City</label>
                    <input required value={city || ""} onChange={(e) => setCity(e.target.value)} type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4 mt-3">
                    <label htmlFor="inputState">State</label>
                    <input required value={state || ""} onChange={(e) => setState(e.target.value)} type="text" className="form-control" id="inputState" />
                </div>
                <div className="form-group col-md-4 mt-3">
                    <label htmlFor="inputZip">Zip</label>
                    <input required value={zipCode || ""} onChange={(e) => setZipCode(e.target.value)} type="text" className="form-control" id="inputZip" />
                </div>
            <Button className="my-4" type="submit" variant="success">Save</Button>
            </div>
        </Form>
    );
}

export default BusinessForm;