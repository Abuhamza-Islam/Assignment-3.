

function cubeNumber(number){
   if(typeof number !== 'number'){
      return 'it is not a valid number';
   }
   else{
      return Math.pow(number,3);
   }
}

let num = 9;
const numberOfCube = cubeNumber(num); 
console.log(numberOfCube);