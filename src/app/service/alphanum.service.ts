import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Page, queryPaginated} from '../pagination';
import { FormControl,FormsModule,ReactiveFormsModule, FormGroup, Validators,FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})

export class AlphaNumService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAlphaNumericPhNum(filterForm: FormGroup,urlOrFilter?: string | object): Observable<Page<Object>> {
       if(filterForm.valid){
          return queryPaginated<Page<Object>>(this.http,urlOrFilter);
        }
        return new Observable<Page<any>>();
  }
}
