import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        component:HomeComponent,
        path:''
    },
    {
        component:AboutComponent,
        path:'About'
    },
    {
        component:ProductComponent,
        path:'Product'
    },
    {
        component:ContactComponent,
        path:'Contact'
    },
    {
        component:ProfileComponent,
        path:'Profile'
    }

];
