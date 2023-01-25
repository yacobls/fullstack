import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EditPwp = () => {
  const [np_pwp, setNp_pwp] = useState("");
  const [nwp_pwp, setNwp_pwp] = useState("");
  const [alamat_pwp, setAlamat_pwp] = useState("");
  const [kel_pwp, setKel_pwp] = useState("");
  const [kec_pwp, setKec_pwp] = useState("");
  const [kp_pwp, setKp_pwp] = useState("");
  const [npwdp_pwp, setNpwdp_pwp] = useState("");
  const [email_pwp, setEmail_pwp] = useState("");
  const [tr_pwp, setTr_pwp] = useState("");
  const [tm_pwp, setTm_pwp] = useState("");
  const [jumlah_outlet_pwp, setJumlah_outlet_pwp] = useState("");
  const [jenis_outlet_pwp, setJenis_outlet_pwp] = useState("");
  const [jenis_pajak_pwp, setJenis_pajak_pwp] = useState("");
  const [logo_pwp, setLogo_pwp] = useState("");
  const [ftdp_pwp, setFtdp_pwp] = useState("");
  const [si_pwp, setSi_pwp] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getPwpById();
  }, []);

  const updatePwp = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pwp/${id}`, {
        np_pwp,
        nwp_pwp,
        alamat_pwp,
        kel_pwp,
        kec_pwp,
        kp_pwp,
        npwdp_pwp,
        email_pwp,
        tr_pwp,
        tm_pwp,
        jumlah_outlet_pwp,
        jenis_outlet_pwp,
        jenis_pajak_pwp,
        logo_pwp,
        ftdp_pwp,
        si_pwp,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getPwpById = async () => {
    const response = await axios.get(`http://localhost:5000/pwp/${id}`);
    setNp_pwp(response.data.np_pwp);
    setNwp_pwp(response.data.nwp_pwp);
    setAlamat_pwp(response.data.alamat_pwp);
    setKel_pwp(response.data.kel_pwp);
    setKec_pwp(response.data.kec_pwp);
    setKp_pwp(response.data.kp_pwp);
    setNpwdp_pwp(response.data.npwdp_pwp);
    setEmail_pwp(response.data.email_pwp);
    setTr_pwp(response.data.tr_pwp);
    setTm_pwp(response.data.tm_pwp);
    setJumlah_outlet_pwp(response.data.jumlah_outlet_pwp);
    setJenis_outlet_pwp(response.data.jenis_outlet_pwp);
    setJenis_pajak_pwp(response.data.jenis_pajak_pwp);
    setLogo_pwp(response.data.logo_pwp);
    setFtdp_pwp(response.data.ftdp_pwp);
    setSi_pwp(response.data.si_pwp);
  };

  return (
    <div className="card">
      <div className="columns">
        <div className="column p-3">
          <Form onSubmit={updatePwp}>
            <Row className="mb-3">
              <Card.Header>
                <h4>
                  <strong>Data Wajib Pajak</strong>
                </h4>
              </Card.Header>
              <Col>
                <br />
                <Form.Label className="label">
                  <strong>Nomor Pelayanan</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={np_pwp}
                  onChange={(e) => setNp_pwp(e.target.value)}
                  placeholder="Nomor Pelayanan"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="label">
                <strong>Nama Wajib Pajak</strong>
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  className="input"
                  value={nwp_pwp}
                  onChange={(e) => setNwp_pwp(e.target.value)}
                  placeholder="Nama Wajib Pajak"
                />
              </Col>
            </Row>

            <Row className="mb-3">
              <Form.Label className="label">
                <strong>Alamat Wajib Pajak</strong>
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  className="input"
                  value={alamat_pwp}
                  onChange={(e) => setAlamat_pwp(e.target.value)}
                  placeholder="Alamat Wajib Pajak"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kelurahan</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kel_pwp}
                  onChange={(e) => setKel_pwp(e.target.value)}
                  placeholder="Kelurahan"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kecamatan</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={kec_pwp}
                  onChange={(e) => setKec_pwp(e.target.value)}
                  placeholder="Kecamatan"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Kode Pos</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={kp_pwp}
                  onChange={(e) => setKp_pwp(e.target.value)}
                  placeholder="Kode Pos"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>NPWDP</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={npwdp_pwp}
                  onChange={(e) => setNpwdp_pwp(e.target.value)}
                  placeholder="NPWDP"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Email</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={email_pwp}
                  onChange={(e) => setEmail_pwp(e.target.value)}
                  placeholder="Email"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Tanggal Rekam</strong>
                </Form.Label>
                <Form.Control
                  type="date"
                  className="input"
                  value={tr_pwp}
                  onChange={(e) => setTr_pwp(e.target.value)}
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
                  value={tm_pwp}
                  onChange={(e) => setTm_pwp(e.target.value)}
                  placeholder="Tanggal Mutakhir"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Jumlah Outlet</strong>
                </Form.Label>
                <Form.Control
                  type="number"
                  className="input"
                  value={jumlah_outlet_pwp}
                  onChange={(e) => setJumlah_outlet_pwp(e.target.value)}
                  placeholder="Jumlah Outlet"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Jenis Outlet</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={jenis_outlet_pwp}
                  onChange={(e) => setJenis_outlet_pwp(e.target.value)}
                  placeholder="Jenis Outlet"
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label className="label">
                  <strong>Jenis Pajak</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={jenis_pajak_pwp}
                  onChange={(e) => setJenis_pajak_pwp(e.target.value)}
                  placeholder="Jenis Pajak"
                />
              </Form.Group>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Logo</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={logo_pwp}
                  onChange={(e) => setLogo_pwp(e.target.value)}
                  placeholder="Logo"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col>
                <Form.Label className="label">
                  <strong>Foto Tampak Depan Kantor</strong>
                </Form.Label>
                <Form.Control
                  type="text"
                  className="input"
                  value={ftdp_pwp}
                  onChange={(e) => setFtdp_pwp(e.target.value)}
                  placeholder="Foto Tampak Depan Kantor"
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
                  value={si_pwp}
                  onChange={(e) => setSi_pwp(e.target.value)}
                  placeholder="Surat Izin"
                />
              </Col>
            </Row>

            <Row className="mb-3 mt-3">
              <Col>
                <Button type="submit" className="button is-success">
                  Update
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditPwp;
