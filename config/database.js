import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("mi_foro", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export const startDb = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
