import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddPwp = () => {
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

  const savePwp = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/pwp", {
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

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={savePwp}>
          <div className="field">
            <label className="label">Nomor Pelayanan</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={np_pwp}
                onChange={(e) => setNp_pwp(e.target.value)}
                placeholder="Nomor Pelayanan"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Nama Wajib Pajak</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nwp_pwp}
                onChange={(e) => setNwp_pwp(e.target.value)}
                placeholder="Nama Wajib Pajak"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Alamat Wajib Pajak</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={alamat_pwp}
                onChange={(e) => setAlamat_pwp(e.target.value)}
                placeholder="Alamat Wajib Pajak"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Kelurahan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kel_pwp}
                onChange={(e) => setKel_pwp(e.target.value)}
                placeholder="Kelurahan"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Kecamatan</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={kec_pwp}
                onChange={(e) => setKec_pwp(e.target.value)}
                placeholder="Kecamatan"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Kode Pos</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={kp_pwp}
                onChange={(e) => setKp_pwp(e.target.value)}
                placeholder="Kode Pos"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">NPWDP</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={npwdp_pwp}
                onChange={(e) => setNpwdp_pwp(e.target.value)}
                placeholder="NPWDP"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email_pwp}
                onChange={(e) => setEmail_pwp(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Tanggal Rekam</label>
            <div className="control">
              <input
                type="date"
                className="input"
                value={tr_pwp}
                onChange={(e) => setTr_pwp(e.target.value)}
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
                value={tm_pwp}
                onChange={(e) => setTm_pwp(e.target.value)}
                placeholder="Tanggal Mutakhir"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Jumlah Outlet</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={jumlah_outlet_pwp}
                onChange={(e) => setJumlah_outlet_pwp(e.target.value)}
                placeholder="Jumlah Outlet"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Jenis Outlet</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jenis_outlet_pwp}
                onChange={(e) => setJenis_outlet_pwp(e.target.value)}
                placeholder="Jenis Outlet"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Jenis Pajak</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={jenis_pajak_pwp}
                onChange={(e) => setJenis_pajak_pwp(e.target.value)}
                placeholder="Jenis Pajak"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Logo</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={logo_pwp}
                onChange={(e) => setLogo_pwp(e.target.value)}
                placeholder="Logo"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Foto Tampak Depan Kantor</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={ftdp_pwp}
                onChange={(e) => setFtdp_pwp(e.target.value)}
                placeholder="Foto Tampak Depan Kantor"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Surat Izin</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={si_pwp}
                onChange={(e) => setSi_pwp(e.target.value)}
                placeholder="Surat Izin"
              />
            </div>
          </div>

          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPwp;
