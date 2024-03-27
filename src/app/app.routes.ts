import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';

export const routes: Routes = [
    {
        path:'profile',
        component:ProfileComponent
    },
    {
        path:'home',
        component:HomeComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'product',
        component:ProductComponent
    }
];
