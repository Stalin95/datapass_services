import { NewComponent } from './new/new.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { New2Component } from './new2/new2.component';

const routes: Routes = [
 { 
   path:'new',
  component: NewComponent
},
{
  path:'new2',
  component:New2Component

}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
