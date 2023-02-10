import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';
import { Database, set, ref, update } from '@angular/fire/database';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zedric';
  constructor() {

  }


  // registerUser(value: any) {
  //   createUserWithEmailAndPassword(this.auth, value.email, value.password)
  //     .then((userCredential) => {
  //       // Signed in 
  //       const user = userCredential.user;

  //       set(ref(this.database, 'users/' + user.uid), {
  //         username: value.username,
  //         email: value.email
  //       });

  //       alert('user created! ');
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;

  //       alert(errorMessage);
  //       // ..
  //     });
  // }




 // constructor (private auth: Auth){

 // }

 // signup(Email:string , Password: string){
  //  return from (createUserWithEmailAndPassword(this.auth, Email, Password)).pipe
  //}

  

}