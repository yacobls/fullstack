import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AddPpl = () => {
  const [nip_ppl, setNip_ppl] = useState("");
  const [np_ppl, setNp_ppl] = useState("");
  const [alamat_ppl, setAlamat_ppl] = useState("");
  const [kel_ppl, setKel_ppl] = useState("");
  const [kec_ppl, setKec_ppl] = useState("");
  const [kp_ppl, setKp_ppl] = useState("");
  const [nik_ppl, setNik_ppl] = useState("");
  const [tr_ppl, setTr_ppl] = useState("");
  const [tm_ppl, setTm_ppl] = useState("");
  const [tlp_ppl, setTlp_ppl] = useState("");
  const [email_ppl, setEmail_ppl] = useState("");
  const [foto_ktp_ppl, setFoto_ktp_ppl] = useState("");
  const [pas_foto_ppl, setPas_foto_ppl] = useState("");
  const navigate = useNavigate();

  const savePpl = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/ppl", {
        nip_ppl,
        np_ppl,
        alamat_ppl,
        kel_ppl,
        kec_ppl,
        kp_ppl,
        nik_ppl,
        tr_ppl,
        tm_ppl,
        tlp_ppl,
        email_ppl,
        foto_ktp_ppl,
        pas_foto_ppl,
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
          <Form onSubmit={savePpl}>
            <Row className="mb-3">
              <Card.Header>
                <h4>
                  <strong>Petugas Lapangan</strong>
                </h4>
              </Card.Header>
              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Nomor ID Petugas</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={nip_ppl}
                  onChange={(e) => setNip_ppl(e.target.value)}
                  placeholder="Nomor ID Petugas"
                />
              </Col>

              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Nama Petugas</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={np_ppl}
                  onChange={(e) => setNp_ppl(e.target.value)}
                  placeholder="Nama Petugas"
                />
              </Col>
            </Row>

            <Form.Label className="label">
              <strong>Alamat</strong>
            </Form.Label>
            <Form.Control
              type="text"
              className="input"
              value={alamat_ppl}
              onChange={(e) => setAlamat_ppl(e.target.value)}
              placeholder="Alamat"
            />

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Kelurahan</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kel_ppl}
                  onChange={(e) => setKel_ppl(e.target.value)}
                  placeholder="Kelurahan"
                />
              </Col>

              <Col>
                <Form.Label className="label">
                  <strong>Kecamatan</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kec_ppl}
                  onChange={(e) => setKec_ppl(e.target.value)}
                  placeholder="Kecamatan"
                />
              </Col>

              <Col>
                <Form.Label className="label">
                  <strong>Kode Pos</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={kp_ppl}
                  onChange={(e) => setKp_ppl(e.target.value)}
                  placeholder="Kode Pos"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Tanggal Rekam</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={tr_ppl}
                  onChange={(e) => setTr_ppl(e.target.value)}
                  placeholder="Tanggal Rekam"
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Tanggal Mutakhir</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={tm_ppl}
                  onChange={(e) => setTm_ppl(e.target.value)}
                  placeholder="Tanggal Mutakhir"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>NIK</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={nik_ppl}
                  onChange={(e) => setNik_ppl(e.target.value)}
                  placeholder="NIK"
                />
              </Col>
            </Row>

            <Row>
            <Col>
                <br />
                <Form.Label className="label">
                  <strong>Nomor Telepon Seluler</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={tlp_ppl}
                  onChange={(e) => setTlp_ppl(e.target.value)}
                  placeholder="Nomor Telepon Seluler"
                />
              </Col>

              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Alamat Email</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={email_ppl}
                  onChange={(e) => setEmail_ppl(e.target.value)}
                  placeholder="Alamat Email"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Upload Foto KTP</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={foto_ktp_ppl}
                  onChange={(e) => setFoto_ktp_ppl(e.target.value)}
                  placeholder="Upload Foto KTP"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Upload Pas Foto</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={pas_foto_ppl}
                  onChange={(e) => setPas_foto_ppl(e.target.value)}
                  placeholder="Upload Pas Foto"
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

export default AddPpl;
