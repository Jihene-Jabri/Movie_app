import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";
import "./AddModal.css";
import { v4 as uuid } from "uuid";

function AddModal(props) {
    const [Show, setShow] = useState(false);
    const showmodal = () => {
        setShow(!Show);
    };

    const { className, handleAdd } = props;
    const [newMovie, setNewMovie] = useState({
        id: uuid(),
        title: "",
        description: "",
        posterUrl: "",
        name:"",
        rate: 1,
    });

    return (
        <div className="Modal-Container">
            <div ClassName="addMovie_btn">
                <Button onClick={showmodal}> Add a Movie from here</Button>
            </div>
            <Modal show={Show} className={className}>
                <Modal.Header>
                    Add a Movie
                    <button onClick={showmodal} className="close">
                        <h4>×</h4>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control
                        name="title"
                        type="text"
                        required
                        placeholder="Enter movie title"
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <br />
                    <Form.Control
                        name="description"
                        type="text"
                        required
                        placeholder="Enter movie description"
                        as="textarea"
                        rows={2}
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <br />
                    <Form.Control
                        name="posterUrl"
                        type="text"
                        required
                        placeholder="Enter movie poster Url"
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                [e.target.name]: e.target.value,
                            })
                        }
                    />
                    <br />
                    <Form.Control
                        name="rating"
                        type="number"
                        required
                        max="5"
                        min="1"
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                [e.target.name]: e.target.value,
                            })
                        }
                    ></Form.Control>
                    <br />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={(e) => {
                            handleAdd(newMovie);
                            showmodal();
                            setNewMovie({
                                id: uuid(),
                                title: "",
                                description: "",
                                posterUrl: "",
                                name: "",
                                rate: 1,
                            });
                        }}
                    >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddModal;
