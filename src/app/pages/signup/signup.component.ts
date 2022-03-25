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
      name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirm: ['', [Validators.required, Validators.minLength(8)]]
    }, {
      validators: [this.matchPasswords.bind(this)]
    });
   }

  ngOnInit(): void {
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  sendData() {
    if(this.form.valid) console.log('Enviar datos', this.form);
    else console.log('Error, faltan datos', this.form);
  }

  matchPasswords() {
    if(!this.form) return;
    const {password, confirm} = this.form.getRawValue();
    if(password === confirm) return null;
    return {passwordMismatch: true};
  }
}
