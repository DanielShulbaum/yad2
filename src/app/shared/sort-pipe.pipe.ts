import { Pipe, PipeTransform } from '@angular/core';
import { Appartement } from '../models/appartement.model';

@Pipe({
  name: 'sortPipe'
})
export class SortPipePipe implements PipeTransform {

  transform(items:Appartement[],sortType:number) {
    let sortedItems:Appartement[] = [];
    if(sortType===2){
      sortedItems = this.sortDescending(items);
    } else if(sortType===1){
      sortedItems = this.sortAscending(items);
    }else{
      sortedItems=this.sortByDate(items);
    }
    return sortedItems;
  }
  sortByDate(items:Appartement[]){
    return [...items.sort(function(a,b) {
      let keyA = new Date(a.postDate),
      keyB = new Date(b.postDate);
      if(keyA > keyB) return -1;
      if(keyA < keyB) return 1;
      return 0;
    }
    )];
  }
  sortAscending(items:Appartement[]){
    return [...items.sort((a,b) => {
      if(a.price === undefined){
        return 1;
      }
      if(b.price===undefined){
        return -1;
      }
      if(a.price===b.price){
        return 0;
      }
      return a.price<b.price?-1:1;
    }
    )];
  }

  sortDescending(items:Appartement[]){
    return [...items.sort((a,b) => {
      if(a.price === undefined){
        return 1;
      }
      if(b.price===undefined){
        return -1;
      }
      if(a.price===b.price){
        return 0;
      }
      return a.price < b.price ?1:-1;
    }
    )];
  }
}
