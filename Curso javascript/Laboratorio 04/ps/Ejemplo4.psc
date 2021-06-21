Algoritmo Ejemplo4
	//definiendo variables
	Definir can Como Entero;
	Definir pre, sbt, des, igv, tot Como Real;
	Definir cat, com como texto;
	//inicializando variables
	can=0; pre=0; sbt=0; des=0; igv=0; tot=0; cat=""; com="";
	//capturando valores
	Escribir "Ingresa la catidad a comrar:";
	leer can;
	Escribir "Ingresa el precio del producto:";
	leer pre;
	Escribir "Ingresa la categoria:";
	leer cat;
	Escribir "Ingresa el tipo de comprobante [f]Factura o [b]Boleta:";
	leer com;
	//realizando operaciones
	sbt=can*pre;
	//condicion
	si (cat="d") Entonces
		des=sbt*0.07;
	SiNo
		des=sbt*0.03;
	FinSi
	
	si (com="f") Entonces
		igv=sbt*0.18;
	SiNo
		igv=0;
	FinSi
	tot=sbt-des+igv;
	//mostrando resultados
	Escribir "El subtotal es: ",sbt;
	Escribir "El descuento es: ",des;
	Escribir "El igv es: ",igv;
	Escribir "El total es: ",tot;
FinAlgoritmo
