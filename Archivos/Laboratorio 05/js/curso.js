//crear un vector que contenga la informacion del registro
var alumno=[];
//creamos un procedimiento para registrar
function Registrar(nomalumno,apealumno,dnialumno,curalumno,turalumno,estalumno){
    var NuevoAlumno={
        nombre:nomalumno,
        apellido:apealumno,
        dni:dnialumno,
        curso:curalumno,
        turno:turalumno,
        estado:estalumno
    };
    alumno.push(NuevoAlumno);
}

//creamos una funcion para mostrar la informacion de registro
function Mostrar(){
    return alumno;
}