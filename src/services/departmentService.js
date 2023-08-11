import db from '../models/index'

const getAll = async () => {
    return db.Department.findAll();
}

const findById = async (departmentId) => {
    return db.Department.findByPk(departmentId);
}

const findByName = async (departmentName) => {
    return db.Department.findOne({ where: { name: departmentName } });
}

const create = async (departmentData) => {
    return db.Department.create(departmentData);
}

const update = async (departmentData) => {
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

const destroy = async (departmentId) => {
    return db.Department.destroy({ where: { id: departmentId } });
}

module.exports = {
    getAll,
    findById,
    findByName,
    create,
    update,
    destroy
}