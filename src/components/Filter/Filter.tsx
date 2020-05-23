import React from 'react'
import { Form } from 'react-bootstrap'

const Filter: React.FC = () => {
    return (
        <React.Fragment>
            <Form>
                <Form.Group controlId="filter-form">
                    <Form.Label>Difficulty</Form.Label>
                </Form.Group>
            </Form>
        </React.Fragment>
    )
}
export default Filter;
