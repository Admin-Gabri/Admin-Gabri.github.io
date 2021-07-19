//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM")
var chkEst=document.getElementById("chkEst")
var btnRegistrar=document.getElementById("btnRegistrar");

//creamos un procedimiento para mostrar
function MostrarAlumno(){
    //declaramos una variable para guardar los datos
    var listaalumno=Mostrar();
    //selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbAlumno tbody");
    tbody.innerHTML="";
    //agregamos al tbody las filas que se registren
    for(var i=0;i<listaalumno.length;i++){
        //declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        //declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);   
        var titulodni=fila.insertCell(2);
        var titulocur=fila.insertCell(3);
        var titulotur=fila.insertCell(4);
        var tituloest=fila.insertCell(5);
        //agregamos los valores
        titulonom.innerHTML=listaalumno[i].nombre;
        tituloape.innerHTML=listaalumno[i].apellido;
        titulodni.innerHTML=listaalumno[i].dni;
        titulocur.innerHTML=listaalumno[i].curso;
        titulotur.innerHTML=listaalumno[i].turno;
        tituloest.innerHTML=listaalumno[i].estado;
        tbody.appendChild(fila);
    }
}

//creamos un procedimiento para registrar los datos
function RegistrarAlumno(){
    //validacion de datos
    //creamos procedimientos para validar
    //esta en un JS
    //capturando valores
    var nom=txtNom.value;
    var ape=txtApe.value;
    var dni=txtDni.value;
    var tur=rbM.value;
    var est=chkEst.value;
    var cur="";
    var indice=cboCurso.selectedIndex;
    switch(indice){
        case 1:
            cur="Diseño web";
        case 2:
            cur="Base de datos";
        case 3:
            cur="Programacion Java";
            break;
        default:
            cur="";
            break;
    }
    //llamamos al procedimiento Registrar
    Registrar(nom,ape,dni,cur,tur,est);
    //llamamos al procedimiento para mostrar
    MostrarAlumno();   
}

//llamamos al procedimiento registrar en el evento del boton
btnRegistrar.addEventListener("click",RegistrarAlumno);

// --------------------------------------------------------------------------------
//declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtDni=document.getElementById("txtDni");
var cboCurso=document.getElementById("cboCurso");
var rbM=document.getElementById("rbM");
var rbT=document.getElementById("rbT");
var rbn=document.getElementById("rbN");
var chkEst=document.getElementById("chkEst");

//nombre
function ValidarNombre(){
    if(txtNom.value=="" || txtNom.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus nombres</li>";
    }else{
        error.style.display="none"
    }
}

//apellido
function ValidarApellido(){
    if(txtApe.value=="" || txtApe.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese sus apellidos</li>";
    }else{
        error.style.display="none"
    }
}

//dni
function ValidarDni(){
    if(txtDni.value=="" || txtDni.value==null){
        error.style.display="block";
        error.innerHTML+="<li>Por favor ingrese su DNI</li>";
    }else{
        error.style.display="none"
    }
}

//curso
function ValidarCurso(){
    if(cboCurso.value=="" || cboCurso.value=="" || cboCurso.value==""){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione su curso</li>";
    }else{
        error.style.display="none"
    }
}

//turno
function ValidarTurno(){
    if(rbM.checked==false && rbT.checked==false && rbN.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione un turno</li>";
    }else{
        error.style.display="none"
    }
}

//estado
function ValidarEstado(){
    if(chkEst.checked==false){
        error.style.display="block";
        error.innerHTML+="<li>Por favor seleccione el estado</li>";
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
    ValidarApellido();
    ValidarDni();
    ValidarCurso();
    ValidarTurno();
    ValidarEstado();
}
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
        LlamarClase("Por favor ingresa tus nombres");
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu DNI");
        LlamarClase("Por favor seleccione su curso");
        LlamarClase("Por favor selecciona un Turno");
        LlamarClase("Por favor selecciona el estado");
        txtNom.focus();
    }else if(txtApe.value=="" || txtApe.value==null){
        LlamarClase("Por favor ingresa tus apellidos");
        LlamarClase("Por favor ingresa tu DNI");
        LlamarClase("Por favor seleccione su curso");
        LlamarClase("Por favor selecciona un Turno");
        LlamarClase("Por favor selecciona el estado");
        txtApe.focus();
    }else if(txtDni.value=="" || txtDni.value==null){
        LlamarClase("Por favor ingresa tu DNI");
        LlamarClase("Por favor seleccione su curso");
        LlamarClase("Por favor selecciona un Turno");
        LlamarClase("Por favor selecciona el estado");
        txtDni.focus();
    }else if(cboCurso.value=="" || cboCurso.value=="" || cboCurso.value==""){
        LlamarClase("Por favor seleccione su curso");
        LlamarClase("Por favor selecciona un Turno");
        LlamarClase("Por favor selecciona el estado");
        cboCurso.focus();
    }else if(rbM.checked==false && rbT.checked==false && rbN.checked==false){
        LlamarClase("Por favor selecciona un Turno");
        LlamarClase("Por favor selecciona el estado");
        rbM.focus();
    }else if(chkEst.checked==false){
        LlamarClase("Por favor selecciona el estado");
        chkEst.focus();
    }else{
        alert("Se registro correctamente");
        error.innerHTML="";
    }  
}
