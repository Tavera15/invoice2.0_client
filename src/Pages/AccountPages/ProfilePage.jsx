import React, { useEffect, useState } from "react";
import AccountNav from "../../Components/AccountNav";
import { useSelector } from "react-redux";
import axios from "axios";

function ProfilePage()
{
    const token = useSelector(state => state.token.value);
    const [userId, setUserId] = useState("");

    useEffect(() => {
        if(token)
        {
            axios.get(import.meta.env.VITE_SERVER_API + `/User/GetUser/`, {headers: {Authorization: token}})
                .then((res) => setUserId(res.data._id))
        }
    },[token])

    return(
        <div className="d-flex">
            <AccountNav />
            <div className="col-md-9 p-4 min-vh-100 work-area-base border">
                <div className="d-flex row justify-content-center">
                    <h1 className="display-1">Profile</h1>
                    <hr />
                    <div className="col-12 col-md-10 col-lg-6">
                        <div className="form-group mt-3 mt-3">
                            <label htmlFor="inputUserID">User_ID</label>
                            <input id="inputUserID" required value={userId} readOnly className="form-control" />
                        </div>
                        <hr />
                        <h1>API Calls</h1>
                        <div className="form-group mt-3 mt-3">
                            <label htmlFor="GetInvoice">GET Invoice</label>
                            <input id="GetInvoice" required value={`${import.meta.env.VITE_SERVER_API}/Invoice/GetInvoiceExternal/{InvoiceBook_ID}/{Invoice_ID}/{User_ID}`} readOnly className="form-control" />
                            <textarea className="form-control" rows={10} readOnly value={
`{
    "_id": "67cff23904a93670a999470d",
    "invoiceBook": "6795eb168b6bd44173903528",
    "business": {
        "name": "Business",
        "addressLine1": "BizzLine1",
        "addressLine2": "BizzLine2",
        "city": "BizzCity",
        "state": "BizzST",
        "zip": "BizzZip",
        "email": "name@bizz.com",
        "phone": "1234567890"
    },
    "client": {
        "name": "Client",
        "addressLine1": "ClientLine1",
        "addressLine2": "ClientLine2",
        "city": "ClientCity",
        "state": "ClientST",
        "zip": "ClientZip"
    },
    "isFinal": true,
    "customs": "[{\"name\":\"Monthy pool service\",\"price\":\"180.00\",\"description\":\"January 2025\",\"quantity\":\"1\"}]",
    "invoiceNumber": "19020",
    "logo": "https://raw.githubusercontent.com/Tavera15/tavera-biz-sel/refs/heads/main/src/assets/TaveraLogo.png",
    "subtotal": "180.00",
    "taxes": "0.00",
    "grand_total": "180.00",
    "external_link": "localhost:5173/Account/InvoiceExternal/6795eb168b6bd44173903528/67cff23904a93670a999470d/6795eaa18b6bd44173903525",
    "__v": 0
}`}>
                            </textarea>
                        </div>
                        <div className="form-group mt-3 mt-4">
                            <label htmlFor="POST_NewInvoice">POST NewInvoice</label>
                            <input id="POST_NewInvoice" required value={`${import.meta.env.VITE_SERVER_API}/Invoice/CreateNewInvoiceExternal/{InvoiceBook_ID}/{User_ID}`} readOnly className="form-control" />
                            <textarea className="form-control" rows={10} readOnly value={
`{
    "business": {
        "name": "Business",
        "addressLine1": "BizzLine1",
        "addressLine2": "BizzLine2",
        "city": "BizzCity",
        "state": "BizzST",
        "zip": "BizzZip",
        "email": "name@bizz.com",
        "phone": "1234567890"
    },
    "client": {
        "name": "Client",
        "addressLine1": "ClientLine1",
        "addressLine2": "ClientLine2",
        "city": "ClientCity",
        "state": "ClientST",
        "zip": "ClientZip"
    },
    "customs": [
        {
            "name": "Monthy pool service",
            "price": "180.00",
            "description": "January 2025",
            "quantity": "1"
        }
    ],
    "subtotal": "180.00",
    "taxes": "0.00",
    "grand_total": "180.00"
}`}>
                            </textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;