const restaurant = function(){
	let order_food = "ceviche";
	if (order_food == "ceviche"){
		console.log("Elegiste Ceviche");
	}
	else if(order_food == "tacos_pastor"){
		console.log("Elegiste Tacos al Pator");
	}
	else if(order_food == "empanada chilena"){
		console.log("Elegiste Empanada Chilena");
	}
	else{
		console.log("Mejor come una hambuerguesa");
	}
}

restaurant();