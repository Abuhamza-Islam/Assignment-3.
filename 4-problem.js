function findAddress(obj){
    let result = '';
    for(let key in obj){
        result = result + obj[key]+',';
    }
    return result;

}

const givenObj = {street: 10,house:'15A',society:'Earth Perfect'};
const result = findAddress(givenObj);
console.log(result);

