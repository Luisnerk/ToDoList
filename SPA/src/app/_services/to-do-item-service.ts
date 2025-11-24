import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ItodoItem } from '../_models/itodo-item';
import { observeNotification } from 'rxjs/internal/Notification';

@Injectable({
  providedIn: 'root'
})
export class ToDoItemService {
  baseUrl: string = environment.apiUrl + "ToDoItem";
  private itemSubject = new Subject<void>();
  itemObserver$ = this.itemSubject.asObservable();

  constructor (private http: HttpClient) {}

  itemChanged() {
    this.itemSubject.next();
  }

  getAllItems(): Observable<ItodoItem[]> {
    return this.http.get<ItodoItem[]>(this.baseUrl+"/all");
  }

  registerItem(model: any) {
    return this.http.post(this.baseUrl, model);
  }

  deleteItem(id: number) {
    const idModel = {id: id};
    return this.http.delete(this.baseUrl + "/delete", {observe: "response", body: idModel});
  }

  setDoneItem(id: number) {
    return this.http.patch(this.baseUrl + "/done", id, {observe: "response"});
  }
}
