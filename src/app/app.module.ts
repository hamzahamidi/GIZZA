import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoreModule} from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Feature Modules */
import { ClientContainerModule } from './client-container/client-container.module';

// components
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PageNotFoundComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    ClientContainerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
