import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

function DeleteBusinessModal({url, id, name})
{
    const [show, setShow] = useState(false);
    const onHide = () => setShow(false);
    const token = useSelector(state => state.token.value);
    

    function deleteBusiness()
    {
        axios.delete(import.meta.env.VITE_SERVER_API + url + id, {headers: {Authorization: token}})
            .then(() => {
                location.reload();
            })
            .catch((err) => console.log(err))
    }

    return(
        <div className="d-flex row m-0 p-0">
            <Button onClick={() => setShow(true)} variant="outline-danger">Delete</Button>

            <Modal
                show={show}
                onHide={onHide}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                className="col-12 p-0"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Delete {name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure you want to delete?
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => deleteBusiness()} variant="danger">Delete</Button>
                    <Button onClick={() => onHide()} variant="primary">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default DeleteBusinessModal;