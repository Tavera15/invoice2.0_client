import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import { useSelector } from "react-redux";

function BusinessForm(props)
{
    const token = useSelector(state => state.token.value);

    const [name, setName]                   = useState("");
    const [email, setEmail]                 = useState("");
    const [phone, setPhone]                 = useState("");
    const [addressLine1, setAddress1]       = useState("");
    const [addressLine2, setAddress2]       = useState("");
    const [city, setCity]                   = useState("");
    const [state, setState]                 = useState("");
    const [zip, setZipCode]                 = useState("");

    useEffect(() => {
        if(props.bizz)
        {
            setName(props.bizz.name);
            setEmail(props.bizz.email);
            setPhone(props.bizz.phone);
            setAddress1(props.bizz.addressLine1);
            setAddress2(props.bizz.addressLine2);
            setCity(props.bizz.city);
            setState(props.bizz.state);
            setZipCode(props.bizz.zip);
        }
    }, [])

    function submitBusiness(e)
    {
        e.preventDefault();

        const data = {
            name,
            email,
            phone,
            addressLine1,
            addressLine2,
            city,
            state,
            zip
        }

        if(props.bizz)
        {
            axios.put(import.meta.env.VITE_SERVER_API + "/Business/UpdateBusiness/" + props.bizz._id, data, {headers: {Authorization: token}})
                .then(() => location.reload())
                .catch((err) => console.log(err))
        }
        else
        {
            axios.post(import.meta.env.VITE_SERVER_API + "/Business/CreateNewBusiness/", data, {headers: {Authorization: token}})
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
            <Form className="col-12 col-md-10 col-lg-6" onSubmit={(e) => submitBusiness(e)}>
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
                        <input required value={zip || ""} onChange={(e) => setZipCode(e.target.value)} type="text" className="form-control" id="inputZip" />
                    </div>

                    <div>
                        <Button className="border col-12 my-4" type="submit" variant="success">Save</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

export default BusinessForm;