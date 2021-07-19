//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var cbocategoria=document.getElementById("cbocategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarProducto(){
    //declaramos una variable para guardar los datos
    var listaproducto=Mostrar();
    //selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbProducto tbody");
    tbody.innerHTML="";
    //agregamos al tbody las filas que se registren
    for(var i=0;i<listaproducto.length;i++){
        //declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var titulocat=fila.insertCell(1);   
        var titulopre=fila.insertCell(2);
        var titulocan=fila.insertCell(3);
        //agregamos los valores
        titulonom.innerHTML=listaproducto[i].nombre;
        titulocat.innerHTML=listaproducto[i].categoria;
        titulopre.innerHTML=listaproducto[i].precio;
        titulocan.innerHTML=listaproducto[i].cantidad;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarProducto(){
    //validacion de datos
    //capturando valores
    var nom=txtNom.value;
    var cat="";
    var indice=cbocategoria.selectedIndex;
    switch(indice){
        case 1:
            cat="Entretenimiento";
        case 2:
            cat="Tecnologia";
        case 3:
            cat="Linea Blanca";
            break;
        default:
            cat="";
            break;
    }
    var pre=txtPre.value;
    var can=txtCan.value;
    //llamamos al procedimiento Registrar
    Registrar(nom,cat,pre,can);
    //llamamos al procedimiento para mostrar
    MostrarProducto();
}


//llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarProducto);


// -------------------------------------------------------------------------------

//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var cbocategoria=document.getElementById("cbocategoria");
var txtPre=document.getElementById("txtPre");
var txtCan=document.getElementById("txtCan");

//nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombres</li>";
    }else{
        error.style.display="none"
    }
}

//categoria
function ValidarCategoria(){
    if(cbocategoria.value==""){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingresa la categoria</li>";
    }else{
        error.style.display="none"
    }
}

//precio
function ValidarPrecio(){
    if(txtPre.value=="" || txtPre.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor selecciona el precio</li>";
    }else{
        error.style.display="none"
    }
}

//cantidad
function ValidarCantidad(){
    if(txtCan.value=="" || txtCan.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione la cantidad</li>";
    }else{
        error.style.display="none"
    }
}

//creamos un procedimiento para validar 
function Validar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    //llamamos a los procedimientos para validar
    ValidarNombre();
    ValidarCategoria();
    ValidarPrecio();
    ValidarCantidad();

//creamos un procedimiento para asignar la clase error
function LlamarClase(m){
    error.style.display="block";
    error.innerHTML+="<li>"+m+"</li>"
}

//creamos una funcion Registrar
function Registrar(){
    //reiniciamos el estilo error
    error.innerHTML="";
    if(txtNom.value=="" || txtNom.value==null){
        LlamarClase("Por favor ingresa el nombre");
        LlamarClase("Por favor ingresa la categoria");
        LlamarClase("Por favor selecciona el precio");
        LlamarClase("Por favor selecciona la cantidad");
        txtNom.focus();
    }else if(cbocategoria.value==""){
        LlamarClase("Por favor ingresa la categoria");
        LlamarClase("Por favor selecciona el precio");
        LlamarClase("Por favor selecciona la cantidad");
        cbocategoria.focus();
    }else if(txtPre.value=="" || txtPre.value==null){
        LlamarClase("Por favor selecciona el precio");
        LlamarClase("Por favor selecciona la cantidad");
        rbM.focus();
    }else if(txtCan.value=="" || txtCan.value==null){
        LlamarClase("Por favor selecciona la cantidad");
        chkEst.focus();
    }else{
        alert("Se registro correctamente");
        error.innerHTML="";
    }
}
}