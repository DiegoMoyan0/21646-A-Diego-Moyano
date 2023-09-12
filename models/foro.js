import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Tema = sequelize.define('Tema', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false, // Asegura que el título sea obligatorio
    },
    contenido: {
        type: DataTypes.TEXT,
        allowNull: false, // Asegura que el contenido sea obligatorio
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: true, // Puedes cambiar a false si el autor es obligatorio
    },
}, {
    timestamps: true, // Agrega createdAt y updatedAt automáticamente
});

export default Tema;
