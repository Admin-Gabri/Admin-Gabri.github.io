//crear un vector que contenga la informacion del registro
var producto=[];
//creamos un procedimiento para registrar
function Registrar(nomproducto,catproducto,preproducto,canproducto){
    var NuevoProducto={
        nombre:nomproducto,
        categoria:catproducto,
        precio:preproducto,
        cantidad:canproducto
    };
    producto.push(NuevoProducto);
}

//creamos una funcion para mostrar la informacion de registro
function Mostrar(){
    return producto;
}