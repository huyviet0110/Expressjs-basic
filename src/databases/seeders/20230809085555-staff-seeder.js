'use strict';
/** @type {import('sequelize-cli').Migration} */

const { faker } = require('@faker-js/faker');
const bcrypt = require('bcrypt');

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('staffs', [{
            department_id: 1,
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password:  bcrypt.hashSync('123123', 10),
            home_town: faker.location.streetAddress(),
            position: 'Developer',
            gender: 0,
            birth_date: faker.date.birthdate(),
            phone_number: faker.phone.number(),
            address: faker.location.streetAddress(),
            created_at: new Date(),
            updated_at: new Date()
        }], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('staffs', null, {});
    }
};
