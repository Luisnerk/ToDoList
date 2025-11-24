import { Component, OnInit } from '@angular/core';
import { ToDoItemService } from '../../_services/to-do-item-service';
import { ItodoItem } from '../../_models/itodo-item';
import { ToDoItem } from "../to-do-item/to-do-item";
import { SpinnerService } from '../../_services/spinner-service';

@Component({
  selector: 'app-to-do-container',
  imports: [ToDoItem],
  templateUrl: './to-do-container.html',
  styleUrl: './to-do-container.css'
})
export class ToDoContainer {
  toDoList: ItodoItem[] = [];

  constructor (private toDoService: ToDoItemService, private spinner: SpinnerService) {}

  ngOnInit() {
    this.loadItems();
    this.toDoService.itemObserver$.subscribe(() => this.loadItems());
  }

  loadItems() {
    this.toDoService.getAllItems().subscribe({
      next: response => this.toDoList = response
    });
  }
}
