import React, {useState, useEffect, useRef} from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from 'react-router-dom';
import FinalizedInvoice from "../../Forms/FinalizedInvoice";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

function ExternalInvoicePage()
{
    const [invoice, setInvoice] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const {id, invoiceid, auth} = useParams();

    const navigate = useNavigate();
    const contentRef = useRef();

    const reactToPrintFn = useReactToPrint({ contentRef, 
        documentTitle: `Invoice ${invoice.invoiceNumber}`, 
    });

    useEffect(() => {
        if(isLoading)
        {
            axios.get(import.meta.env.VITE_SERVER_API + `/Invoice/GetInvoiceExternal/${id}/${invoiceid}/${auth}`)
                .then((res) => {
                    if(!res.data.isFinal)
                    {
                        navigate("/Account/InvoiceBook/" + id);
                        return
                    }
                    setInvoice(res.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        }

    }, [isLoading]);

    return(
        <div className="d-flex justify-content-center">
            <div className="col-md-9 p-4 min-vh-100 work-area-base">
                <h1 className="display-1">Invoice</h1>
                <hr />
                {
                    isLoading
                        ?   ""
                        :   <div>
                                <Button onClick={() => reactToPrintFn()} variant="outline-dark" className="mb-4">Download PDF</Button>
                                <div className="col-12" ref={contentRef}>
                                    <FinalizedInvoice invoice={invoice}/>
                                </div>
                            </div>
                }
            </div>
        </div>
    )
}

export default ExternalInvoicePage;