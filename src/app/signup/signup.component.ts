import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Router} from '@angular/router'
import { UserdetailService } from '../userdetail.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: ['input.ng-invalid{border-left: 5px solid red;} input.ng-valid{border-left: 5px solid green} '],
})
export class SignupComponent implements OnInit {
public lastName="";
public password="";

constructor(private route: Router) { }

  ngOnInit() {
  }
  onSubmit(value : any){
    console.log("You Have Succesfully Register");
  }
}
