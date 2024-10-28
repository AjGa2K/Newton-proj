//function that sets celsius to Newton

//variable declared
const celsius = 273;

//declaring newton variable aswell as adding the correct equation

let newton = celsius * (33/100);

//rounding down the value of newton
newton = Math.floor(newton);

//logging the results
console.log(`The temperature is ${newton} degrees Newton`);