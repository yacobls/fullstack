import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Ppl = db.define('ppl', {
    nip_ppl: DataTypes.INTEGER,
    np_ppl: DataTypes.STRING,
    alamat_ppl: DataTypes.STRING,
    kel_ppl: DataTypes.STRING,
    kec_ppl: DataTypes.STRING,
    kp_ppl: DataTypes.INTEGER,
    nik_ppl: DataTypes.INTEGER,
    tr_ppl: DataTypes.DATE,
    tm_ppl: DataTypes.DATE,
    tlp_ppl: DataTypes.INTEGER,
    email_ppl: DataTypes.STRING,
    foto_ktp_ppl: DataTypes.STRING,
    pas_foto_ppl: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Ppl;

(async()=>{
    await db.sync();
})();