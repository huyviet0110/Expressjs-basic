'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('departments', {
            id: {
                field: 'id',
                primaryKey: true,
                type: Sequelize.BIGINT.UNSIGNED,
                autoIncrement: true
            },
            name: {
                field: 'name',
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },
            description: {
                field: 'description',
                type: Sequelize.TEXT,
                allowNull: false
            },
            createdAt: {
                field: 'created_at',
                allowNull: true,
                type: Sequelize.DATE
            },
            updatedAt: {
                field: 'updated_at',
                allowNull: true,
                type: Sequelize.DATE
            },
            deletedAt: {
                field: 'deleted_at',
                allowNull: true,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('departments');
    }
};