import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "./modalChanges.css"
import bg from "../../assets/img/Graph2.png"
import { useSelector } from 'react-redux';

function ModalAddress({ showAdd, setShowAdd }) {

    const user = useSelector(state => state.user.username)

    const [editInfo, setEditInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || {
        position: "-",
        gender: "-",
        phone: "-",
        birthday: "-",
        city:"-",
        country:"-"
    })

    const handleClose = (e) => {
        e.preventDefault()
        localStorage.setItem("userInfo", JSON.stringify(editInfo))
        setShowAdd(false)
    };


    return (
        <>

            <Modal show={showAdd} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Address Info</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "20px" }}>
                    <img src={bg} alt="" />
                    <Form className='row' onSubmit={handleClose}>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>Country</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your first name"
                                autoFocus
                                defaultValue={editInfo.country}
                                onChange={(e)=>setEditInfo({...editInfo, country:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your last name"
                                autoFocus
                                defaultValue={editInfo.city}
                                onChange={(e)=>setEditInfo({...editInfo, city:e.target.value})}
                            />
                        </Form.Group>


                        <Button variant="primary" type='submit'>
                            Save Changes
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>


                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalAddress;