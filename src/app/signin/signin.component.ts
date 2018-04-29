import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserdetailService} from '../userdetail.service'
import {ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[UserdetailService]
})
export class SigninComponent implements OnInit {
public lastname1="";
public password1="";
  constructor(private route:ActivatedRoute,private ro:Router ) { }

  ngOnInit() {
  
  }
  onSubmit(value:any){
   if(this.lastname1==this.route.snapshot.params['foo']&& this.password1==this.route.snapshot.params['zoo'])
   {
    this.ro.navigateByUrl('/home');
   }
   else
   {
     console.log("Who the fuck r u??")
   }
  }

}
