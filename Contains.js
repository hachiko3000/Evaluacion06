const ages = [7, 45, 34, 13];

const myContains = (array, callback) => {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return callback(array[i])
        }
    }
}

const get34 = (age) => {
    return age === 34;
}

const agesContains34 = myContains(ages, get34);
console.log(agesContains34);
