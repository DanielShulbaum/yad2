import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  selectedAssetType=null;
  selectedCondition=null;
  assetTypes = ['דירה','דירת גן','בית פרטי/קוטג','גג פנטהאוז',
    'מגרשים','דופלקס','דירת נופש','דו משפחתי','מרתף/פרטר',
    'טריפלקס','יחידת דיור','משק חקלאי/נחלה','משק עזר',
    'דיור מוגן','בניין מגורים','סטודיו/לופט','מחסן',
    'חניה','קב` רכישה/זכות לנכס','כללי'
  ];
  assetCondition=['חדש מקבלן (לא גרו בו בכלל)',
  'חדש (נכס בן עד 5 שנים)',
  'משופץ (שופץ ב5 השנים האחרונות)',
  'במצב שמור (במצב טוב, לא שופץ)',
  'דרוש שיפוץ (זקוק לעבודת שיפוץ)',];
  assetAdressForm!:FormGroup;
  assetDetails!:FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.assetAdressForm = this.fb.group({

    })
  }

  onSubmitAdressForm(){

  }
  onSubmitDetailsForm(){

  }
}
