import React, {useState, useEffect} from "react";
import AccountNav from "../../Components/AccountNav";
import { Table } from "react-bootstrap";
import InvoiceBookForm from "../../Forms/InvoiceBookForm";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';
import InvoiceTD from "../../Components/InvoiceTD";
import BusinessPageModal from "../../Modals/BusinessPageModal";
import InvoiceForm from "../../Forms/InvoiceForm";

function InvoiceBookManager()
{
    const [book, setBook] = useState({});
    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const [showInvoiceBookModal, setShowInvoiceBookModal] = useState(false);
    

    useEffect(() => {
        function getBook()
        {
            if(isLoading && token)
            {
                axios.get(import.meta.env.VITE_SERVER_API + "/Invoice/GetInvoiceBook/" + id, {headers: {Authorization: token}})
                    .then((res) => {
                        setBook(res.data);
                        setIsLoading(false);
                    })
                    .catch((err) => console.log(err))
            }
        }

        getBook()
    }, [isLoading, token]);

    return(
        <div className="d-flex">
            <AccountNav />
            {
                isLoading
                    ?   <div className="col-md-9 p-4 min-vh-100 work-area-base"></div>
                    :   <div className="col-md-9 p-4 min-vh-100 work-area-base">
                            <h1 className="display-1">Invoice Book</h1>
                            <hr />
                            
                            <div className="d-flex justify-content-center row text-start">
                                <h1 className="text-start m-0">Invoice Book Info</h1>
                                <InvoiceBookForm origin={book} />
                            </div>
            
                            <hr />
                            <div className="d-flex justify-content-center row text-start">
                                <div className="d-flex col justify-content-between align-items-center my-2">
                                    <h1>Invoices</h1>
                                    <BusinessPageModal
                                        title="Create New Invoice"
                                        openModal={() => setShowInvoiceBookModal(true)}
                                        form={InvoiceForm}
                                        id={id} 
                                        show={showInvoiceBookModal} 
                                        onHide={() => setShowInvoiceBookModal(false)}
                                        btnText="Create New"
                                    />
                                </div>
                                <div className="d-flex col flex-wrap work-area-base col-12 justify-content-between " 
                                    style={{
                                        "height": "100%",
                                        "maxHeight": "65vh"
                                    }}>
            
                                    <div className="col-12">
                                        <Table responsive border="solid">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-start">Actions</th>
                                                    <th scope="col" className="text-start">Invoice #</th>
                                                    <th scope="col" className="text-start">Customer Name</th>
                                                    <th scope="col" className="text-start">Address Line 1</th>
                                                    <th scope="col" className="text-start">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    book.invoices.reverse().map((i) => {
                                                        return <InvoiceTD invoiceId={i} key={i}/>
                                                    })
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
            }
        </div>
    );
}

export default InvoiceBookManager;