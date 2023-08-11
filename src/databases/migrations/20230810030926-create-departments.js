'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('departments', {
            id: {
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true
            },
            name: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false,
            },
            createdAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: true,
                type: Sequelize.DATE
            },
            deletedAt: {
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('departments');
    }
};