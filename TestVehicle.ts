import { VehicleNameSpace } from './IVehicle'
import { getBikeDetails, getMileage } from './VehicleFn'

//Instance Creation
let myBike: VehicleNameSpace.Bike = { companyName: "Hero ", model: "Splendor iSmart", yearMf: 2016 }

//Calling both Functions
getBikeDetails(myBike);
getMileage(myBike, 102.5);

