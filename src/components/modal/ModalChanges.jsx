import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "./modalChanges.css"
import bg from "../../assets/img/Graph2.png"
import { useSelector } from 'react-redux';

function ModalChanges({ show, setShow }) {

    const user = useSelector(state => state.user.username)

    const [editInfo, setEditInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || {
        position: "-",
        gender: "-",
        phone: "-",
        birthday: "-"
    })

    const handleClose = (e) => {
        e.preventDefault()
        localStorage.setItem("userInfo", JSON.stringify(editInfo))
        setShow(false)
    };


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Personal Info</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "20px" }}>
                    <img src={bg} alt="" />
                    <Form className='row' onSubmit={handleClose}>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>First name</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your first name"
                                autoFocus
                                defaultValue={user.name}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your last name"
                                autoFocus
                                defaultValue={user.surname}
                            />
                        </Form.Group>

                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>Gender</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your gender"
                                autoFocus
                                defaultValue={editInfo.gender}
                                onChange={(e)=>setEditInfo({...editInfo, gender:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>Birthday</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your birthday"
                                autoFocus
                                defaultValue={editInfo.birthday}
                                onChange={(e)=>setEditInfo({...editInfo, birthday:e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>Position</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your job position"
                                autoFocus
                                defaultValue={editInfo.position}
                                onChange={(e) => setEditInfo({ ...editInfo, position: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your email"
                                autoFocus
                                defaultValue={user.email}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                className="field-input"
                                style={{ outline: "none", boxShadow: "none" }}
                                type="text"
                                placeholder="Enter your phone number"
                                autoFocus
                                defaultValue={editInfo.phone}
                                onChange={(e)=>setEditInfo({...editInfo, phone:e.target.value})}
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

export default ModalChanges;