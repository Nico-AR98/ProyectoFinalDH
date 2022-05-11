module.exports = (sequelize,dataTypes ) => {
    const Categoria = sequelize.define('Categorias',{
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },

        nombreCompleto: {
            allowNull: false,
            type: dataTypes.STRING
        },
    },
    {
        timestamps: false }
    );

    /*
    Categoria.associate(function(models){
        Categoria.hasMany(models.Productos,{
            foreignKey: 'id_categoria',
            as: 'productos'
        }) //Con esto se establece la relación entre categoria y productos
    })*/


    return Categoria;
}