'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Department extends Model {
        static associate(models) {
            this.hasMany(models.Staff);
        }
    }

    Department.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, {
        sequelize,
        tableName: 'departments',
        timestamps: true,
        paranoid: true
    });

    return Department;
};