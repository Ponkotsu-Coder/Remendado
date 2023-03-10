import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { from } from 'rxjs';
import { Database, set, ref, update, onValue } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  ab = "";

  constructor(public auth: Auth, public database: Database, private router: Router) {}
  ngOnInit(): void {}
  
  
  registerUser(value: any) {
    const starCountRef = ref(this.database, 'users/' + value.email);
    onValue(starCountRef, (snapshot) => {
     const db = snapshot.val();  
     this.ab = db.email
 
     }); 
  
      
     if (  value.email == null || value.email == "" || value.password == null || value.password == "" 
      ){
      alert('Fill the form ');
     }else{
      if(this.ab == value.email){
       alert('user email already exist!'); 
      }
  
        
      else {
        
    set(ref(this.database, 'users/' + value.email), {
        email: value.email,
        password: value.password
  
  
       }); 
       alert('account created!');
       this.router.navigate(['/login'])
      }
     }
  }
  }



