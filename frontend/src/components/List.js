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
                    <Button className='btn-page-menu' href="/">Pelayanan</Button>
                    <Button className='btn-page-menu' href="TabDashboard">Dashboard</Button>
                    <Button className='btn-page-menu' href="editpkp/6">Kantor Pajak</Button>
                    <Button className='btn-page-menu' href="TabWajibPajak">Wajib Pajak</Button>
                    <Button className='btn-page-menu' href="AddPafe">Alat Fiskal Elektronik</Button>
                    <Button className='btn-page-menu' href="underconstruction">Pelaporan</Button>
                </ListGroup>
            </Col>
        )
    }
}
