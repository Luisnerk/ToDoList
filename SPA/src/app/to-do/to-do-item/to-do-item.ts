import { Component, input } from '@angular/core';
import { ToDoItemService } from '../../_services/to-do-item-service';

@Component({
  selector: 'app-to-do-item',
  imports: [],
  templateUrl: './to-do-item.html',
  styleUrl: './to-do-item.css'
})
export class ToDoItem {
  id = input(-1);
  done = input(false);
  title = input("");
  description = input("");

  constructor (private itemService: ToDoItemService) {}

  deleteItem(id: number) {
    this.itemService.deleteItem(id).subscribe({
      next: response => response.status == 200 ?
                        this.itemService.itemChanged() :
                        console.log("Error al eliminar"),
      error: () => console.log("error")
    });
  }

  doneItem(id: number) {
    this.itemService.setDoneItem(id).subscribe({
      next: response => response.ok ?
                        this.itemService.itemChanged() :
                        console.log("Error al cambiar a hecho"),
            error: () => console.log("Ocurrió un error"),
    })
  }
}
