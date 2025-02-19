import React from "react";
import { Modal, Button } from "react-bootstrap";
import BusinessForm from "../Forms/BusinessForm";

function BusinessModal(props)
{
    return(
        <Modal
            {...props}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="col-12"
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Create New Business
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <BusinessForm hideModal={() => props.onHide()} />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default BusinessModal;