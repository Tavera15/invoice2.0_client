import React, { useState } from "react";
import AccountNav from "../../Components/AccountNav";
import InvoiceBookProfile from "../../Components/Profiles/InvoiceBookProfile";
import BusinessProfile from "../../Components/Profiles/BusinessProfile";
import { Button } from "react-bootstrap";
import BusinessModal from "../../Modals/BusinessModal";

function DashboardPage()
{
    const [showModal, setShowModal] = useState(false);

    return(
        <div className="d-flex">
            <AccountNav />
            
            <div className="col-md-9 p-4 min-vh-100 work-area-base">
                    
                    <h1 className="display-1">Dashboard</h1>

                    <div className="mb-4">
                        <hr />
                        <div className="d-flex col justify-content-between align-items-center">
                            <h2 className="text-start m-0">Invoice Books</h2>
                            <Button variant="info">Create New</Button>
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

                            <Button onClick={() => setShowModal(true)} variant="info">Create New</Button>
                            <BusinessModal show={showModal} onHide={() => setShowModal(false)} />
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