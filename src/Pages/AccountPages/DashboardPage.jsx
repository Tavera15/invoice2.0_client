import React, { useEffect, useState } from "react";
import AccountNav from "../../Components/AccountNav";
import InvoiceBookProfile from "../../Components/Profiles/InvoiceBookProfile";
import BusinessProfile from "../../Components/Profiles/BusinessProfile";
import BusinessPageModal from "../../Modals/BusinessPageModal";
import BusinessForm from "../../Forms/BusinessForm";
import InvoiceBookForm from "../../Forms/InvoiceBookForm";
import { useSelector } from "react-redux";
import axios from "axios";

function DashboardPage()
{
    const token = useSelector(state => state.token.value);
    const isLoading = useSelector(state => state.token.isLoading)

    const [showInvoiceBookModal, setShowInvoiceBookModal] = useState(false);
    const [showBusinessModal, setShowBusinessModal] = useState(false);

    const [books, setBooks] = useState([]);
    const [businesses, setBusinesses] = useState([]);

    useEffect(() => {
        async function getUser()
        {
            if(isLoading || !token) {return;}

            await axios.get(import.meta.env.VITE_SERVER_API + "/User/GetUser", {headers: {Authorization: token}})
                .then((res) => {
                setBooks(res.data.invoiceBooks);
                    setBusinesses(res.data.businesses);
                })
                .catch((err) => console.log(err))
        }

        getUser();
    },[isLoading])

    return(
        <div className="d-flex">
            <AccountNav />
            
            <div className="col-md-9 p-4 min-vh-100 work-area-base">
                    
                <h1 className="display-1">Dashboard</h1>

                <div className="mb-4">
                    <hr />
                    <div className="d-flex col justify-content-between align-items-center">
                        <h2 className="text-start m-0">Invoice Books</h2>
                        <BusinessPageModal
                            title="Create New Invoice Book"
                            openModal={() => setShowInvoiceBookModal(true)}
                            form={InvoiceBookForm} 
                            show={showInvoiceBookModal} 
                            onHide={() => setShowInvoiceBookModal(false)} 
                        />
                    </div>
                    <div className="d-flex col flex-wrap container">
                        {
                            books.map((b) => {
                                return <InvoiceBookProfile id={b} key={b} />
                            })
                        }
                    </div>
                </div>

                <div>
                    <hr />
                    <div className="d-flex col justify-content-between align-items-center">
                        <h2 className="text-start m-0">Businesses</h2>

                        <BusinessPageModal
                            title="Create New Business"
                            openModal={() => setShowBusinessModal(true)}
                            form={BusinessForm} 
                            show={showBusinessModal} 
                            onHide={() => setShowBusinessModal(false)} 
                        />
                    </div>
                    <div className="d-flex col flex-wrap container">
                        {
                            businesses.map((b) => {
                                return <BusinessProfile id={b} key={b} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;