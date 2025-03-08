import React from "react";
import { Modal, Button } from "react-bootstrap";

function BusinessPageModal(props)
{
    const BizzForm = props.form;

    return(
        <div className="d-flex row m-0 p-0">
            <Button onClick={() => props.openModal(true)} variant="success">{props.btnText}</Button>

            <Modal
                show={props.show}
                onHide={props.onHide}
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
                    <BizzForm id={props.id} origin={props.origin} hideModal={() => props.onHide()} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BusinessPageModal;