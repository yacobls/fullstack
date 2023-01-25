import React, { Component } from "react";
import { Col, ListGroup, Button, Row } from "react-bootstrap";

export default class Home extends Component {
  render() {
    return (
      <div className="card">
        <div className="columns">
          <div className="column is-half">
            <Row className="mb-3 mt-3">
              <Col>
                <ListGroup>
                  <Button className="btn-home-menu" href="addpkp">
                    Kantor Pajak
                  </Button>
                  <Button className="btn-home-menu" href="addpwp">
                    Wajib Pajak
                  </Button>
                  <Button className="btn-home-menu" href="addppl">
                    Petugas Lapangan
                  </Button>
                  <Button className="btn-home-menu" href="#">
                    Persetujuan
                  </Button>
                </ListGroup>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    );
  }
}
