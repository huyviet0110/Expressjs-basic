const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Staff extends Model {
        static associate(models) {
            this.belongsTo(models.Department)
        }
    }

    Staff.init({
        departmentId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        homeTown: {
            type: DataTypes.STRING(255),
            allowNull: true
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: self.POSITION_DEVELOPER
        },
        gender: {
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: self.GENDER_FEMALE
        },
        birthDate: {
            type: DataTypes.DATE,
            allowNull: true
        },
        phoneNumber: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        address: {
            type: DataTypes.STRING(255),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'staffs',
        timestamps: true,
        paranoid: true
    })

    return Staff;
}
