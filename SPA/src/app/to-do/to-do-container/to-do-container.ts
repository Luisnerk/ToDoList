import { Component, OnInit } from '@angular/core';
import { ToDoItemService } from '../../_services/to-do-item-service';
import { ItodoItem } from '../../_models/itodo-item';
import { ToDoItem } from "../to-do-item/to-do-item";
import { SpinnerService } from '../../_services/spinner-service';
import { Pagination } from '../../utils/pagination/pagination';
import { PaginatedResult } from '../../_models/pagination';
import { UserParams } from '../../_models/user-params';

@Component({
  selector: 'app-to-do-container',
  imports: [ToDoItem, Pagination],
  templateUrl: './to-do-container.html',
  styleUrl: './to-do-container.css'
})
export class ToDoContainer {
  toDoList: ItodoItem[] = [];
  pagination: PaginatedResult<ItodoItem[]> = new PaginatedResult();
  userParams = new UserParams();

  constructor (private toDoService: ToDoItemService, private spinner: SpinnerService) {}

  ngOnInit() {
    this.userParams.currentPage = 1;
    this.loadItems();
    this.toDoService.itemObserver$.subscribe(() => this.loadItems());
  }

  loadItems() {
    this.toDoService.getAllItems().subscribe({
      next: response => this.toDoList = response
    });
    this.toDoService.getPagedItems(this.userParams).subscribe({
      next: response => {
        if (response.result){
          this.pagination.result = response.result;
        }
        if (response.pagination){
          this.pagination.pagination = response.pagination;
        }
      }
    })
  }

  changePage(pageNumber: number){
    this.userParams.currentPage = pageNumber;
    this.loadItems();
  }
}
