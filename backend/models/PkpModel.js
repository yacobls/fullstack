import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pkp = db.define('pkp', {
    npd_pkp: DataTypes.STRING,
    kpd_pkp: DataTypes.INTEGER,
    nipd_pkp: DataTypes.STRING,
    tr_pkp: DataTypes.DATE,
    tm_pkp: DataTypes.DATE,
    alamat_pkp: DataTypes.STRING,
    kota_pkp: DataTypes.STRING,
    kp_pkp: DataTypes.INTEGER,
    nki_pkp: DataTypes.STRING,
    tlp_pkp: DataTypes.INTEGER,
    email_pkp: DataTypes.STRING,
    lpd_pkp: DataTypes.STRING,
    fkipd_pkp: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Pkp;

// (async()=>{
//     await db.sync();
// })();