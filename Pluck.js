var array = {
    name: ["Pedro", "Juan", "Francisco", "Diego", "Jesica"],
    ID: [1, 2, 3, 4]
};
console.log(pluck(array, 'name'));

function pluck(array, key) {
    return (array[key]);
};
