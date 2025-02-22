import React, {useState, useEffect} from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DeleteBusinessModal from "../../Modals/DeleteBusinessModal";

function BusinessProfile({id})
{
    const [bizz, setBizz] = useState({});
    const token = useSelector(state => state.token.value);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        function getBizz()
        {
            axios.get(import.meta.env.VITE_SERVER_API + "/Business/GetBusiness/" + id, {headers: {Authorization: token}})
                .then((res) => {
                    setBizz(res.data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err))
        }

        getBizz()
    }, [isLoading]);

    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
            {
                isLoading
                    ? ""
                    :   <Card>
                            <Card.Body>
                                <Card.Title>{bizz.name}</Card.Title>
                                <Card.Text>
                                    Customer count: {bizz.customers.length}
                                </Card.Text>
                                <div className="d-flex row">
                                    <Link className="btn btn-primary my-2" to={"/Account/Business/" + id}>View</Link>
                                    <DeleteBusinessModal url="/Business/DeleteBusiness/" id={id} name={bizz.name} />
                                </div>
                            </Card.Body>
                        </Card>
            }
        </div>
    );
}

export default BusinessProfile;