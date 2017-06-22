"use strict";
var VehicleFn_1 = require("./VehicleFn");
//Instance Creation
var myBike = { companyName: "Hero ", model: "Splendor iSmart", yearMf: 2016 };
//Calling both Functions
VehicleFn_1.getBikeDetails(myBike);
VehicleFn_1.getMileage(myBike, 102.5);
