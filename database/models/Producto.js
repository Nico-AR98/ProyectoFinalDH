module.exports = (sequelize,dataTypes ) => {
    const Producto = sequelize.define('Productos',{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        nombre: {
            allowNull: false,
            type: dataTypes.STRING
        },

        descripcion: {
            allowNull: false,
            type: dataTypes.TEXT
        },

        talle: {
            allowNull: false,
            type:dataTypes.ENUM("XS","S","M","L","XL"),//El tipo ENUM solo admite uno de los valores enunciados
        },

        color: {
            allowNull: false,
            type:dataTypes.STRING
        },

        precio:{
            allowNull: false,
            type: dataTypes.INTEGER
        },

        stock:{
            allowNull: false,
            type: dataTypes.INTEGER
        },

        imagen:{
            allowNull: false,
            type: dataTypes.TEXT
        },
    },

    {
        timestamps: false }
    );

    Producto.associate(function(models){
        Producto.belongsTo(models.Categorias,{
            foreignKey: 'id_categoria',
            as:'categorias'
        })
    })


    return Categoria;
}