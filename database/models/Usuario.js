module.exports = (sequelize,dataTypes ) => {
    const Usuario = sequelize.define('Usuarios',{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        nombreCompleto: {
            allowNull: false,
            type: dataTypes.STRING
        },
        
        email: {
            allowNull: false, //No acepta nulos
            unique:true,
            type: dataTypes.STRING
        },

        telefono: {
            allowNull: false,
            type: dataTypes.STRING
        },

        is_admin: {
            type: dataTypes.BOOLEAN,
            defaultValue: false
        }
        
        },

        {
            timestamps: false //Evista inconvenientes en el caso de que la tabla no posea columnas de fechas de actualización y de creación
        }
    );

    return Usuario;
}