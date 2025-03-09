import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import DeleteBusinessModal from "../Modals/DeleteBusinessModal";
import BusinessPageModal from "../Modals/BusinessPageModal";
import InvoiceForm from "../Forms/InvoiceForm";

function InvoiceTD({invoiceId})
{
    const [invoice, setInvoice] = useState({});
    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const [showInvoiceModal, setInvoiceModal] = useState(false);

    const openInvoiceModal = () => setInvoiceModal(true);
    const closeInvoiceModal = () => setInvoiceModal(false);

    useEffect(() => {
        function getBizz()
        {
            if(isLoading && token)
            {
                axios.get(import.meta.env.VITE_SERVER_API + `/Invoice/GetInvoice/${id}/${invoiceId}`, {headers: {Authorization: token}})
                    .then((res) => {
                        setInvoice(res.data);
                        setIsLoading(false);
                    })
                    .catch((err) => console.log(err))
            }
        }

        getBizz()
    }, [isLoading, token]);

    return(
        <>
            {
                isLoading
                    ? ""
                    :   <tr>
                            <td className="align-middle">

                                {
                                    invoice.isFinal
                                        ?   <>
                                                <div>
                                                    <div className="col-12 col-xl-6 mb-2">
                                                        <Link className="btn btn-primary col-12" to={`/Account/Invoice/${id}/${invoiceId}`}>View</Link>
                                                    </div>
                                                </div>
                                               {/* <div className="col-12 col-xl-6">
                                                    <button className="btn btn-outline-dark col-12" type="button">Select</button>
                                                </div> */}
                                            </>
                                        :   <>
                                                <div className="col-12 col-xl-6 mb-2">
                                                    <BusinessPageModal 
                                                        btnText="Edit"
                                                        origin={invoice}
                                                        form={InvoiceForm}
                                                        id={id}
                                                        title={"Edit Invoice " + invoice.invoiceNumber}
                                                        show={showInvoiceModal}
                                                        onHide={closeInvoiceModal}
                                                        openModal={openInvoiceModal}
                                                    />
                                                </div>
                                                <div className="col-12 col-xl-6">
                                                    <DeleteBusinessModal name={`Invoice ${invoice.invoiceNumber}`} url={`/Invoice/DeleteInvoice/${id}/`} id={invoiceId}/>
                                                </div>
                                            </>
                                }
                                
                            </td>
                            <td className="align-middle text-start">{invoice.invoiceNumber}</td>
                            <td className="align-middle text-start">{invoice.client.name}</td>
                            <td className="align-middle text-start">{invoice.client.addressLine1}</td>
                            <td className="align-middle text-start">{invoice.grand_total}</td>
                        </tr>
            }
        </>
    );
}

export default InvoiceTD;