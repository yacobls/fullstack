import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AddPkp = () => {
  const [npd_pkp, setNpd_pkp] = useState("");
  const [kpd_pkp, setKpd_pkp] = useState("");
  const [nipd_pkp, setNipd_pkp] = useState("");
  const [alamat_pkp, setAlamat_pkp] = useState("");
  const [kota_pkp, setKota_pkp] = useState("");
  const [kp_pkp, setKp_pkp] = useState("");
  const [tr_pkp, setTr_pkp] = useState("");
  const [tm_pkp, setTm_pkp] = useState("");
  const [nki_pkp, setNki_pkp] = useState("");
  const [tlp_pkp, setTlp_pkp] = useState("");
  const [email_pkp, setEmail_pkp] = useState("");
  const [lpd_pkp, setLpd_pkp] = useState("");
  const [fkipd_pkp, setFkipd_pkp] = useState("");
  const navigate = useNavigate();

  const savePkp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pkp", {
        npd_pkp,
        kpd_pkp,
        nipd_pkp,
        tr_pkp,
        tm_pkp,
        alamat_pkp,
        kota_pkp,
        kp_pkp,
        nki_pkp,
        tlp_pkp,
        email_pkp,
        lpd_pkp,
        fkipd_pkp,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card">
      <div className="columns">
        <div className="column is-half">
          <Form onSubmit={savePkp}>
            <Row className="mb-3">
              <Card.Header>
                <h4>
                  <strong>Instansi Pajak Daerah</strong>
                </h4>
              </Card.Header>
              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Nama Pemerintah Daerah</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={npd_pkp}
                  onChange={(e) => setNpd_pkp(e.target.value)}
                  placeholder="Nama Pemerintah Daerah"
                />
              </Col>

              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Kode Pemerintah Daerah</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kpd_pkp}
                  onChange={(e) => setKpd_pkp(e.target.value)}
                  placeholder="Kode Pemerintah Daerah"
                />
              </Col>
            </Row>

            <Form.Label className="label">
              <strong>Nomenklatur Instansi Pajak Daerah</strong>
            </Form.Label>
            <Form.Control
              type="text"
              className="input"
              value={nipd_pkp}
              onChange={(e) => setNipd_pkp(e.target.value)}
              placeholder="Nomenklatur Instansi Pajak Daerah"
            />

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Tanggal Rekam</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={tr_pkp}
                  onChange={(e) => setTr_pkp(e.target.value)}
                  placeholder="Tanggal Rekam"
                />
              </Col>

              <Col>
                <Form.Label className="label">
                  <strong>Tanggal Mutakhir</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={tm_pkp}
                  onChange={(e) => setTm_pkp(e.target.value)}
                  placeholder="Tanggal Mutakhir"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Alamat</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={alamat_pkp}
                  onChange={(e) => setAlamat_pkp(e.target.value)}
                  placeholder="Alamat"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kota/Kab</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kota_pkp}
                  onChange={(e) => setKota_pkp(e.target.value)}
                  placeholder="Kota/Kab"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kode Pos</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={kp_pkp}
                  onChange={(e) => setKp_pkp(e.target.value)}
                  placeholder="Kode Pos"
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Card.Header className="mt-3">
                <h4>
                  <strong>Pimpinan Instansi Pajak Daerah</strong>
                </h4>
              </Card.Header>
              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Nama Kepala Instansi</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={nki_pkp}
                  onChange={(e) => setNki_pkp(e.target.value)}
                  placeholder="Nama Kepala Instansi"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Nomor Telepon</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={tlp_pkp}
                  onChange={(e) => setTlp_pkp(e.target.value)}
                  placeholder="Nomor Telepon"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Alamat Email</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={email_pkp}
                  onChange={(e) => setEmail_pkp(e.target.value)}
                  placeholder="Alamat Email"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Logo Pemerintah Daerah</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={lpd_pkp}
                  onChange={(e) => setLpd_pkp(e.target.value)}
                  placeholder="Logo Pemerintah Daerah"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Foto Kantor Instansi Pajak Daerah</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={fkipd_pkp}
                  onChange={(e) => setFkipd_pkp(e.target.value)}
                  placeholder="Foto Kantor Instansi Pajak Daerah"
                />
              </Col>
            </Row>

            <Row className="mb-3 mt-3">
              <Col>
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

export default AddPkp;
