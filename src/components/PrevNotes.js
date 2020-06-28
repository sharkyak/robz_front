import React from 'react'
import { formatDate } from '../utils/format'

const PrevNotes = (props) => {
    const date = formatDate(props.note[1], true)
    return (
        <div style={{ whiteSpace: 'pre-wrap' }}>
            <h6>{props.note[2]}</h6>
            <p>
                {props.note[3] ? props.note[3] + ' ' : ''}
                <span style={{ fontWeight: '100' }}>{date}</span>
            </p>
        </div>
    )
}

export default PrevNotes
