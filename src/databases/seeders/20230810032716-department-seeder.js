'use strict';
/** @type {import('sequelize-cli').Migration} */

const { faker } = require('@faker-js/faker')

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('departments', [{
            name: faker.person.jobTitle(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('departments', null, {});
    }
};
