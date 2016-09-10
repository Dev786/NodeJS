//Prototyping
//can add properties and methods to object

function user() {
    this.name = "";
    this.life = 100;
    this.giveLife = function(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
        this.life--;
    }

    this.printLife = function() {
        console.log(this.name + " has " + this.life + " life now");
    }

}

var Bucky = new user();
var Dev = new user();

Bucky.name = "Bucky";
Dev.name = "Devashish";

Dev.giveLife(Bucky);
Bucky.printLife();

var obj = {
    name: "Devashish",
    print: function() {
        console.log(this.name);
    }
}

obj.print();



//prototype - adding new Function in existing function0

//Adding method
user.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(targetPlayer.name + " lost " + 3 + " life because of " + this.name);
}

Dev.uppercut(Bucky);
Bucky.printLife();
Bucky.uppercut(Dev);
Dev.printLife();

//Adding property
user.prototype.magic = 60;
console.log(Dev.magic);
console.log(Bucky.magic);

//Ends





//Practice
function IamAwesome() {
    this.name = "";
    this.sachi = true;
    this.bragg = function() {
        console.log("Its " + this.sachi + " that " + this.name + " is awesome");
    }
}

var Devashish = new IamAwesome();
Devashish.name = "Devashish";
Devashish.bragg();

//Ends