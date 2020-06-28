import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PBcontainer from './components/PBcontainer'
import Search from './components/Search'
import AlertMessage from './components/AlertMessage'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    const [showAlert, setShowAlert] = useState(false)
    const [alertText, setAlertText] = useState('')
    const [data, setData] = useState([])

    const handleAlert = (status) => {
        setShowAlert(status)
    }

    const handleSearch = (status, text, data) => {
        setAlertText(text)
        setShowAlert(status)
        setData(data)
    }

    return (
        <>
            <Container>
                <AlertMessage
                    text={alertText}
                    show={showAlert}
                    handleAlert={handleAlert}
                />
                <Row className='mt-4 mb-4'>
                    <Col>
                        <a href='testindex.html' className='btn btn-info'>
                            GO1 map
                        </a>
                    </Col>
                    <Col sm={12} md={7} lg={5}>
                        <Search handleSearch={handleSearch} />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
            <PBcontainer data={data} />
        </>
    )
}

export default App
