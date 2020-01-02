//Conditionals, functions, scope and loops.

/*
//equals
let equals = 1 === 1;
console.log(equals);
//greater than
let greatThan = 5 > 1;

//less than
let lessThan = 2 < 11;

//greater equal than
let greatEq = 3 >= 2;

//less equal than
let lessEq = 4 <=4;

//not equal
let notEq = 5 !== 4;
*/

/*let storeA = 4.40;
let storeB = 4.40;


function compareStorePrices (storeA, storeB) {
	let storeAIsLower = storeA<storeB;
	if(storeAIsLower) {
		console.log("Store A has a lower price.");
	} else if(storeB < storeA) {
		console.log("Store B has a lower price.");
	} else {
		console.log("Their prices are the same.")
	}
}

compareStorePrices(10, 5);
compareStorePrices(10, 15);*/

/*
function squareNum (base) {
	return base*base;
}

let squaredNumber = squareNum(54);
console.log(squaredNumber);*/

/*let x = 10;

function addNumbers (n, m, x) {
	console.log(x);
	if (1===1){
		let b = 8;
	}
	console.log(b);
	return n+m;
}*/
/*

//					 0 1 2 3 4
let ourArray = [1,2,3,4,5,12,15];
let arrayLength = ourArray.length;

for (i=0; i<arrayLength; i++){
	//console.log("i is equal to: " + i)
	console.log(ourArray[i]);
	for (let j = 0; j<10; j++){
		console.log("j is equal to: " + j);
	}
}*/

let x=0;
while (x<10){
	console.log('Ran');
	x=x+1;
}