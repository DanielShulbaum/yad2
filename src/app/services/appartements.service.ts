import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Appartement } from '../models/appartement.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AppartementsService {

appartementList:Appartement[]=[
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-11-22'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe',  549586982, 'g@f.com' ,1),
    false, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe',  549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982, 'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  ),
  new Appartement(
    1,  '../../../assets/imgs/appex.jpeg',  2500000, new Date('2022-10-31'), 'גליל', 5, 'דירה',
    'מלכה', 'אשקלון', 5, 2, 150, 'בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלה בלהבלה בלה בלה בלה בלה בלה',
    'משופצת' , 4, new Date('2022-11-10'), 2, 3,
        new User ('Moshe', 549586982,'g@f.com',1),
    true, true, true, false, false, false, true,false,true, false, true, false, true
  )
];


appartementsList$ = new BehaviorSubject<Appartement[]>(this.appartementList);

getAppartementsList(){
  return this.appartementsList$;
}
  constructor() { }
}
