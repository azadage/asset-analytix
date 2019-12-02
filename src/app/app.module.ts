import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { OptimizationComponent } from './optimization/optimization.component';
import { TaskoptimizationComponent } from './optimization/taskoptimization/taskoptimization.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    OptimizationComponent,
    TaskoptimizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
