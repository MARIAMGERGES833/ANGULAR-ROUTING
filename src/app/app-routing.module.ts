import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { SettingComponent } from './setting/setting.component';
import { WebComponent } from './web/web.component';
import { MobileComponent } from './mobile/mobile.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomeComponent, title:"home"},
  {path:"contact", component:ContactComponent, title:"contact"},
  {path:"portfolio" , component:PortfolioComponent, title:"portfolio"},
  {path:"about" , component:AboutComponent, title:"about"},
  {path:"setting" , component:SettingComponent,title:"setting",
   children:[
    {path:"",redirectTo:"web",pathMatch:"full"},
    {path:"web",component:WebComponent},
    {path:"mobile",component:MobileComponent},
   ]
},




  {path:"**" , component:NotfoundComponent, title:"404 not found"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
