import React,{useState, useEffect} from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from 'react-router-dom';
import DeleteBusinessModal from "../../Modals/DeleteBusinessModal";
import BusinessPageModal from "../../Modals/BusinessPageModal";
import ServiceForm from "../../Forms/ServiceForm";

function ProductServiceProfile({PS_Id})
{
    const [ps, setPS] = useState({});
    const [showCustomerModal, setCustomerModal] = useState(false);
    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    useEffect(() => {

        function getPS()
        {
            axios.get(import.meta.env.VITE_SERVER_API + `/Business/GetSingleBusinessProductService/${id}/${PS_Id}`, {headers: {Authorization: token}})
                .then((res) => {
                    setPS(res.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        }

        getPS()
    }, [isLoading]);

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            <Card>
                <Card.Body>
                    <Card.Title>{ps.name}</Card.Title>
                    <Card.Text>{ps.price}</Card.Text>
                    <div className="d-flex row">
                        <BusinessPageModal
                            title="Create New Customer"
                            openModal={() => setCustomerModal(true)}
                            form={ServiceForm} 
                            show={showCustomerModal} 
                            onHide={() => setCustomerModal(false)}
                            btnText="Edit"
                            origin={ps}
                        />
                        
                        <div className="mt-2"></div>

                        <DeleteBusinessModal url={`/Business/DeleteProductService/${id}/`} id={PS_Id} name={ps.name}/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default ProductServiceProfile;