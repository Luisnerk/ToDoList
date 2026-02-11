import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable, Subject } from 'rxjs';
import { ItodoItem } from '../_models/itodo-item';
import { observeNotification } from 'rxjs/internal/Notification';
import { PaginatedResult } from '../_models/pagination';
import { ToDoItem } from '../to-do/to-do-item/to-do-item';
import { UserParams } from '../_models/user-params';

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

  getPagedItems(userParams: UserParams): Observable<PaginatedResult<ItodoItem[]>> {
    let params = new HttpParams();
    const paginatedResult: PaginatedResult<ItodoItem[]> = new PaginatedResult<ItodoItem[]>;

    params = params.set("pageNumber", userParams.currentPage)
          .set("pageSize", userParams.pagesize);

          console.log(params.toString())

    return this.http.get<ItodoItem[]>(this.baseUrl + "/page", {observe: "response", params: params}).pipe(
      map(response => {
        if (response.body) {
          paginatedResult.result = response.body;
        }
        const pagination = response.headers.get("Pagination");
        if (pagination){
          paginatedResult.pagination = JSON.parse(pagination);
        }
        return paginatedResult;
      })
    );
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
