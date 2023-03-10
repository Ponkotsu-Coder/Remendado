import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  data = "";

  constructor(public auth: Auth, public database: Database, private router: Router) { }
  logUser(value: any) {
    const starCountRef = ref(this.database, 'users/' + value.email);
    onValue(starCountRef, (snapshot) => {
     const db = snapshot.val();  
    this.data = db.password;
  
     }); 
     if (this.data == value.password){
      const date = new Date();
  update(ref(this.database, 'users/' + value.email),{
  last_login:date
  } );
  
  
  this.router.navigate(['/viewerr'])
  }else{
  alert('wrong credential!');
  }
    }
  
  ngOnInit(): void {
  }

}
