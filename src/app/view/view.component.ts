import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/compat/database';
import { Database, ref, set, update, remove,query,orderByChild,equalTo} from '@angular/fire/database';
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import { getDatabase, onValue} from "firebase/database";
import { Observable, Subscribable } from 'rxjs';



interface Item {
  password: string;
}


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  users!: Observable<any[]>;
  constructor(public database: Database, private db: AngularFireDatabase) {
  this.users = db.list('/users').valueChanges();
   }
   
  ngOnInit(): void {


  }
  del(value: any){
    remove(ref(this.database, 'users/' + value));
    alert('Deleted Successfully')
  }
  email = "";
password = "";
     edit(z: any) {
       this.email = z.email;
      this.password = z.password;
     }
  
     update(value:any){

   if(value.password == ""){
    alert('put the new password!');
   }else{
    update(ref(this.database, 'users/' + value.email), {
      password: value.password
    }); 
    this.email = "";
    this.password = "";
   alert('User updated!');
     
   }
    }
 
 


}