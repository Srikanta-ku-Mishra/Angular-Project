import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { AwsComponent } from './aws/aws.component';

const routes: Routes = [
  {path: 'angular' , component: AngularComponent},
  {path: 'aws' , component: AwsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
