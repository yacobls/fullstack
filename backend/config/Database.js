import {Sequelize} from "sequelize";

const db = new Sequelize('tgn', 'root', 'Teknog@r2022',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;