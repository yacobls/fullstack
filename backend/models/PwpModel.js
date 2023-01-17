import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pwp = db.define('pwp', {
    np_pwp: DataTypes.INTEGER,
    nwp_pwp: DataTypes.STRING,
    alamat_pwp: DataTypes.STRING,
    kel_pwp: DataTypes.STRING,
    kec_pwp: DataTypes.STRING,
    kp_pwp: DataTypes.INTEGER,
    npwdp_pwp: DataTypes.STRING,
    email_pwp: DataTypes.STRING,
    tr_pwp: DataTypes.DATE,
    tm_pwp: DataTypes.DATE,
    jumlah_outlet_pwp: DataTypes.STRING,
    jenis_outlet_pwp: DataTypes.STRING,
    jenis_pajak_pwp: DataTypes.STRING,
    logo_pwp: DataTypes.STRING,
    ftdp_pwp: DataTypes.STRING,
    si_pwp: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Pwp;

(async()=>{
    await db.sync();
})();