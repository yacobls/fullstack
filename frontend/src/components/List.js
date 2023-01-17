import React, { Component } from 'react'
import { Col, ListGroup, Button } from 'react-bootstrap'
import './index.css';

export default class List extends Component {
    render() {
        return (
            <Col md={2} mt="2">
                <h4><strong>Page Menu</strong></h4>
                <hr />
                <ListGroup>
                    <ListGroup.Item>Pelayanan</ListGroup.Item>
                    <ListGroup.Item>Dashboard</ListGroup.Item>
                    <Button className='btn-page-menu' href="editpkp/6">Kantor Pajak</Button>
                    <Button className='btn-page-menu' href="editpwp/3">Wajib Pajak</Button>
                    <ListGroup.Item>Alat Fiskal Elektronik</ListGroup.Item>
                    <ListGroup.Item>Pelaporan</ListGroup.Item>
                </ListGroup>
            </Col>
        )
    }
}
