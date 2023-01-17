import React, { Component } from 'react'
import { Col, ListGroup, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <Col>
                <ListGroup>
                    <ListGroup.Item>Pelayanan</ListGroup.Item>
                    <ListGroup.Item>Dashboard</ListGroup.Item>
                    <Button className='btn-home-menu' href="addpkp">Kantor Pajak</Button>
                    <Button className='btn-home-menu' href="addpwp">Wajib Pajak</Button>
                    <ListGroup.Item>Alat Fiskal Elektronik</ListGroup.Item>
                    <ListGroup.Item>Pelaporan</ListGroup.Item>
                </ListGroup>
            </Col>
        )
    }
}
