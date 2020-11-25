import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-forms',
  templateUrl: './model-driven-forms.component.html',
  styleUrls: ['./model-driven-forms.component.css']
})
export class ModelDrivenFormsComponent implements OnInit {
  LoginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm()
  }

  onSubmit(){
    console.log(this.LoginForm.value);
  }

  private initForm() {
    this.LoginForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    });
  }
}
