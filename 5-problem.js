function canPay(changeArray, totalDue) {
  const arr = changeArray;

  if (arr.length === 0) {
    return "It's an empty array";
  }

  arrSum = 0;
  for (let i = 0; i < arr.length; i++) {
    arrSum = arrSum + arr[i];    
  }


if(arrSum >= totalDue){
    return true;
}else if(arrSum < totalDue){
    return false;
}

}

const givenArray = [2,3];
const givenCheapPrice = 10;
const isGivenCheap = canPay(givenArray, givenCheapPrice);
console.log(isGivenCheap);
