'use strict';
/** @type {import('sequelize-cli').Migration} */

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('staffs', [{
            departmentId: 1,
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password:  bcrypt.hashSync('123123', 10),
            homeTown: faker.location.streetAddress(),
            position: 'Developer',
            gender: 0,
            birthDate: faker.date.birthdate(),
            phoneNumber: faker.phone.number(),
            address: faker.location.streetAddress(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('staffs', null, {});
    }
};
