import axios from "axios";
import React, {useEffect, useState} from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function InvoiceForm({id, origin})
{
    const navigate = useNavigate();
    const token = useSelector(state => state.token.value);

    const [businessName, setBusinessName]                   = useState("");
    const [businessEmail, setBusinessEmail]                 = useState("");
    const [businessPhone, setBusinessPhone]                 = useState("");
    const [businessAddressLine1, setBusinessAddress1]       = useState("");
    const [businessAddressLine2, setBusinessAddress2]       = useState("");
    const [businessCity, setBusinessCity]                   = useState("");
    const [businessState, setBusinessState]                 = useState("");
    const [businessZipCode, setBusinessZipCode]             = useState("");
    const [logo, setLogo]                                   = useState("");
    
    const [clientName, setClientName]                       = useState("");
    const [clientAddressLine1, setClientAddress1]           = useState("");
    const [clientAddressLine2, setClientAddress2]           = useState("");
    const [clientCity, setClientCity]                       = useState("");
    const [clientState, setClientState]                     = useState("");
    const [clientZipCode, setClientZipCode]                 = useState("");

    const [serviceName, setServiceName]                     = useState("");
    const [servicePrice, setServicePrice]                   = useState("0");
    const [serviceDesc, setServiceDesc]                     = useState("");
    const [serviceQty, setServiceQty]                       = useState(1);

    const [services, setServices]                           = useState([]);
    const [subtotal, setSubtotal]                           = useState("");
    const [tax, setTax]                                     = useState(0);
    const [Total, setTotal]                                 = useState("");

    const [allBizz, setAllBizz]                             = useState([]);
    const [allBizCust, setBizCust]                          = useState([]);
    const [allProd, setAllProd]                             = useState([]);
    
    const [selectedBiz, onSelectBiz]                        = useState("");
    const [selectedCust, onSelectCust]                      = useState("");
    const [selectedProd, onSelectProd]                      = useState("");

    const validateValue = (val, min) => val < min ? min : val;

    useEffect(() => {
        axios.get(import.meta.env.VITE_SERVER_API + "/Business/GetUserBusinesses/", {headers: {Authorization: token}})
            .then((res) => {                
                for(let i = 0; i < res.data.length; i++)
                {
                    axios.get(import.meta.env.VITE_SERVER_API + "/Business/GetBusiness/" + res.data[i], {headers: {Authorization: token}})
                        .then((biz) => setAllBizz(prev => [...prev, biz.data]))
                }
            })
    },[])

    useEffect(() => {
        if(selectedBiz)
        {
            const target = allBizz.find(b => {return b._id === selectedBiz});

            setBusinessName(target.name)
            setBusinessEmail(target.email)
            setBusinessPhone(target.phone)
            setBusinessAddress1(target.addressLine1)
            setBusinessAddress2(target.addressLine2)
            setBusinessCity(target.city)
            setBusinessState(target.state)
            setBusinessZipCode(target.zip)

            axios.get(import.meta.env.VITE_SERVER_API + "/Business/GetAllBusinessCustomers/" + selectedBiz, {headers: {Authorization: token}})
                .then((res) => {                
                    for(let i = 0; i < res.data.length; i++)
                    {
                        axios.get(import.meta.env.VITE_SERVER_API + `/Business/GetSingleBusinessCustomer/${selectedBiz}/${res.data[i]._id}`, {headers: {Authorization: token}})
                            .then((cust) => setBizCust(prev => [...prev, cust.data]))
                    }
                }
            )
            
            axios.get(import.meta.env.VITE_SERVER_API + "/Business/GetAllBusinessProductServices/" + selectedBiz, {headers: {Authorization: token}})
                .then((res) => {                
                    for(let i = 0; i < res.data.length; i++)
                    {
                        axios.get(import.meta.env.VITE_SERVER_API + `/Business/GetSingleBusinessProductService/${selectedBiz}/${res.data[i]._id}`, {headers: {Authorization: token}})
                            .then((prod) => setAllProd(prev => [...prev, prod.data]))
                    }
                }
            )
        }
    },[selectedBiz])

    useEffect(() => 
    {
        if(selectedCust)
        {
            const target = allBizCust.find(b => {return b._id === selectedCust});
            console.log(target)

            setClientName(target.name)
            setClientAddress1(target.addressLine1)
            setClientAddress2(target.addressLine2)
            setClientCity(target.city)
            setClientState(target.state)
            setClientZipCode(target.zip)
        }
    }, [selectedCust])

    useEffect(() =>
    {
        if(selectedProd)
        {
            const target = allProd.find(b => {return b._id === selectedProd});

            setServiceName(target.name)
            setServicePrice(target.price)
            setServiceDesc(target.description)
        }
    }, [selectedProd])

    useEffect(() => {
        if(origin)
        {
            setBusinessName(origin.business.name)
            setBusinessEmail(origin.business.email)
            setBusinessPhone(origin.business.phone)
            setBusinessAddress1(origin.business.addressLine1)
            setBusinessAddress2(origin.business.addressLine2)
            setBusinessCity(origin.business.city)
            setBusinessState(origin.business.state)
            setBusinessZipCode(origin.business.zip)
            setClientName(origin.client.name)
            setClientAddress1(origin.client.addressLine1)
            setClientAddress2(origin.client.addressLine2)
            setClientCity(origin.client.city)
            setClientState(origin.client.state)
            setClientZipCode(origin.client.zip)
            setServices(JSON.parse(origin.customs))
            setSubtotal(Number.parseFloat(origin.subtotal))
            setTax(Number.parseFloat(origin.subtotal) === Number.parseFloat(origin.grand_total) ? 0 : (((Number.parseFloat(origin.grand_total) / Number.parseFloat(origin.subtotal)) - 1) * 100).toFixed(2) )
            setTotal(Number.parseFloat(origin.grand_total))
        }
    },[origin])

    function submitForm(e, isFinal)
    {
        e.preventDefault();

        const data = {
            business: {
                name: businessName, 
                email: businessEmail, 
                phone: businessPhone, 
                addressLine1: businessAddressLine1,
                addressLine2: businessAddressLine2,
                city: businessCity,
                state: businessState,
                zip: businessZipCode
            },
            client: {
                name: clientName, 
                addressLine1: clientAddressLine1,
                addressLine2: clientAddressLine2,
                city: clientCity,
                state: clientState,
                zip: clientZipCode
            },
            customs: services,
            subtotal: subtotal,
            taxes: ((subtotal * tax) / 100).toFixed(2),
            grand_total: Total,
            isFinal: isFinal
        }

        if(!origin)
        {
            axios.post(import.meta.env.VITE_SERVER_API + "/Invoice/CreateNewInvoice/" + id, data, {headers: {Authorization: token}})
                .then(() => {
                    navigate("/Account/InvoiceBook/" + id)
                    location.reload();
                })
                .catch((err) => console.log(err))
        }
        else
        {
            axios.put(import.meta.env.VITE_SERVER_API + `/Invoice/UpdateInvoice/${id}/${origin._id}`, data, {headers: {Authorization: token}})
                .then(() => {
                    navigate("/Account/InvoiceBook/" + id)
                    location.reload();
                })
                .catch((err) => console.log(err))
        }
    }

    function onAddService()
    {
        if(serviceName.trim() === "")
        {
            alert("Name cannot be empty");
            return;
        }

        setServices(prev => [...prev, 
            {name: serviceName,
            price: Number.parseFloat(servicePrice).toFixed(2),
            description: serviceDesc,
            quantity: serviceQty.toString()}]);

        onClearService();
    }

    function onClearService()
    {
        setServiceName("");
        setServicePrice(0);
        setServiceDesc("");
        setServiceQty(1);
    }

    function removeService(e, name)
    {
        let res = [];
        let isRemoved = false;

        for(let i = 0; i < services.length; i++)
        {
            if(services[i].name + i === name && !isRemoved)
            {
                isRemoved = true;
                continue;
            }

            res.push(services[i])
        }

        setServices(res);
    }

    useEffect(() => {
        let t = 0.00;

        for(let i = 0; i < services.length; i++)
        {
            const target = services[i];
            t += (Number.parseFloat(target.price) * Number.parseFloat(target.quantity))
        }

        setSubtotal(t.toFixed(2));
        setTotal((t + ((t * tax) / 100)).toFixed(2));
    }, [services, tax, Total, origin])

    return(
        <Form onSubmit={(e) => submitForm(e, true)} className="col-12 p-4 min-vh-100 work-area-base">
                <h1 className="display-1 text-center">Invoice</h1>
                
                <hr />
                <div className="d-flex justify-content-center row">
                    <div className="col-12 d-flex row align-items-start">
                        <div className="d-flex col-12 col-lg-6 justify-content-center row text-center p-0 m-0 mb-4">
                            <h1>Business Info</h1>
                            <div className="col-12">
                                <div className="form-group mb-4">
                                    <label htmlFor="business" className="form-label"><strong>Autofill Business</strong></label>
                                    <div>
                                        <select onChange={(e) => onSelectBiz(e.target.value)} defaultValue={""} id="business" className="form-select" aria-label="Default select example">
                                            <option value={""} disabled>Select Business</option>
                                            {
                                                allBizz.map((b) => <option key={b._id} value={b._id}>{b.name}</option>)
                                            }
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
                        <div className="d-flex col-12 col-lg-6 justify-content-center align-items-start row text-center p-0 m-0 mb-4">
                            <h1>Client Info</h1>
                            <div className="col-12">
                                <div className="form-group mb-4">
                                    {
                                        allBizCust.length < 1
                                        ? ""
                                        :   <div>
                                                    <label htmlFor="customer" className="form-label"><strong>Autofill Customer</strong></label>
                                                    <select onChange={(e) => onSelectCust(e.target.value)} id="customer" defaultValue={""} className="form-select" aria-label="Default select example">
                                                        <option value={""} disabled>Select Customer</option>
                                                        {
                                                            allBizCust.map((c) => <option key={c._id} value={c._id}>{c.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                    }
                                    
                                </div>
                                <div className="form-row row">
                                    <div className="form-group mt-3">
                                        <label htmlFor="inputClientName">Name</label>
                                        <input required value={clientName || ""} onChange={(e) => setClientName(e.target.value)} type="text" className="form-control" id="inputClientName" placeholder="Name" />
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="inputClientAddress1">Address Line 1</label>
                                    <input value={clientAddressLine1 || ""} onChange={(e) => setClientAddress1(e.target.value)} type="text" className="form-control" id="inputClientAddress1" placeholder="1234 Main St" />
                                </div>
                                <div className="form-group mt-3">
                                    <label htmlFor="inputClientAddress2">Address Line 2</label>
                                    <input value={clientAddressLine2 || ""} onChange={(e) => setClientAddress2(e.target.value)} type="text" className="form-control" id="inputClientAddress2" placeholder="Apartment, studio, or floor" />
                                </div>
                                <div className="form-row row">
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputClientCity">City</label>
                                        <input value={clientCity || ""} onChange={(e) => setClientCity(e.target.value)} type="text" className="form-control" id="inputClientCity" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputClientState">State</label>
                                        <input value={clientState || ""} onChange={(e) => setClientState(e.target.value)} type="text" className="form-control" id="inputClientState" />
                                    </div>
                                    <div className="form-group col-md-4 mt-3">
                                        <label htmlFor="inputClientZip">Zip</label>
                                        <input value={clientZipCode || ""} onChange={(e) => setClientZipCode(e.target.value)} type="text" className="form-control" id="inputClientZip" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                    <div className="d-flex justify-content-center row text-center">
                        <div className="d-flex justify-content-center row p-0 m-0 text-start">
                            <div className="col-12 col-lg-6">
                                <h1>Services</h1>

                                <div className="form-group mb-4">
                                    {
                                        allProd.length < 1
                                        ? ""
                                        :   <div>
                                                    <label htmlFor="services" className="form-label"><strong>Autofill Services/Product</strong></label>
                                                    <select onChange={(e) => onSelectProd(e.target.value)} id="services" defaultValue={""} className="form-select" aria-label="Default select example">
                                                        <option value={""} disabled>Select Service/Product</option>
                                                        {
                                                            allProd.map((p) => <option key={p._id} value={p._id}>{p.name}</option>)
                                                        }
                                                    </select>
                                                </div>
                                    }
                                </div>

                                <div role="form">
                                    <div className="form-row row">
                                        <div className="col-12">
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="serviceName">Name</label>
                                                    <input value={serviceName} onChange={(e) => setServiceName(e.target.value)} type="text" className="form-control" id="serviceName" placeholder="Name" />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="price">Price</label>
                                                    <input type="number" step="0.01" value={servicePrice} onChange={(e) => setServicePrice(validateValue(e.target.value, 0))} min={0} className="form-control" id="price" placeholder="Price" />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="quantity">Quantity</label>
                                                    <input type="number" step="1" value={serviceQty} onChange={(e) => setServiceQty(validateValue(e.target.value, 1))} className="form-control" min="1" id="quantity" />
                                                </div>
                                            </div>
                                            <div className="form-row row">
                                                <div className="form-group mt-3">
                                                    <label htmlFor="description">Description</label>
                                                    <textarea value={serviceDesc} onChange={(e) => setServiceDesc(e.target.value)} rows={4} type="text" className="form-control" id="description" placeholder="Description" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex col my-4 justify-content-between">
                                            <Button onClick={() => onAddService()} variant="primary" className="col-5">Add</Button>
                                            <Button onClick={() => onClearService()} variant="secondary" className="col-5">Clear</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-lg-6 d-flex row justify-content-between">
                                <div className="col-12">

                                    <h1 className="form-name">Invoice Details</h1>
                                    <Table responsive border="solid">
                                        <thead>
                                            <tr>
                                                <th scope="col">Actions</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Quantity</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services.map((s, i) => {
                                                    return  <tr key={s.name + i}>
                                                                <td className="align-middle"><button onClick={(e) => removeService(e, s.name + i)} className="btn btn-danger" type="button">Delete</button></td>
                                                                <td className="align-middle">{s.name}</td>
                                                                <td className="align-middle">${s.price}</td>
                                                                <td className="align-middle">{s.quantity}</td>
                                                            </tr>
                                                })
                                            }
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
                                                <td className="right">${subtotal}</td>
                                            </tr>
                                            <tr>
                                                <td className="left">
                                                    <strong>Tax % <input className="bg-light text-dark col-6" value={tax} onChange={(e) => setTax(e.target.value)} type="number" step="0.01" min="0" id="inputTaxRate" /></strong>
                                                </td>
                                                <td className="right">${((subtotal * tax) / 100).toFixed(2)}</td>
                                            </tr>
                                            <tr>
                                                <td className="left">
                                                    <strong>Grand Total</strong>
                                                </td>
                                                <td className="right">
                                                    <strong>${Total}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="justify-content-end align-items-end d-flex">
                                    <div className="d-flex col my-4 justify-content-between">
                                        <Button onClick={(e) => submitForm(e, false)} variant="warning" className="col-5">Draft</Button>
                                        <Button type="submit" variant="success" className="col-5">Generate</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </Form>
    )
}

export default InvoiceForm;