import React, { useState, useEffect } from "react";
import axios from "axios";

const PkpList = () => {
const [pkp, setPkp] = useState([]);

useEffect(() => {
    getPkp();
}, []);

const getPkp = async () =>{
    const response = await axios.get("http://localhost:5000/pkp");
    setPkp(response.data);
};

  return (
    <div className="columns mt-5 is-centered">
        <div className="column is-half">
            <table className="table is-striped is-fullwidth">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama Pemerintah Daerah</th>
                        <th>Kode Pemerintah Daerah</th>
                        <th>Nomenklatur Instansi Pajak Daerah</th>
                        <th>Alamat</th>
                        <th>Kota/Kab</th>
                        <th>Kode Pos</th>
                        <th>Tanggal Rekam</th>
                        <th>Tanggal Mutakhir</th>
                        <th>Nama Kepala Instansi</th>
                        <th>Nomor Telepon</th>
                        <th>Alamat Email</th>
                        <th>Logo Pemerintah Daerah</th>
                        <th>Foto Kantor Instansi Pajak Daerah</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {pkp.map((pkp, index) => (
                        <tr key={pkp.id}>
                            <td>{index + 1}</td>
                            <td>{pkp.npd_pkp}</td>
                            <td>{pkp.kpd_pkp}</td>
                            <td>{pkp.nipd_pkp}</td>
                            <td>{pkp.alamat_pkp}</td>
                            <td>{pkp.kota_pkp}</td>
                            <td>{pkp.kp_pkp}</td>
                            <td>{pkp.tr_pkp}</td>
                            <td>{pkp.tm_pkp}</td>
                            <td>{pkp.nki_pkp}</td>
                            <td>{pkp.tlp_pkp}</td>
                            <td>{pkp.email_pkp}</td>
                            <td>{pkp.lpd_pkp}</td>
                            <td>{pkp.fkipd_pkp}</td>
                            <td>
                                <button className="button is-small is info">Edit</button>
                                <button className="button is-small is danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default PkpList