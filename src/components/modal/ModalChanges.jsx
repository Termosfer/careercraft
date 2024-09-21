import { useState } from 'react';
import { Modal, Button, Form } from "react-bootstrap";
import "./modalChanges.css"
import bg from "../../assets/img/Graph2.png"
import { useDispatch, useSelector } from 'react-redux';
import { userEdited } from '../../config/authUser';

function ModalChanges({ show, setShow, modalType }) {

    const user = useSelector(state => state.user.username)
    const dispatch = useDispatch()
    const token = localStorage.getItem("token");

    const [editInfo, setEditInfo] = useState(JSON.parse(localStorage.getItem("userInfo")) || {
        position: "-",
        gender: "-",
        phone: "-",
        birthday: "-",
        city: "-",
        country: "-"
    })


    const [editUser, setEditUser] = useState({
        name: user.name,
        surname: user.surname,
        address: editInfo.city + "," + editInfo.country,
        email: user.email
    })


    const handleClose = (e) => {
        e.preventDefault()
        dispatch(userEdited({ token, editUser }))
        localStorage.setItem("userInfo", JSON.stringify(editInfo))
    };


    return (
        <>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalType === 'personal' ? 'Edit Personal Info' : 'Edit Address Info'}</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ padding: "20px" }}>
                    <img src={bg} alt="" />
                    <Form className='row' onSubmit={handleClose}>
                        {
                            modalType === 'personal' ? (
                                <>

                                    <Form.Group className="mb-2 col-6" controlId="formEmail">
                                        <Form.Label>First name</Form.Label>
                                        <Form.Control
                                            className="field-input"
                                            style={{ outline: "none", boxShadow: "none" }}
                                            type="text"

                                            autoFocus
                                            defaultValue={user.name}
                                            onChange={(e) => setEditUser({ ...editUser, name: e.target.value })}
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-2 col-6" controlId="formEmail">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            className="field-input"
                                            style={{ outline: "none", boxShadow: "none" }}
                                            type="text"

                                            autoFocus
                                            defaultValue={user.surname}
                                            onChange={(e) => setEditUser({ ...editUser, surname: e.target.value })}

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
                                            onChange={(e) => setEditInfo({ ...editInfo, gender: e.target.value })}
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
                                            onChange={(e) => setEditInfo({ ...editInfo, birthday: e.target.value })}
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
                                            onChange={(e) => setEditUser({ ...editUser, email: e.target.value })}

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
                                            onChange={(e) => setEditInfo({ ...editInfo, phone: e.target.value })}
                                        />
                                    </Form.Group>
                                </>

                            ) :
                                (
                                    <>
                                        <Form.Group className="mb-2 col-6" controlId="formEmail">
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control
                                                className="field-input"
                                                style={{ outline: "none", boxShadow: "none" }}
                                                type="text"
                                                placeholder="Enter your first name"
                                                autoFocus
                                                defaultValue={editInfo.country}
                                                onChange={(e) => setEditInfo({ ...editInfo, country: e.target.value })}
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
                                                onChange={(e) => setEditInfo({ ...editInfo, city: e.target.value })}
                                            />
                                        </Form.Group>
                                    </>
                                )

                        }

                        <div className="mt-4 text-center">
                            <Button variant="primary" type='submit' className=' w-50' >
                                Save Changes
                            </Button>
                        </div>
                    </Form>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalChanges;