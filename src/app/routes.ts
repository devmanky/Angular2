import {Routes} from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const appRoutes : Routes = [
    {path:'signin', component: SigninComponent },
    {path:'signup', component: SignupComponent },
    {path:'home', component: HomeComponent},
    {path:'',redirectTo:'signup',pathMatch:'full'}
]