//declarar estructura de datos que nos permita tener varios valores
//tendra un arreglo que representara los asientos de nuestro avion con false indicando que estan vacios 
//asiento ocupado es igual a valor true
 //declaramos el arreglo con cammell case
 var airlinesSets=[
 	false,
 	false,
 	false,
 	false,
 	false,
 	false,
 	false,
 	false,
 	false,
 	false

 ];
 //contador de nos ayudara a rastrear el nuemero se asientos ocupados
 var busySets = 0;
 //declaramos una funcion que pinte nuestros asientos 
 var paintSeat = function(array){
 	//esta funcion resive como parametro el arreglo que nos va a ayudar a pintar los asientos en el DOM
 	var containerSeats = document.getElementById('seats');

 	/*aplicamos una estructura se Ciclo condicional que sera un for para 
 	 iterar en cada elemento inicializado en i que tendra valor en 0 ,
 	  con una codicion que diga que mientras i sea menor a la longitud de arreglo que vamos a implementar 
 	  i ++
 	 */
 	 for ( i=0; i < array.length; i++){
 	 	//creamos los asientos de una manera dinamica en nuestro DOm
 	 	var seat = document.createElement('div');
 	 	//cada uno de nuestros asientos estara en un div
 	 	seat.className = 'seats';
 	 	//cada uno de los elementos tendra el id que creamos en html seats
        //del primer elemento al 4 en nuestro arrelgo sera primera clase
        //seria del indice 0 al indice 3, y los vamos a poner de color morado
        if(i < 4){
        	seat.style.background='purple';
        	//aplicamos un estilo con color en JS ATRIBUTOS CSS STRING
         }else{
         	seat.style.background='yellow';
         }
 	
 	 //agregamos los elementos dinamicos los asientos a nuestro elemento en el HTML
 	 //QUE EN ESTE CASO ES containerSEATS
   		containerSeats.appendChild(seat);
    }

};

 //creamos la Funcion RESERVAR

 	var reserve = function(){
 		//llamamos al id creado en html 
 		var btn = document.getElementById('btn');
 		//creamos un evento al boton 
 		btn.addEventListener('click',chooseZone);
 	};
 		//y cuando ese click ocurra le decimos que se ejecute una funcion 
 		//no funcionaba correctamente con la forma que enseño la niña en el video
	var chooseZone = function(){
		var choice = prompt(
		'En que Zona Prefieres Reservar \n 1.Primera Clase \n 2.Economica \n\n Por favor ingresa el numero de tu preferencia');
	//creamos un if de flujo condicional si pasa esto ejecuta esto 
		if (choice == 1){
			checkFirstClassZone();
			//invocamos funcion de seleccion de primera clase
		}else if (choise = 2){
			checkEconomicZone();
		}else {
			alert('Por favor ingresa un numero valido');
		}
	};
	

	//crea las funciones 
	var checkFirstClassZone = function(){
		var zone = 'Primera Clase';
		//recore del elemento 0 al elemeto 3 y verifica cuales estan disponibles
		for (var index = 0; index < 4 ; index++){
			//verificar si los puestos estan disponible
			if (airlinesSets[index]== false){
				airlinesSets[index] = true;
//hacemos un break para no seguir recorriendo el for y salir de el .
//rompemos con break
				reserverSeat(index);
				paintTicket(index,zone);
				//implementamos el contador en uno 
				busySets++;

				break;
			} else if (index == 3 && airlinesSets[index] == true){
				reasignEconomicZone();

          }

		};

	};

	var checkEconomicZone = function(){
		var zone = 'Economica';
		//recore del elemento 0 al elemeto 3 y verifica cuales estan disponibles
		for (var index = 4; index < 10 ; index++){
			//verificar si los puestos estan disponible
			if (airlinesSets[index] == false){
				airlinesSets[index] = true;
//hacemos un break para no seguir recorriendo el for y salir de el .
//rompemos con break
				reserverSeat(index);
				//funcion de imprimir tiket en la pantalla y le pasamor el valor de indice
				paintTicket(index, zone);
				//implementamos el contador 
				busySets++;

				break;
			}else if (index == 9 && airlinesSets[index] == true){
				reasignFirstClass();

			}

		};

	};

//funcion que diga cual asiento esta ocupadao
var reserverSeat = function(indexToPoint){
	var seat = document.getElementsByClassName('seats');
	seat[indexToPoint].textContent = 'Ocupado';
};

var reasignEconomicZone = function(zone){
	//vamos  a decirle si todos los haciendo estan reservados.
	if (busySets == 10 ){
		noSeats();
		//funcion que dice que no hay asientos 
		nextFlight();
	}else {
		var reasing = confirm(
			'Ya no quedan asientos disponibles en '+
			 zone + 
			 ':( \n  Quieres resevar en zona Economica');

	 if (reasing == true ){
	 	checkEconomicZone();
	 }else {
	 	nextFlight();
		 }
		}
	};
 var reasignFirstClass = function(zone){
 	if (busySets == 10 ){
		noSeats();
		//funcion que dice que no hay asientos 
		nextFlight();
	}else{
 	var reasing = confirm(
		'Ya no quedan asientos disponibles en '+
		 zone +
		  ':( \n  Quieres resevar en Primera Clase');
		 if (reasing == true ){
		 	checkFierstClassZone();
		 }else {
		 	nextFlight();
		 }
       }
	 };

 //funcion para imprimir TIket 
 //se crea la funcion se llama el contenido y se agrega todo como hijos al elemento padre contenedor tikets 
 //creado en el index

 var paintTicket = function(index, zone){
 	var containerTickets = document.getElementById('tickets')
 	var ticket = document.createElement('div');
 	ticket.className = 'seats';
 	var title = document.createElement('p');
 	var reservedSeating = document.createElement('p');
 	var zoneClass = document.createElement('p');
 	title.textContent = 'Pase de Abordar';
 	reservedSeating.textContent = 'No. de Asientos'+ (index+1);
 	zoneClass.textContent = zone;
 	ticket.appendChild(title);
 	ticket.appendChild(reservedSeating);
 	ticket.appendChild(zoneClass);
 	containerTickets.appendChild(ticket);

 }
  var nextFlight = function(){
 	alert('Nuestro Proximo Vuelo Sale en 3 Horas.')
 };

 //funcion de no asientos 
 var noSeats =function(){
 	alert('Lo Sentimos :( \n Ya no quedan Disponibles en este avion')
 }
 
 
 //invocamos a la funcion para que se ejecute
 paintSeat(airlinesSets);
 reserve();
 alert('hola');