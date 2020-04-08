import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Page<T> {
  totalCount: number;
  count: number;
  pageno: number;
  totalpages: number;
  next: string;
  previous: string;
  data: Array<T>;
}

export function queryPaginated<T>(http: HttpClient,urlOrFilter?: string | object): Observable<Page<T>> {
    let params = new HttpParams();
    let baseUrl = 'http://localhost:8080/'
    let url = baseUrl;
    let phNum = 'dummy'
    if (typeof urlOrFilter === 'string') {
      url = url + urlOrFilter;
    } else if (typeof urlOrFilter === 'object') {
      phNum = urlOrFilter['phoneNum']!=''?urlOrFilter['phoneNum']:phNum;
      url = url + 'api/v1/phonenum/'+phNum+'/alphanum';
    }
    return http.get<Page<T>>(url, {
      params: params
    });
}

