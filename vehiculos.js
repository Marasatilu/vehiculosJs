const vehicle1 = {
	doors: [3 || 5],
	velMax:range=(0, 100),
	numWheels: 4,
    otor: true,
};

const vehicle2 = {
	doors: 0,
	velMax: range=(0, 80),
	numWheels: 2,
    motor: true,
};

const vehicle3 = {
	doors: 0,
	velMax: range=(0, 40),
	numWheels: 2,
    motor: true,
};

const vehicle4 = {
	doors: 0,
	velMax: range=(0, 50),
	numWheels: 2,
    motor: false,
};



function vehicle (){
	document.getElementById("resultado").value;
	if(vehicle1){
		return 'Coche';
	}else if(vehicle2){
		return 'Moto';
	}else if(vehicle3) {
		return 'Patinete eléctrico';
	}else if(vehicle4){
		return '`Bicicleta';
	}
	return 'Vehiculo desconocido';
	
}

const vehicles=[vehicle1, vehicle2, vehicle3, vehicle4];
console.log(vehicles);

