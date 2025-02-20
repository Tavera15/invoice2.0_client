import React from "react";
import { Modal, Button } from "react-bootstrap";

function BusinessPageModal(props)
{
    const BizzForm = props.form;

    return(
        <div>
            <Button onClick={() => props.openModal(true)} variant="info">Create New</Button>

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
                    {props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BizzForm hideModal={() => props.onHide()} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BusinessPageModal;