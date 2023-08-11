'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('staffs', {
            id: {
                field: 'id',
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true
            },
            departmentId: {
                field: 'department_id',
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false
            },
            name: {
                field: 'name',
                type: Sequelize.STRING(100),
                allowNull: false
            },
            email: {
                field: 'email',
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                field: 'password',
                type: Sequelize.STRING,
                allowNull: false
            },
            homeTown: {
                field: 'home_town',
                type: Sequelize.STRING,
                allowNull: true
            },
            position: {
                field: 'position',
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 0
            },
            gender: {
                field: 'gender',
                type: Sequelize.INTEGER(1),
                allowNull: true
            },
            birthDate: {
                field: 'birth_date',
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            phoneNumber: {
                field: 'phone_number',
                type: Sequelize.CHAR(20),
                allowNull: true
            },
            address: {
                field: 'address',
                type: Sequelize.STRING,
                allowNull: true
            },
            createdAt: {
                field: 'created_at',
                type: Sequelize.DATE,
                allowNull: true
            },
            updatedAt: {
                field: 'updated_at',
                type: Sequelize.DATE,
                allowNull: true
            },
            deletedAt: {
                field: 'deleted_at',
                type: Sequelize.DATE,
                allowNull: true
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('staffs');
    }
}