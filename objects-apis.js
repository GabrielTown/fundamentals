/*
	objects, interfaces, API's
 */

/*let dog = {
	name: "Jeff",
	color: "black",
	breed: "Pit",
	size: "medium",
	bark: function(typeOfBark){
		console.log("Bark!");
	},
};

dog.bark();*/

function x(y) {
	y.num=y.num+5;
	console.log(y);
}

let y = {
	name: "Tom",
	num: 10,
};
x(y);
console.log(y);