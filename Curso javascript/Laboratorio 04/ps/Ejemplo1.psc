Algoritmo Ejemplo1
	//definiendo variables
	definir edad como entero;
	definir men como texto;
	//inicializando variables
	edad=0; men="";
	//capturamos valores
	escribir "Ingresa tu edad:";
	Leer edad;
	//condicion
	si (edad>=18)Entonces
		men="Eres mayor de edad";
	SiNo
		men="Eres menor de edad";
	FinSi
	//mostrando resultados
	escribir "La edad es: ", edad;
	escribir men;
FinAlgoritmo
