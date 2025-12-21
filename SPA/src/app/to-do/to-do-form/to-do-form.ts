import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToDoItemService } from '../../_services/to-do-item-service';


@Component({
  selector: 'app-to-do-form',
  imports: [ReactiveFormsModule],
  templateUrl: './to-do-form.html',
  styleUrl: './to-do-form.css'
})
export class ToDoForm {
  @ViewChild('closeModal') closeModalBtn!: ElementRef;
  form: FormGroup = new FormGroup({});

  constructor (private fb: FormBuilder, private toDoservice: ToDoItemService) {}

  ngOnInit() {
    this.initializeForm();
  }
  
  initializeForm() {
    console.log("hadsiuhasdhuias")
    this.form = this.fb.group({
      title: ["", [Validators.maxLength(20), Validators.required]],
      description: ["", [Validators.maxLength(200), Validators.required]]
    });
  }
  
  closeModal() {
    this.closeModalBtn.nativeElement.click();
  }

  clearInputs() {
    this.form.setValue({title: "", description: ""} )
  }
  
  submitForm() {
    if (this.form.valid){
      const values = {...this.form.value}
      this.toDoservice.registerItem(values).subscribe({
        next: () => {
          this.closeModal();
          this.clearInputs();
          this.toDoservice.itemChanged();
        }
      });
    }
  }
}
