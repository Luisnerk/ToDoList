import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItodoItem } from '../_models/itodo-item';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {
  baseUrl: string = environment.apiUrl;

  constructor (private http: HttpClient) {}

  getAllItems(): Observable<ItodoItem[]> {
    return this.http.get<ItodoItem[]>(this.baseUrl+"ToDoItem/all");
  }
}
