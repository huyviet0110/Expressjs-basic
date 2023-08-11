'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('staffs', {
            id: {
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true
            },
            departmentId: {
                type: Sequelize.BIGINT.UNSIGNED,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING(100),
                allowNull: false
            },
            email: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            homeTown: {
                type: Sequelize.STRING,
                allowNull: true
            },
            position: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 0
            },
            gender: {
                type: Sequelize.INTEGER(1),
                allowNull: true
            },
            birthDate: {
                type: Sequelize.DATEONLY,
                allowNull: true
            },
            phoneNumber: {
                type: Sequelize.CHAR(20),
                allowNull: true
            },
            address: {
                type: Sequelize.STRING,
                allowNull: true
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: true
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: true
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('staffs');
    }
}