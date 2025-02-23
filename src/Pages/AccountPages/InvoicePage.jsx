import React, {useState} from "react";
import AccountNav from "../../Components/AccountNav";
import { Button, Form, Table } from "react-bootstrap";
import InvoiceForm from "../../Forms/InvoiceForm";

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

            <InvoiceForm />
        </div>
    );
}

export default InvoicePage;