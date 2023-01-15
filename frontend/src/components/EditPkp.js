import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPkp = () => {
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
  const { id } = useParams();

  useEffect(()=>{
    getPkpById();
  }, []);

  const updatePkp = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/pkp/${id}`, {
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

  const getPkpById = async () => {
    const response = await axios.get(`http://localhost:5000/pkp/${id}`);
    setNpd_pkp(response.data.npd_pkp);
    setKpd_pkp(response.data.kpd_pkp);
    setNipd_pkp(response.data.nipd_pkp);
    setAlamat_pkp(response.data.alamat_pkp);
    setKota_pkp(response.data.kota_pkp);
    setKp_pkp(response.data.kp_pkp);
    setTr_pkp(response.data.tr_pkp);
    setTm_pkp(response.data.tm_pkp);
    setNki_pkp(response.data.nki_pkp);
    setTlp_pkp(response.data.tlp_pkp);
    setEmail_pkp(response.data.email_pkp);
    setLpd_pkp(response.data.lpd_pkp);
    setFkipd_pkp(response.data.fkipd_pkp);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updatePkp}>
          <div className="field">
            <label className="label">Nama Pemerintah Daerah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={npd_pkp}
                onChange={(e) => setNpd_pkp(e.target.value)}
                placeholder="Nama Pemerintah Daerah"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kode Pemerintah Daerah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kpd_pkp}
                onChange={(e) => setKpd_pkp(e.target.value)}
                placeholder="Kode Pemerintah Daerah"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nomenklatur Instansi Pajak Daerah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nipd_pkp}
                onChange={(e) => setNipd_pkp(e.target.value)}
                placeholder="Nomenklatur Instansi Pajak Daerah"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat_pkp}
                onChange={(e) => setAlamat_pkp(e.target.value)}
                placeholder="Alamat"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kota/Kab</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kota_pkp}
                onChange={(e) => setKota_pkp(e.target.value)}
                placeholder="Kota/Kab"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Kode Pos</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kp_pkp}
                onChange={(e) => setKp_pkp(e.target.value)}
                placeholder="Kota/Kab"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Rekam</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={tr_pkp}
                onChange={(e) => setTr_pkp(e.target.value)}
                placeholder="Tanggal Rekam"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Tanggal Mutakhir</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={tm_pkp}
                onChange={(e) => setTm_pkp(e.target.value)}
                placeholder="Tanggal Mutakhir"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nama Kepala Instansi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nki_pkp}
                onChange={(e) => setNki_pkp(e.target.value)}
                placeholder="Nama Kepala Instansi"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Nomor Telepon</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={tlp_pkp}
                onChange={(e) => setTlp_pkp(e.target.value)}
                placeholder="Nomor Telepon"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Alamat Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email_pkp}
                onChange={(e) => setEmail_pkp(e.target.value)}
                placeholder="Alamat Email"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Logo Pemerintah Daerah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lpd_pkp}
                onChange={(e) => setLpd_pkp(e.target.value)}
                placeholder="Logo Pemerintah Daerah"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Foto Kantor Instansi Pajak Daerah</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={fkipd_pkp}
                onChange={(e) => setFkipd_pkp(e.target.value)}
                placeholder="Foto Kantor Instansi Pajak Daerah"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPkp;
