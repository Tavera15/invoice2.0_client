import React, { useState, useEffect } from "react";
import AccountNav from "../../Components/AccountNav";
import BusinessForm from "../../Forms/BusinessForm";
import CustomerProfile from "../../Components/Profiles/CustomerProfile";
import ProductServiceProfile from "../../Components/Profiles/ProductServiceProfile";
import BusinessPageModal from "../../Modals/BusinessPageModal";
import ServiceForm from "../../Forms/ServiceForm";
import CustomerForm from "../../Forms/CustomerForm";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';

function BusinessPage()
{
    const [showCustomerModal, setCustomerModal] = useState(false);
    const [showServiceModal, setServiceModal] = useState(false);
    const [bizz, setBiz] = useState({});

    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();


    useEffect(() => {
        function getBizz()
        {
            if(isLoading && token)
            {
                axios.get(import.meta.env.VITE_SERVER_API + "/Business/GetBusiness/" + id, {headers: {Authorization: token}})
                    .then((res) => {
                        setBiz(res.data);
                        setIsLoading(false);
                    })
                    .catch((err) => console.log(err))
            }
        }

        getBizz()
    }, [isLoading, token]);

    return(
        <div className="d-flex">
            <AccountNav />
            {
                isLoading
                    ?   <div className="col-md-9 p-4 min-vh-100 work-area-base"></div>
                    :   <div className="col-md-9 p-4 min-vh-100 work-area-base">
                
                            <h1 className="display-1">Business</h1>
                            
                            <hr />
                            <div className="d-flex justify-content-center row text-start">
                                <h1>Business Info</h1>
                                <BusinessForm bizz={bizz} />
                            </div>
            
                            <hr />
                            <div>  
                                <div className="d-flex col justify-content-between align-items-center">
                                    <h1 className="text-start m-0">Customers</h1>
                                    
                                    <BusinessPageModal
                                        title="Create New Customer"
                                        openModal={() => setCustomerModal(true)}
                                        form={CustomerForm} 
                                        show={showCustomerModal} 
                                        onHide={() => setCustomerModal(false)} 
                                    />
                                </div>              
                                <div className="d-flex col flex-wrap work-area-base" 
                                    style={{
                                        "height": "100%",
                                        "maxHeight": "65vh"
                                    }}>
                                    
                                    {
                                        bizz.customers.map((c) => {
                                            return <CustomerProfile customer={c} key={c} />
                                        })
                                    }
                                    
                                </div>
                            </div>
            
                            <hr />
                            <div>  
                                <div className="d-flex col justify-content-between align-items-center">
                                    <h1 className="text-start m-0">Services</h1>
            
                                    <BusinessPageModal 
                                        title="Create New Product/Service"
                                        openModal={() => setServiceModal(true)}
                                        form={ServiceForm} 
                                        show={showServiceModal} 
                                        onHide={() => setServiceModal(false)} 
                                    />
                                </div> 
                                <div className="d-flex col flex-wrap work-area-base" 
                                    style={{
                                        "height": "100%",
                                        "maxHeight": "65vh"
                                    }}>

                                    {
                                        bizz.productServices.map((c) => {
                                            return <ProductServiceProfile ps={c} key={c} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
            }
        </div>
    );
}

export default BusinessPage;