function placeAnOrder(orderNumber) {
    console.log("Customer Order: ", orderNumber);
    cookAndDeliverFood(function() {
        console.log("Delivered food order ", orderNumber);
    });
}

//simulate a 5 second operation
function cookAndDeliverFood(callback) {
    setTimeout(callback, 5000);
}


//simulate users webRequest

placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);
placeAnOrder(6);
placeAnOrder(7);