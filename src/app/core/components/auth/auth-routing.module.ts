import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../pages/components/home/home.component';
import { SobreComponent } from '../../pages/components/sobre/sobre.component';
import { SignComponent } from './pages/sign/sign.component';

const routes: Routes = [
  {
    path: '',
    component: SignComponent,
  },
  { path: 'home', component: HomeComponent },
  { path: 'sobre', component: SobreComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
