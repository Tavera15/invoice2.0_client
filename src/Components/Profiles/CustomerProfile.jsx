import React, {useState, useEffect} from "react";
import BusinessPageModal from "../../Modals/BusinessPageModal";
import CustomerForm from "../../Forms/CustomerForm";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';
import DeleteBusinessModal from "../../Modals/DeleteBusinessModal";

function CustomerProfile({customerId})
{
    const [customer, setCustomer] = useState({});
    const [showCustomerModal, setCustomerModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();
    const token = useSelector(state => state.token.value);

    useEffect(() => {

        function getCustomer()
        {
            axios.get(import.meta.env.VITE_SERVER_API + `/Business/GetSingleBusinessCustomer/${id}/${customerId}`, {headers: {Authorization: token}})
                .then((res) => {
                    setCustomer(res.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        }

        getCustomer()
    }, [isLoading]);

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            {
                isLoading
                    ? ""
                    :   <Card>
                            <Card.Body>
                                <Card.Title>{customer.name}</Card.Title>
                                <Card.Text>{customer.addressLine1}</Card.Text>
                                <Card.Text>{customer.addressLine2}</Card.Text>
                                <div className="d-flex row">
                                    <BusinessPageModal
                                        title="Create New Customer"
                                        openModal={() => setCustomerModal(true)}
                                        form={CustomerForm} 
                                        show={showCustomerModal} 
                                        onHide={() => setCustomerModal(false)}
                                        btnText="Edit"
                                        origin={customer}
                                    />
                
                                    <div className="mt-2"></div>

                                    <DeleteBusinessModal url={`/Business/DeleteCustomer/${id}/`} id={customerId} name={customer.name}/>
                                </div>
                            </Card.Body>
                        </Card>
            }
        </div>
    );
}

export default CustomerProfile;