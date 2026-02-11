import { Component, computed, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoContainer } from "./to-do/to-do-container/to-do-container";
import { ToDoForm } from "./to-do/to-do-form/to-do-form";
import { NgxSpinnerComponent } from "ngx-spinner";
import { SpinnerService } from './_services/spinner-service';
import { Pagination } from "./utils/pagination/pagination";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoContainer, ToDoForm, NgxSpinnerComponent, Pagination],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SPA');

  constructor(private spinner: SpinnerService) {
  }
}
