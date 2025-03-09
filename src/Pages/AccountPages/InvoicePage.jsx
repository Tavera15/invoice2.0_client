import React, {useState, useEffect, useRef} from "react";
import AccountNav from "../../Components/AccountNav";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';
import FinalizedInvoice from "../../Forms/FinalizedInvoice";
import { useReactToPrint } from "react-to-print";

function InvoicePage()
{
    const [invoice, setInvoice] = useState({});

    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);
    const {id, invoiceid} = useParams();

    const contentRef = useRef();
    const reactToPrintFn = useReactToPrint({ contentRef, 
        documentTitle: `Invoice ${invoice.invoiceNumber}`, 
    });

    useEffect(() => {
        if(isLoading && token)
        {
            axios.get(import.meta.env.VITE_SERVER_API + `/Invoice/GetInvoice/${id}/${invoiceid}`, {headers: {Authorization: token}})
                .then((res) => {
                    setInvoice(res.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        }

    }, [isLoading, token]);


    return(
        <div className="d-flex">
            <AccountNav />

            <div className="col-md-9 p-4 min-vh-100 work-area-base">
                <h1 className="display-1">Invoice</h1>
                <hr />
                {
                    isLoading
                        ?   ""
                        :   <div>
                                <Button onClick={() => reactToPrintFn()} className="mb-4">Print</Button>
                                <div className="col-12" ref={contentRef}>
                                    <FinalizedInvoice invoice={invoice}/>
                                </div>
                            </div>
                }
            </div>

        </div>
    );
}

export default InvoicePage;