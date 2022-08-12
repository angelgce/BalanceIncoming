import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { GraficaComponent } from './grafica/grafica/grafica.component';
import { BalanceComponent } from './balance/balance/balance.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalendarioComponent,
    GraficaComponent,
    BalanceComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
