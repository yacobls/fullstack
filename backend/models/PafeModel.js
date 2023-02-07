import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Pafe = db.define('pafe', {
    nwp_pafe: DataTypes.STRING,
    no_pafe: DataTypes.STRING,
    oi_pafe: DataTypes.INTEGER,
    ja_pafe: DataTypes.STRING,
    afe_pafe: DataTypes.STRING,
    ip_pafe: DataTypes.STRING,
    ai_pafe: DataTypes.INTEGER,
    tr_pafe: DataTypes.DATE,
    tm_pafe: DataTypes.DATE,
    longitude_pafe: DataTypes.STRING,
    latitude_pafe: DataTypes.STRING,
    fpa_pafe: DataTypes.STRING,
    fsna_pafe: DataTypes.STRING,
    sn_pafe: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Pafe;

// (async()=>{
//     await db.sync();
// })();