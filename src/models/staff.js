const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Staff extends Model {
        static associate(models) {
            this.belongsTo(models.Department, {
                foreignKey: 'department_id'
            })
        }
    }

    Staff.init({
        departmentId: {
            field: 'department_id',
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false
        },
        name: {
            field: 'name',
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            field: 'email',
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password: {
            field: 'password',
            type: DataTypes.STRING(255),
            allowNull: false
        },
        homeTown: {
            field: 'home_town',
            type: DataTypes.STRING(255),
            allowNull: true
        },
        position: {
            field: 'position',
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: self.POSITION_DEVELOPER
        },
        gender: {
            field: 'gender',
            type: DataTypes.INTEGER(1),
            allowNull: true,
            defaultValue: self.GENDER_FEMALE
        },
        birthDate: {
            field: 'birth_date',
            type: DataTypes.DATE,
            allowNull: true
        },
        phoneNumber: {
            field: 'phone_number',
            type: DataTypes.STRING(20),
            allowNull: true
        },
        address: {
            field: 'address',
            type: DataTypes.STRING(255),
            allowNull: true
        },
        createdAt: {
            field: 'created_at',
            type: DataTypes.DATE,
            allowNull: true
        },
        updatedAt: {
            field: 'updated_at',
            type: DataTypes.DATE,
            allowNull: true
        },
        deletedAt: {
            field: 'deleted_at',
            type: DataTypes.DATE,
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
