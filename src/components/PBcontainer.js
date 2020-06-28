import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Bar from './Bar'

const PBcontainer = ({ data }) => {
    if (data.length === 0) return null

    const wo_with_data = data.res.filter((el) => el.percent > 0)
    const wo_without_data = data.res.filter((el) => el.percent === 0)
    return (
        <Container>
            <Row className='border-bottom mb-3'>
                <Col xs={1} className='text-left font-weight-bold'>
                    WO
                </Col>
                <Col xs={2} className='text-right font-weight-bold'>
                    Start date
                </Col>
                <Col className='text-center font-weight-bold'>Progress</Col>
                <Col
                    xs={1}
                    className='text-left font-weight-bold'
                    style={{ whiteSpace: 'nowrap' }}
                >
                    Due date
                </Col>
                <Col xs={3} className='text-right font-weight-bold'>
                    Step
                </Col>
                <Col xs={1} className='text-right font-weight-bold'>
                    Issue
                </Col>
            </Row>
            {wo_with_data.map((el) => (
                <Bar data={el} key={el.wo} />
            ))}
            {wo_without_data.map((el) => (
                <Bar data={el} key={el.wo} />
            ))}
        </Container>
    )
}

export default PBcontainer
