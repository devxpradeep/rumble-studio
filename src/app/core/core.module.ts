import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedModule } from '../shared/shared.module';
import { AccountModule } from '../pages/account/account.module';
import { LobbyHeaderComponent } from './lobby-header/lobby-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    LobbyHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AccountModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    LobbyHeaderComponent
  ]
})
export class CoreModule { }
