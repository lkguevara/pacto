const DBCategoryGetAll = require("../../database/controllers/products/categoriesGet/DBCategoryGetAll");

const getAllCategorys = async (req, res) => {
  try {
    const categorys = await DBCategoryGetAll();

    if (categorys) {
      return res.status(200).json(categorys);
    }

    return res.status(404).json({ msg: "Error 404, not found" });
  } catch (err) {
    return res.status(500).json({
      error: err.message,
      msg: `¡Error al traer las categorias!`,
    });
  }
};

module.exports = getAllCategorys;
