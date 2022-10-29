import { User } from "./user.model";

export class Appartement {


  constructor (
    public id:number,
    public imgPath:string,
    public price:number,
    public postDate:Date,
    public streetName:string,
    public houseNumber:number,
    public appartementKind:string,
    public neighbourhoodName:string,
    public cityName:string,
    public roomsNumber:number,
    public floorNumber:number,
    public area:number,
    public description:string,
    public condition:string,
    public floorsInBuilding:number,
    public entranceDate:Date,
    public parkingLots:number,
    public belongsToUser:User,

    public airConditioner:boolean,
    public gratings:boolean,
    public lift:boolean,
    public kosherKitchen:boolean,
    public sunBoiler:boolean,
    public handicappedAccess:boolean,
    public isRenovated:boolean,
    public hasShelter:boolean,
    public hasStoragePlace:boolean,
    public hasTadiranAir:boolean,


     ) {

  }

}
