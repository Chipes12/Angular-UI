import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  showPassword: boolean = false;
  form: FormGroup;


  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      'name': ['', Validators.required],
      'username': ['', Validators.required]
    });
   }

  ngOnInit(): void {
  }

}
