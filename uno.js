//Navarro Juan Div H Modelo de parcial
/*Nos dedicamos a la venta exclusiva de Discos rígidos.
Debemos realizar la carga de 5(cinco) productos, de cada uno debo obtener los 
siguientes datos:
Tipo: (validar "HDD", "SSD" o "SSDM2")
Precio: (validar entre 5000 y 18000),
Cantidad de unidades (no puede ser 0 o negativo y no debe superar las 50 Unidades).
Marca: (validar “Seagate”, “Western Digital”, “Kingston”)
Capacidad: (validar 250Gb, 500Gb, 1Tb, 2Tb)
Se debe Informar al usuario lo siguiente:
a) Del más barato de los SSD, la cantidad de unidades y marca.
b) Del tipo HDD, el de mayor precio, capacidad de almacenamiento y cantidad de unidades
   disponibles. 
c) Cuántas unidades de HDD hay en total.*/


function mostrar()
{
	var contadorProductos;
	var tipoDeProducto;
	var precioDeProducto;
	var cantidadDeUnidades;
	var marcaDeProducto;
	var capacidadDisco;
	var acumuladorHDD;
	var acumuladorSSD;
	var acumuladorSSDM2;

	contadorProductos=0;
	
	acumuladorHDD=0;
	
	acumuladorSSD=0;
	

	while (contadorProductos<5)
	{
		tipoDeProducto=prompt("Hola, solo disponemos de HDD, SSD Y SSM2. Ingrese el producto que desea comprar");
		while(tipoDeProducto!="HDD"&&tipoDeProducto!="SSD"&&tipoDeProducto!="SSDM2")
		{
			tipoDeProducto=prompt("Error.. Ingrese un producto valido (HDD, SSD Y SSDM2).");
		}
		precioDeProducto=prompt("Ingrese el precio de su "+tipoDeProducto);
		precioDeProducto=parseInt(precioDeProducto);
		while(isNaN(precioDeProducto)||precioDeProducto<5000||precioDeProducto>18000)
		{
			precioDeProducto=prompt("Error.. Ingrese un precio valido (entre 5000 y 18000)");
			precioDeProducto=parseInt(precioDeProducto);
		}
		cantidadDeUnidades=prompt("¿Cuantas unidades de su "+tipoDeProducto+" desea ordenar?");
		cantidadDeUnidades=parseInt(cantidadDeUnidades);
		while(isNaN(cantidadDeUnidades)&&cantidadDeUnidades<1&&cantidadDeUnidades>50)
		{
			cantidadDeUnidades=prompt("Error.. Ingrese una cantidad valida. Solo disponemos de 50 unidades para su producto");
			cantidadDeUnidades=parseInt(cantidadDeUnidades);
		}
		marcaDeProducto=prompt("Ingrese la marca de su "+tipoDeProducto);
		while(marcaDeProducto!="Seagate"&&marcaDeProducto!="Western Digital"&&marcaDeProducto!="Kingston")
		{
			marcaDeProducto=prompt("Error.. Ingrese una marca valida (“Seagate”, “Western Digital” o “Kingston”)");
		}
		capacidadDisco=prompt("Ingrese la capacidad que quiere para su disco (250GB, 500GB, 1TB o 2TB");
		while(capacidadDisco!="250GB"&&capacidadDisco!="500GB"&&capacidadDisco!="1TB"&&capacidadDisco!="2TB")
		{
			capacidadDisco=prompt("Error..Ingrese una capacidad válida (250GB, 500GB, 1TB o 2TB)");
		}
		switch(tipoDeProducto)//Bueno hasta acá llegué :(
		{
			case "HDD":
			acumuladorHDD++;
			break;
			case "SSD":
			acumuladorSSD++;
			break;
		}
		contadorProductos++;
	}
}
