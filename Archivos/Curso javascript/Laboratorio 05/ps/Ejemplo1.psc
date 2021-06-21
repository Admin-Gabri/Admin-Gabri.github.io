Algoritmo Ejemplo1
	//definiendo variables
	definir est como entero;
	definir men como texto;
	//inicializamos valores
	est=0; men="";
	//caoturando valores
	escribir "Ingrese un numero de estacion 1 o 2 o 3 o 4:";
	leer est;
	//condicion
	si(est=1) Entonces
		men="Verano";
	SiNo
		si (est=2) Entonces
			men="Otoño";
		SiNo
			si (est=3) entonces
				men="Invierno";
			SiNo
				si (est=4) entonces
					men="Primavera";
				SiNo
					men="No seria un numero valido";
				Finsi
			FinSi
		FinSi
	FinSi
	escribir "La estacion es: ",men;
FinAlgoritmo
