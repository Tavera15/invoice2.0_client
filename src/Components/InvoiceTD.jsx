import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';

function InvoiceTD({invoiceId})
{
    const [invoice, setInvoice] = useState({});
    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

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
                                <div className="col-12 col-xl-6">
                                    <button className="btn btn-primary col-12 mb-2" type="button">View</button>
                                </div>

                                {/* <div className="col-12 col-xl-6">
                                    <button className="btn btn-outline-secondary col-12" type="button">Select</button>
                                </div> */}
                            </td>
                            <td className="align-middle text-start">{invoice.invoiceNumber}</td>
                            <td className="align-middle text-start">{invoice.client.name}</td>
                            <td className="align-middle text-start">{invoice.grand_total}</td>
                        </tr>
            }
        </>
    );
}

export default InvoiceTD;