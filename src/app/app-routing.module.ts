import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DeviceViewComponent} from './device-view/device-view.component';
import {AuthComponent} from './auth/auth.component';
import {SingleDeviceComponent} from './single-device/single-device.component';
import {FourOFourComponent} from './four-o-four/four-o-four.component';
import {AuthGuard} from './services/auth-guard.service';
import {EditDeviceComponent} from './edit-device/edit-device.component';
import {UserListComponent} from './user-list/user-list.component';
import {NewUserComponent} from './new-user/new-user.component';

const routes: Routes = [
  {
    path: 'devices',
    component: DeviceViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'devices/:id',
    component: SingleDeviceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: EditDeviceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'users',
    component: UserListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-user',
    component: NewUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: '',
    component: DeviceViewComponent
  },
  {
    path: 'not-found',
    component: FourOFourComponent
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
