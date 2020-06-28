import React from 'react'
import { Alert } from 'react-bootstrap'

const AlertMessage = ({ text, show, handleAlert }) => {
    if (show) {
        return (
            <Alert
                variant='danger'
                onClose={() => handleAlert(false)}
                dismissible
            >
                <p>{text}</p>
            </Alert>
        )
    }
    return null
}

export default AlertMessage
