function sortMaker(arr) {

    //    duiti dewaya thakbe;
    // }

    // checking for negative
    if (arr[0] < 0 || arr[1] < 0) {
        return 'Invalid Input';
    }

    // cheaking for equal elements
    if (arr[0] === arr[1]) {
        return 'equal';
    }

    // comparison between small and big element of that array
    if (arr[1] > arr[0]) {
        return arr.reverse();
    }


}

let givenArr = [-3, 8];
const result = sortMaker(givenArr);
console.log(result); 

