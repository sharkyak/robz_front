import React from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'

const Search = ({ handleSearch }) => {
    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget
        const id = form.id.value

        if (id.length !== 12 && id.length !== 9)
            return handleSearch(
                true,
                'Please Enter a Valid WO or Part Number',
                []
            )

        let data = { res: [] }

        if (id.length === 9) {
            let part_number = await fetch(
                process.env.REACT_APP_SERVER_URL + 'wo/' + id
            ).then((data) => data.json())

            try {
                part_number = part_number.res.pn

                const res = await fetch(
                    process.env.REACT_APP_SERVER_URL + 'pn/' + part_number
                ).then((data) => data.json())

                data.res = res.res.filter((el) => el.wo === id)
            } catch (error) {}
        } else {
            data = await fetch(
                process.env.REACT_APP_SERVER_URL + 'pn/' + id
            ).then((data) => data.json())
        }

        if (data.res.length === 0) {
            return handleSearch(true, 'Not Found', [])
        }

        return handleSearch(false, '', data)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Enter Part\WO #</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control id='id' type='text' />
                <InputGroup.Append>
                    <Button type='submit' variant='primary'>
                        Go
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>
    )
}

export default Search
