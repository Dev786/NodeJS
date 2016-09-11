//Other Method best one
module.exports = {

    printAvatar: function() {
        console.log("Avatar");
    },
    printChappie: function() {
        console.log("Chappie");
    },
    favMovie: "The Matrix"
};

function printAvatar() {
    console.log("Avatar U");
}

function printGOT() {
    console.log("GOT A");
}

//Common export method
module.exports.avatar = printAvatar;