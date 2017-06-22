
import { VehicleNameSpace } from './IVehicle'
  
export function getBikeDetails(bike: VehicleNameSpace.Bike){
    console.log(`My Bike Details are :-  
    Company: ${ bike.companyName } 
    Model: ${ bike.model } 
    Year: ${ bike.yearMf }`);
} 
export function getMileage(bike: VehicleNameSpace.Bike, mileage: number) {
    console.log(bike.model + ' mileage is '+ mileage + ' kpl');
}
