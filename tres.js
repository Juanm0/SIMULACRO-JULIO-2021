/*
Luego de la campaña de vacunación “COVID19” se realizó un censo sobre la
población para obtener distintos datos estadísticos:
Se ingresará hasta que usuario decida:
Nombre.
Edad.
Género: “F”, “M”, “NB”.
Vacuna: “SputnikV”, “AstraZeneca”, “Otra”.
Temperatura corporal (durante la primera noche).
Se pide:  
a) El nombre y vacuna de la persona con mayor temperatura.
b) Cuántas personas de género Femenino recibieron la vacuna SputnikV.
c) La cantidad de personas de género No Binario que recibieron AstraZeneca u Otra.
d) Cuántas personas que se aplicaron la vacuna AstraZeneca, presentaron una temperatura mayor a 38°.
e) El promedio de edad de los hombres que se aplicaron la vacuna 
SputnikV y no presentaron fiebre. (37° o menos)
*/

function mostrar()
{
	let IngresarDatos;
	let nombreIngresado;
	let edadIngresada;
	let generoIngresado;
	let vacunaIngresada;
	let temperaturaIngresada;
	let temperaturaMayor;
	let banderaTemperaturaMayor;
	let personaMayorTemperatura;
	let vacunaMayorTemperatura;

	IngresarDatos=true;
	banderaTemperaturaMayor=true;
	while(IngresarDatos==true)
	{
		nombreIngresado=prompt("INGRESE SU NOMBRE");
		while(nombreIngresado==""||!(isNaN(nombreIngresado)))
		{
			nombreIngresado=prompt("Error.. Ingrese un nombre valido");
		}
		edadIngresada=prompt("Ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		while(isNaN(edadIngresada))
		{
			edadIngresada=prompt("Ingrese una edad valida");
		}
		generoIngresado=prompt("Ingrese su genero (“F”, “M”, “NB”)")
		while(generoIngresado!="F"&&generoIngresado!="M"&&generoIngresado!="NB")
		{
			generoIngresado=prompt("Ingrese un genero valido (“F”, “M”, “NB”)");
		}
		vacunaIngresada=prompt("Ingrese la vacuna que le aplicaron");
		while(vacunaIngresada!="SputnikV"&&vacunaIngresada!="AstraZeneca"&&vacunaIngresada!="Otro")
		{
			vacunaIngresada=prompt("Error.. Ingrese un dato valido (“SputnikV”, “AstraZeneca”, “Otra”)");
		}
		temperaturaIngresada=prompt("Qué temperatura tuvo en la primera noche?");
		temperaturaIngresada=parseInt(temperaturaIngresada);
		while(isNaN(temperaturaIngresada))
		{
			temperaturaIngresada=prompt("Error..Ingrese una temperatura valida");
		}
		if(temperaturaIngresada>temperaturaMayor||banderaTemperaturaMayor==true)
		{
			temperaturaMayor=temperaturaIngresada;
			personaMayorTemperatura=nombreIngresado;
			vacunaMayorTemperatura=vacunaIngresada;
			banderaTemperaturaMayor=false;
		}
		IngresarDatos=confirm("Ingresar datos de otra persona?");
	}
	document.write("Su nombre es "+nombreIngresado);
}
