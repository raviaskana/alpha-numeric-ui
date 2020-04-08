import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { AlphaNumService } from '../../service/alphanum.service';
import { map, debounceTime, merge, share, startWith, switchMap, filter,distinctUntilChanged } from 'rxjs/operators';
import { FormControl,FormsModule,ReactiveFormsModule, FormGroup, Validators,FormBuilder } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ErrorStateMatcher } from '@angular/material/core';


  import { Page } from '../../pagination';

@Component({
  selector: 'app-alphanum-phnum',
  templateUrl: './alphanum-phnum.component.html',
  styleUrls: ['./alphanum-phnum.component.css']
})
export class AlphanumPhnumComponent implements OnInit {
  page: Observable<Page<Object>>;
  pageUrl = new Subject<string>();
  dataLoaded: Promise<boolean>;
  filterForm: FormGroup;
  mobNumberPattern = "^((\\+1-?)|0)?[0-9]{10}$";
  constructor(
      private service: AlphaNumService,
      private formBuilder: FormBuilder
         ) {
            this.filterForm = new FormGroup({
                  phoneNum : new FormControl()
                });
            this.filterForm = this.formBuilder.group({
                    phoneNum: ['', Validators.compose([Validators.required,Validators.pattern(
                    '(([(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\/\\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4}?|[-\s\.]?[0-9]{1,2})'
                      )])]
             });
            this.page = this.filterForm.valueChanges.pipe(merge(this.pageUrl),distinctUntilChanged(),switchMap(urlOrFilter => this.service.getAlphaNumericPhNum(this.filterForm,urlOrFilter)),share());
            this.dataLoaded = Promise.resolve(true);
    }

  onPageChanged(url: string) {
      this.pageUrl.next(url);
  }

  ngOnInit(): void {
  }
}

