import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppService } from './app.service';
import { actionReducer, getParamReducer } from './store/reducer';
import { incrementReducer } from './store/reducer';
import { HttpClientModule } from '@angular/common/http';
import { AppEffects } from './store/effect';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ toggle: actionReducer, increment: incrementReducer, get: getParamReducer }),
    EffectsModule.forRoot([AppEffects])
  ],

  declarations: [
    AppComponent,
    HelloComponent,
    HeaderComponent,
    FooterComponent
  ],

  bootstrap: [AppComponent],

  providers: [AppService]
})
export class AppModule {}
