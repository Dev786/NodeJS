var movies = require('./movies');

var myMovie = movies();
myMovie.favMovie = "The persuit of happiness";
console.log("Dev's fav movies " + myMovie.favMovie);




//Creating an object
function dev() {
    this.name = " ";
    this.printName = function print() {
        console.log("My name is " + this.name);
    };
}

var devashish = new dev();
devashish.name = "Devashish";
devashish.printName();