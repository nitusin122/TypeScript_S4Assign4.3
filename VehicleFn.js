"use strict";
function getBikeDetails(bike) {
    console.log("My Bike Details are :-  \n    Company: " + bike.companyName + " \n    Model: " + bike.model + " \n    Year: " + bike.yearMf);
}
exports.getBikeDetails = getBikeDetails;
function getMileage(bike, mileage) {
    console.log(bike.model + ' mileage is ' + mileage + ' kpl');
}
exports.getMileage = getMileage;
