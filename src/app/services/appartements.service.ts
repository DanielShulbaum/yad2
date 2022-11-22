import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Appartement } from '../models/appartement.model';
import { User } from '../models/user.model';
import { HttpClient} from '@angular/common/http'
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root'
})
export class AppartementsService {

counter:number=1;


example:{} = {"id":43,"postDate":"2022-11-22T09:58:55.180Z","streetName":"sds","houseNumber":"6","appartementKind":"בית פרטי/קוטג","neighbourhoodName":"","cityName":"dsv","roomsNumber":"4","floorNumber":"3","area":"60","description":"eEfEfW4","floorsInBuilding":"5","entranceDate":"2022-11-30","parkingLots":"1","numberOfBalconies":"3","belongsToUser":{"name":"Seba","password":"Hyperact3","surname":"Gever","phone":536983963,"email":"Seba@gmail.com","idUser":2},"airConditioner":false,"gratings":false,"lift":false,"kosherKitchen":false,"sunBoiler":true,"handicappedAccess":false,"isRenovated":false,"hasShelter":true,"hasStoragePlace":false,"hasTadiranAir":true,"hasFurniture":false,"isFlexEntranceDate":"","hasResidentialUnit":false,"imgPath":[],"price":""}
appartementList:Appartement[]=[

  new Appartement(
    this.counter++,  new Date('2022-11-22'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy',  549586982, 'g@f.com' ,1),
    false, true, true, false, false, true, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  2500500,
  ),
  new Appartement(
    this.counter++,   new Date('2022-09-31'), 'ויצמן', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy',  549586982, 'g@f.com',1),
    true, true, true, false, false, true, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  2545000,
  ),
  new Appartement(
    this.counter++,  new Date('2022-10-1'), 'ויצמן', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982, 'g@f.com',1),
    true, true, true, false, false, true, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  12500000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-2'), 'רמבן', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982, 'g@f.com',1),
    true, true, true, false, false, true, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  25006000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-08-31'), 'רמבן', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982, 'g@f.com',1),
    true, true, true, false, false, true, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  2500560,
  ),
  new Appartement(
    this.counter++,   new Date('2022-08-05'), 'רמבן', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  1000070,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'קקל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'קקל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5500000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'קקל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  6500000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'קקל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-01'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  2600000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'קקל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2020-12-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  2500000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'קקל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  2500000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'הרצל', 5, 'דירה',
    'הכ', 'אשדוד', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  2500000,
  ),
  new Appartement(
    this.counter++,  new Date('2022-10-31'), 'הרצל', 5, 'דירה',
    'גכ', 'חיפה', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  1250000,
  ),
  new Appartement(
    this.counter++,  new Date('2022-10-31'), 'הרצל', 5, 'דירה',
    'גכ', 'חדרה', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'הרצל', 5, 'דירה',
    'גכ', 'חדרה', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'הרצל', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'הרצל', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'הרצל', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'נשיא', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'נשיא', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'נשיא', 5, 'דירה',
    'גכ', 'חדרה', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'נשיא', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'נשיא', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'נשיא', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'נשיא', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בלפור', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בלפור', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בלפור', 5, 'דירה',
    'גכ', 'תל אביב', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בלפור', 5, 'דירה',
    'גכ', 'חדרה', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, true, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בלפור', 5, 'דירה',
    'גכ', 'חדרה', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, true, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בלפור', 5, 'דירה',
    'גכ', 'חדרה', 5, 2, 200, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בן גוריון', 5, 'דירה',
    'גכ', 'חדרה', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2019-03-31'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, true, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בן גוריון', 5, 'דירה',
    'גכ', 'גבעתיים', 10, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-05-22'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בן גוריון', 5, 'דירה',
    'גכ', 'נהריה', 3, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, true, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בן גוריון', 5, 'דירה',
    'גכ', 'רמלה', 2, 3, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'בן גוריון', 5, 'דירה',
    'גכ', 'לוד', 6, 4, 200, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     5, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, true, false, true, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'גכ', 'עפולה', 8, 6, 250, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     7, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, true, true, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5000000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'גכ', 'תל מונד', 9, 1, 350, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     6, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, false, true, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5500000,
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'גכ', 'קיסריה', 9, 1, 350, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     6, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, true, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],
  ),
  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'גכ', 'קיסריה', 9, 1, 350, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     6, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, true, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],
  ),

  new Appartement(
    this.counter++,   new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'גכ', 'קיסריה', 9, 1, 350, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
     6, new Date('2022-11-10'), 2, 3,
        new User ('Moshe','Hyperact3#', 'Levy', 549586982,'g@f.com',1),
    true, true, true, false, true, false, false,false,true, false, true, false, true,
    ['../../../assets/imgs/appex.jpeg'],  5500000,
  ),
];


appartementsList$ = new BehaviorSubject<Appartement[]>(this.appartementList);




constructor(private http:HttpClient,private searchService:SearchService ) { }
getAppartementsList(){
  return this.appartementsList$;
}

getAppartements( filters?:string):Observable<any>{

  if(filters === undefined){
    return this.http.get("http://localhost:3000/appartements?");
  }
  return this.http.get("http://localhost:3000/appartements?" + filters);
}




postAppartements(data:Appartement):Observable<any>{
  const headers = {'content-type': 'application/json'};
  const body = JSON.stringify(data);
  console.log(data);
   return this.http.post('http://localhost:3000/appartements',body,{'headers':headers});

}

postExample(data:any){
  this.http.post('http://localhost:3000/appartements',data);
}
}
