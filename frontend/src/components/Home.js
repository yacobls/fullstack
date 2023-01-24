import React, { Component } from 'react'
import { Col, ListGroup, Button } from 'react-bootstrap'

export default class Home extends Component {
    render() {
        return (
            <Col>
                <ListGroup>
                    <Button className='btn-home-menu' href="addpkp">Kantor Pajak</Button>
                    <Button className='btn-home-menu' href="addpwp">Wajib Pajak</Button>
                    <Button className='btn-home-menu' href="addppl">Petugas Lapangan</Button>
                    <ListGroup.Item>Persetujuan</ListGroup.Item>
                </ListGroup>
            </Col>
        )
    }
}
