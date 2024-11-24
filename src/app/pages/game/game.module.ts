import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { PlayGameComponent } from './play-game/play-game.component';
import { LobbyComponent } from './lobby/lobby.component';
import { CoreModule } from '../../core/core.module';
import { PrivateRoomComponent } from './private-room/private-room.component';
import { GroupComponent } from './group/group.component';
import { ShopComponent } from './shop/shop.component';
import { RedeemComponent } from './redeem/redeem.component';
import { LobbySideNavComponent } from './lobby/components/lobby-side-nav/lobby-side-nav.component';
import { LobbyMainComponent } from './lobby-main/lobby-main.component';


@NgModule({
  declarations: [
    PlayGameComponent,
    LobbyComponent,
    PrivateRoomComponent,
    GroupComponent,
    ShopComponent,
    RedeemComponent,
    LobbySideNavComponent,
    LobbyMainComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    SharedModule,
    CoreModule
  ]
})
export class GameModule { }
