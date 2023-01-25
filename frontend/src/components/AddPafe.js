import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AddPafe = () => {
  const [nwp_pafe, setNwp_pafe] = useState("");
  const [no_pafe, setNo_pafe] = useState("");
  const [oi_pafe, setOi_pafe] = useState("");
  const [ja_pafe, setJa_pafe] = useState("");
  const [afe_pafe, setAfe_pafe] = useState("");
  const [ip_pafe, setIp_pafe] = useState("");
  const [ai_pafe, setAi_pafe] = useState("");
  const [tr_pafe, setTr_pafe] = useState("");
  const [tm_pafe, setTm_pafe] = useState("");
  const [longitude_pafe, setLongitude_pafe] = useState("");
  const [latitude_pafe, setLatitude_pafe] = useState("");
  const [fpa_pafe, setFpa_pafe] = useState("");
  const [fsna_pafe, setFsna_pafe] = useState("");
  const [sn_pafe, setSn_pafe] = useState("");
  const navigate = useNavigate();

  const savePafe = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pafe", {
        nwp_pafe,
        no_pafe,
        oi_pafe,
        ja_pafe,
        afe_pafe,
        ip_pafe,
        ai_pafe,
        tr_pafe,
        tm_pafe,
        longitude_pafe,
        latitude_pafe,
        fpa_pafe,
        fsna_pafe,
        sn_pafe,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card mb-3">
      <div className="columns">
        <div className="column is-half">
          <Form onSubmit={savePafe}>
            <Row className="mb-3">
              <Card.Header>
                <h4>
                  <strong>Alat Fiskal Elektronik</strong>
                </h4>
              </Card.Header>
              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Nama Wajib Pajak</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={nwp_pafe}
                  onChange={(e) => setNwp_pafe(e.target.value)}
                  placeholder="Nama Wajib Pajak"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Nama Outlet</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={no_pafe}
                  onChange={(e) => setNo_pafe(e.target.value)}
                  placeholder="Nama Outlet"
                />
              </Col>

              <Col>
                <Form.Label className="label">
                  <strong>Outlet ID</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={oi_pafe}
                  onChange={(e) => setOi_pafe(e.target.value)}
                  placeholder="Outlet ID"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Jenis AFE</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={ja_pafe}
                  onChange={(e) => setJa_pafe(e.target.value)}
                  placeholder="Jenis AFE"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Alat Fiskal Elektronik</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={afe_pafe}
                  onChange={(e) => setAfe_pafe(e.target.value)}
                  placeholder="Alat Fiskal Elektronik"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>IP Address</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={ip_pafe}
                  onChange={(e) => setIp_pafe(e.target.value)}
                  placeholder="IP Address"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>AFE ID</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={ai_pafe}
                  onChange={(e) => setAi_pafe(e.target.value)}
                  placeholder="AFE ID"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Longitude</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={longitude_pafe}
                  onChange={(e) => setLongitude_pafe(e.target.value)}
                  placeholder="Longitude"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Latitude</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={latitude_pafe}
                  onChange={(e) => setLatitude_pafe(e.target.value)}
                  placeholder="Latitude"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Tanggal Rekam</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={tr_pafe}
                  onChange={(e) => setTr_pafe(e.target.value)}
                  placeholder="Tanggal Rekam"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Tanggal Mutakhir</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={tm_pafe}
                  onChange={(e) => setTm_pafe(e.target.value)}
                  placeholder="Tanggal Mutakhir"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Foto Posisi AFE</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={fpa_pafe}
                  onChange={(e) => setFpa_pafe(e.target.value)}
                  placeholder="Foto Posisi AFE"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Foto Serial Number AFE</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={fsna_pafe}
                  onChange={(e) => setFsna_pafe(e.target.value)}
                  placeholder="Foto Serial Number AFE"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Serial Number</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={sn_pafe}
                  onChange={(e) => setSn_pafe(e.target.value)}
                  placeholder="Serial Number"
                />
              </Col>
            </Row>

            <Row className="mb-3 mt-3">
              <Col>
                <Button type="submit" className="button is-success">
                  Buat AFE
                </Button>

                <Button type="submit" className="button is-success">
                  Save
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddPafe;
