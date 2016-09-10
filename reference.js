//Everything is a reference 

var dev = {
    favFood: "noodles",
    favMovie: "Chappie"
};

var Person = dev;

Person.favFood = "cheese";

console.log(dev.favFood);


//difference between == and ===

console.log(19 == '19'); //only compares value
console.log(19 === '19'); //compares value and types