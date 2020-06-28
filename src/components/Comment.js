import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment as cr } from '@fortawesome/free-regular-svg-icons'
import { faComment as cs } from '@fortawesome/free-solid-svg-icons'
import PrevNotes from './PrevNotes'

const Comment = (props) => {
    const [showModal, setShowModal] = useState(false)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(
                process.env.REACT_APP_SERVER_URL + 'notes/' + props.wo
            ).then((data) => data.json())
            setNotes(resp.notes)
        }
        fetchData()
        // eslint-disable-next-line
    }, [])

    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const wo = props.wo
        const category = form.category.value
        const note = form.note.value
        handleClose()
        if (category === '') return
        fetch(process.env.REACT_APP_SERVER_URL + 'addnote', {
            method: 'POST',
            headers: new Headers({ 'Content-Type': 'application/json' }),
            body: JSON.stringify({ wo, category, note }),
        })
            .then(() => {
                setNotes([[null, new Date(), category, note], ...notes])
            })
            .catch(console.log)
    }

    return (
        <div>
            {/* eslint-disable-next-line */}
            <a href='#' onClick={handleShow}>
                <FontAwesomeIcon icon={notes.length === 0 ? cr : cs} />
            </a>
            <Modal show={showModal} onHide={handleClose} centered scrollable>
                <Modal.Header closeButton>
                    <Modal.Title>Add Issue</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId='category'>
                            <h6>Choose Category</h6>
                            <Form.Control as='select'>
                                <option></option>
                                <option>Material Supply</option>
                                <option>Capacity</option>
                                <option>ECR/ECO</option>
                                <option>Kit Delay</option>
                                <option>Box Shortage</option>
                                <option>Subcontractor</option>
                                <option>Delay</option>
                                <option>Pune Training</option>
                                <option>MES Issue</option>
                                <option>Bridge PVUs</option>
                                <option>Internal Quality</option>
                                <option>Supplier Quality</option>
                                <option>Cross-Training</option>
                                <option>@ USL</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId='note'>
                            <h6>Add Comment</h6>
                            <Form.Control as='textarea' rows='3' />
                        </Form.Group>
                        <div className='text-right pb-3 border-bottom'>
                            <Button
                                variant='primary'
                                type='submit'
                                className='m-1'
                            >
                                Save
                            </Button>
                        </div>
                    </Form>
                    <div className='pt-3'>
                        <h4 className='mb-3'>Previous Issues</h4>
                        {notes.map((note, idx) => (
                            <PrevNotes key={idx} note={note} />
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Comment
