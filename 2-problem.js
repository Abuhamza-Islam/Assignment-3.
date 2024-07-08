function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return 'its not string';
    } else if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}

let givenStr1 = 10;
let givenStr2 = 10;
const result = matchFinder(givenStr1, givenStr2);
console.log(result);
