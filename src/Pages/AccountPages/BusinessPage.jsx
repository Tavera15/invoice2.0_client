import React from "react";
import AccountNav from "../../Components/AccountNav";
import BusinessForm from "../../Forms/BusinessForm";
import CustomerProfile from "../../Components/Profiles/CustomerProfile";
import ProductServiceProfile from "../../Components/Profiles/ProductServiceProfile";
import { Button } from "react-bootstrap";

function BusinessPage()
{
    return(
        <div className="d-flex">
            <AccountNav />

            <div className="col-md-9 p-4 min-vh-100 work-area-base">
                <h1 className="display-1">Business</h1>
                
                <hr />
                <div className="d-flex justify-content-center row text-start">
                    <h1>Business Info</h1>
                    <BusinessForm />
                </div>

                <hr />
                <div>  
                    <div className="d-flex col justify-content-between align-items-center">
                        <h1 className="text-start m-0">Customers</h1>
                        <Button variant="info">Create New</Button>
                    </div>              
                    <div className="d-flex col flex-wrap work-area-base" 
                        style={{
                            "height": "0",
                            "minHeight": "65vh"
                        }}>
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                        <CustomerProfile />
                    </div>
                </div>

                <hr />
                <div>  
                    <div className="d-flex col justify-content-between align-items-center">
                        <h1 className="text-start m-0">Services</h1>
                        <Button variant="info">Create New</Button>
                    </div> 
                    <div className="d-flex col flex-wrap work-area-base" 
                        style={{
                            "height": "0",
                            "minHeight": "65vh"
                        }}>
                        <ProductServiceProfile />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BusinessPage;