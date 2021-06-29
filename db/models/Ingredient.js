const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define("Ingredient", {
    name: { type: DataTypes.STRING, allowNull: false, unique: true },

    image: { type: DataTypes.STRING, allowNull: false },

    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
  });

  SequelizeSlugify.slugifyModel(Ingredient, {
    source: ["name"],
  });
    Ingredient.associate = (models) => {
      models.Category.hasMany(Ingredient, {
        foreignKey: "categoryId",
        as: "ingredients",
        allowNull: false,
      });

      Ingredient.belongsTo(models.Category, {
        foreignKey: "categoryId",
      });
      
};
return Ingredient
}
