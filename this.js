//This - refers to the object which calls it

var Dev = {
    printFirstName: function() {
        console.log("my name is devashish");
        console.log(this === Dev);
    }
};

Dev.printFirstName();




//the default calling context is global

function doSomething() {
    console.log("my name is devashish");
    //checking for object Dev
    console.log(this === Dev);

    //Checking for global
    console.log(this === global);
}

doSomething();