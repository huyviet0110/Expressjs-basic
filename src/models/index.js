import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import config from '../configs/database';

const db = {};

const sequelize = (config.use_env_variable)
    ? new Sequelize(process.env[config.use_env_variable], config)
    : new Sequelize(config.database, config.username, config.password, config);

fs.readdirSync(__dirname).filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js');
}).forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model
});

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;