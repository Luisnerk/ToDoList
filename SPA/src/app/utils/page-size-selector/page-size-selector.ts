import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-page-size-selector',
  imports: [FormsModule],
  templateUrl: './page-size-selector.html',
  styleUrl: './page-size-selector.css'
})
export class PageSizeSelector {
  @Output() pageSize: EventEmitter<number> = new EventEmitter<number>();
  @Input() tag: string | undefined;
  selectedValue: number = 10;

  selectValueChange(){
    this.pageSize.emit(this.selectedValue);
  }
}
