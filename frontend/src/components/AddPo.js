import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const AddPo = () => {
  const [nwp_po, setNwp_po] = useState("");
  const [no_po, setNo_po] = useState("");
  const [oi_po, setOi_po] = useState("");
  const [alamat_po, setAlamat_po] = useState("");
  const [kec_po, setKec_po] = useState("");
  const [kel_po, setKel_po] = useState("");
  const [kp_po, setKp_po] = useState("");
  const [nama_pic_outlet, setNama_pic_outlet] = useState("");
  const [email_pic_outlet, setEmail_pic_outlet] = useState("");
  const [tlp_pic_outlet, setTlp_pic_outlet] = useState("");
  const [tr_po, setTr_po] = useState("");
  const [tm_po, setTm_po] = useState("");
  const [fio_po, setFio_po] = useState("");
  const [ftdo_po, setFtdo_po] = useState("");
  const [si_po, setSi_po] = useState("");
  const navigate = useNavigate();

  const savePo = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/po", {
        nwp_po,
        no_po,
        oi_po,
        alamat_po,
        kec_po,
        kel_po,
        kp_po,
        nama_pic_outlet,
        email_pic_outlet,
        tlp_pic_outlet,
        tr_po,
        tm_po,
        fio_po,
        ftdo_po,
        si_po,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card mb-3">
      <div className="columns p-3">
        <div className="column is-half">
          <Form onSubmit={savePo}>
            <Row className="mb-3">
              <Card.Header>
                <h4>
                  <strong>Data Outlet</strong>
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
                  value={nwp_po}
                  onChange={(e) => setNwp_po(e.target.value)}
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
                  value={no_po}
                  onChange={(e) => setNo_po(e.target.value)}
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
                  value={oi_po}
                  onChange={(e) => setOi_po(e.target.value)}
                  placeholder="Outlet ID"
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
                  value={alamat_po}
                  onChange={(e) => setAlamat_po(e.target.value)}
                  placeholder="Alamat"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kecamatan</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kec_po}
                  onChange={(e) => setKec_po(e.target.value)}
                  placeholder="Kecamatan"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kelurahan</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kel_po}
                  onChange={(e) => setKel_po(e.target.value)}
                  placeholder="Kelurahan"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kode Pos</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={kp_po}
                  onChange={(e) => setKp_po(e.target.value)}
                  placeholder="Kode Pos"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Tanggal Rekam</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={tr_po}
                  onChange={(e) => setTr_po(e.target.value)}
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
                  value={tm_po}
                  onChange={(e) => setTm_po(e.target.value)}
                  placeholder="Tanggal Mutakhir"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Nama PIC Outlet</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={nama_pic_outlet}
                  onChange={(e) => setNama_pic_outlet(e.target.value)}
                  placeholder="Nama PIC Outlet"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Email PIC Outlet</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={email_pic_outlet}
                  onChange={(e) => setEmail_pic_outlet(e.target.value)}
                  placeholder="Email PIC Outlet"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Hp PIC Outlet Pos</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={tlp_pic_outlet}
                  onChange={(e) => setTlp_pic_outlet(e.target.value)}
                  placeholder="Hp PIC Outlet Pos"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Foto Interior Outlet</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={fio_po}
                  onChange={(e) => setFio_po(e.target.value)}
                  placeholder="Foto Interior Outlet"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Foto Tampak Depan Outlet</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={ftdo_po}
                  onChange={(e) => setFtdo_po(e.target.value)}
                  placeholder="Foto Tampak Depan Outlet"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Surat Izin</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={si_po}
                  onChange={(e) => setSi_po(e.target.value)}
                  placeholder="Surat Izin"
                />
              </Col>
            </Row>

            <Row className="mb-3 mt-3">
              <Col>
                <Button type="submit" className="button is-success">
                  Buat Outlet
                </Button>

                <Button type="submit" className="button is-success">
                  Send
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddPo;
