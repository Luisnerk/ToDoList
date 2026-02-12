import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { UserParams } from '../../_models/user-params';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.css'
})
export class Pagination {
  @Input({required: true}) currentPage: number | undefined;
  @Input({required: true}) totalPages: number | undefined = 0;
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();
  userParams: UserParams = new UserParams();
  pages: number[] =[];


  ngOnChanges(){
    console.log("Total: " + this.totalPages)
    this.pages = Array(this.totalPages).fill(1).map((x, i) => i+1)
  }

  changePage(page: number){
    if (page > 0 && page <= this.totalPages!){
      this.pageChanged.emit(page);
    }
  }
}
