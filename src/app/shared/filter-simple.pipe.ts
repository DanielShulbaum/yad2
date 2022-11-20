import { Pipe, PipeTransform } from '@angular/core';
import { Appartement } from '../models/appartement.model';

@Pipe({
  name: 'filterSimple'
})
export class FilterSimplePipe implements PipeTransform {

  transform(items:Appartement[],filterWithPictures:boolean, filterWithPrice:boolean) {
    let sortedItems:Appartement[]=[];
// not finished
    return sortedItems;
  }

}
