import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LobbyComponent } from './lobby/lobby.component';
import { PrivateRoomComponent } from './private-room/private-room.component';
import { RedeemComponent } from './redeem/redeem.component';
import { ShopComponent } from './shop/shop.component';
import { GroupComponent } from './group/group.component';
import { LobbyMainComponent } from './lobby-main/lobby-main.component';

const routes: Routes = [
  {
    path: '',
    component: LobbyComponent,
    children: [
      { path:'', redirectTo: 'lobby-main',pathMatch: 'full'},
      { path: 'lobby-main', component: LobbyMainComponent },
      { path: 'private-room', component: PrivateRoomComponent },
      { path: 'group', component: GroupComponent },
      { path: 'shop', component: ShopComponent },
      { path: 'redeem', component: RedeemComponent },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
