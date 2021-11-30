//this is me playing around with code. Nothing to see here yet.

//Taken from: https://www.youtube.com/watch?v=5AWRivBk0Gw


class House{
	constructor(color){
		this.color = color
	}

	getFurniture(){
		return 'sofa'
	}

}

const houseObject = new House('red')
const houseObject2 = new House('blue')


console.log(houseObject.color)
console.log(houseObject.getFurniture())

console.log(houseObject2.color)
console.log(houseObject2.getFurniture())

//Object destructuring: https://www.youtube.com/watch?v=NIq3qLaHCIs