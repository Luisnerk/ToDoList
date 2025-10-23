import { Component, input } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  imports: [],
  templateUrl: './to-do-item.html',
  styleUrl: './to-do-item.css'
})
export class ToDoItem {
  title = input("");
  description = input("");
}
