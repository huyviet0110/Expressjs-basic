import db from '../models/index'
const bcrypt = require('bcrypt');

export default class StaffService {
    static getAll = async () => {
        return db.Staff.findAll();
    }
    
    static findById = async (staffId) => {
        return db.Staff.findByPk(staffId);
    }
    
    static findByEmail = async (staffEmail) => {
        return db.Staff.findOne({ where: { email: staffEmail } });
    }
    
    static create = async (staffData) => {
        return db.Staff.create(staffData);
    }
    
    static update = async (staffData) => {
        let staffDataClone = await Object.assign({}, staffData);
        delete staffDataClone.id;
        const oldStaffInfo = await db.Staff.findByPk(staffData.id);
        if (staffData.email !== oldStaffInfo.email) {
            const { count, rows } = await db.Staff.findAndCountAll({ where: { email: staffData.email } });
            if (count > 0) {
                return false;
            }
        }
        return db.Staff.update(staffDataClone, { where: { id: staffData.id } });
    }
    
    static destroy = async (staffId) => {
        return db.Staff.destroy({ where: { id: staffId } });
    }
    
    static getStaffByDepartment = async (departmentId) => {
        return db.Staff.findAll({ where: { departmentId: departmentId } });
    }
}
