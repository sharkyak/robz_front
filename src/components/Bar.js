import React from 'react'
import { Row, Col, ProgressBar } from 'react-bootstrap'
import Comment from './Comment'
import { formatDate } from '../utils/format'

const Bar = (props) => {
    const wo = props.data.wo
    const width = props.data.percent
    const descr = props.data.descr ? props.data.descr : 'Not started'
    const date = props.data.date ? formatDate(props.data.date) : ''
    const start =
        props.data.start !== '-1000' ? formatDate(props.data.start) : '12/31/70'
    let color = props.data.date < new Date() ? 'danger' : ''
    if (width === 100) color = 'success'
    return (
        <Row className='align-items-center mb-2'>
            <Col xs={1} className='text-left'>
                {/* eslint-disable-next-line */}
                <a href={'wo.cgi?wo=' + wo} target='_blank'>
                    {wo}
                </a>
            </Col>
            <Col xs={2} className='text-right'>
                {start}
            </Col>
            <Col>
                <ProgressBar now={width} label={`${width}%`} variant={color} />
            </Col>
            <Col xs={1} className='text-left'>
                {date}
            </Col>
            <Col xs={3} className='text-right'>
                {descr}
            </Col>
            <Col xs={1} className='text-right'>
                <Comment wo={props.data.wo} />
            </Col>
        </Row>
    )
}

export default Bar
