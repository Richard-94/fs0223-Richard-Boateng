import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'emails', pathMatch: 'full'},
  { path: 'emails', loadChildren: () => import('./emails/emails.module')
  .then(m => m.EmailsModule) },
{ path: 'shared', loadChildren: () => import('./shared/shared.module')
.then(m => m.SharedModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
