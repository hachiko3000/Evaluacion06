  
//without_.without(array, *values)
//Returns a copy of the array with all instances of the values removed.

// _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
// => [2, 3, 4]

myWithout = (array, callback) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const getwithout34 = (age) => {
    return age != 34;
}

const without34 = myWithout(ages, getwithout34);
console.log(without34);
