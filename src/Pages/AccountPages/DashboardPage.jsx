import React, { useState } from "react";
import AccountNav from "../../Components/AccountNav";
import InvoiceBookProfile from "../../Components/Profiles/InvoiceBookProfile";
import BusinessProfile from "../../Components/Profiles/BusinessProfile";
import BusinessPageModal from "../../Modals/BusinessPageModal";
import BusinessForm from "../../Forms/BusinessForm";
import InvoiceBookForm from "../../Forms/InvoiceBookForm";

function DashboardPage()
{
    const [showInvoiceBookModal, setShowInvoiceBookModal] = useState(false);
    const [showBusinessModal, setShowBusinessModal] = useState(false);

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
                            <InvoiceBookProfile />
                            <InvoiceBookProfile />
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
                            <BusinessProfile />
                            <BusinessProfile />
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default DashboardPage;