import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Po = db.define('po', {
    nwp_po: DataTypes.STRING,
    no_po: DataTypes.STRING,
    oi_po: DataTypes.INTEGER,
    alamat_po: DataTypes.STRING,
    kec_po: DataTypes.STRING,
    kel_po: DataTypes.STRING,
    kp_po: DataTypes.INTEGER,
    nama_pic_outlet: DataTypes.STRING,
    email_pic_outlet: DataTypes.STRING,
    tlp_pic_outlet: DataTypes.INTEGER,
    tr_po: DataTypes.DATE,
    tm_po: DataTypes.DATE,
    fio_po: DataTypes.STRING,
    ftdo_po: DataTypes.STRING,
    si_po: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Po;

(async()=>{
    await db.sync();
})();