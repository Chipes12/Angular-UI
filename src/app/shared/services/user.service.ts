import { Injectable } from '@angular/core';
import {Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private users: Usuario[] = [{name: 'Juan', email: 'juan@correo.com'},
                            {name: 'Juana', email:'juana@correo.com'}];

  getUsers(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.users);
      }, 1000);
    });
  }

}
