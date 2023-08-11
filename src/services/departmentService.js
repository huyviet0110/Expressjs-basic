import db from '../models/index'

export default class departmentService {
    static getAll = async () => {
        return db.Department.findAll();
    }
    
    static findById = async (departmentId) => {
        return db.Department.findByPk(departmentId);
    }
    
    static findByName = async (departmentName) => {
        return db.Department.findOne({ where: { name: departmentName } });
    }
    
    static create = async (departmentData) => {
        return db.Department.create(departmentData);
    }
    
    static update = async (departmentData) => {
        let departmentDataClone = await Object.assign({}, departmentData);
        delete departmentDataClone.id
        const oldDepartmentInfo = await db.Department.findByPk(departmentData.id);
        if (departmentData.name !== oldDepartmentInfo.name) {
            const { count, rows } = await db.Department.findAndCountAll({ where: { name: departmentData.name } });
            if (count > 0) {
                return false;
            }
        }
        return db.Department.update({ departmentDataClone }, { where: { id: departmentData.id } });
    }
    
    static destroy = async (departmentId) => {
        return db.Department.destroy({ where: { id: departmentId } });
    }
}
