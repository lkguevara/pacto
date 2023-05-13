const City = require('../../../models/city');

const getCitiesByDepartmentId = async (depId) => {
    try{
        console.log("Hola", depId)
        const res = await City.find().where({department: depId}).lean();

        return res;
    } catch (err){
        throw new Error (`Error al obtener las ciudades ${err}`);
    }
}

module.exports = getCitiesByDepartmentId;