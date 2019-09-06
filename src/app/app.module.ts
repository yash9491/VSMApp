import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgDragDropModule } from 'ng-drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GraphComponent } from './graph/graph.component';
import { HomeComponent } from './home/home.component';
import {VsminputsModule} from './vsminputs/vsminputs.module';
import {VSMInputsComponent} from './vsminputs/vsminputs.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'Graph',
    component: GraphComponent
  },
  {
    path: 'VSMInputs',
    component: VSMInputsComponent
  },
  { path: '',
  component: HomeComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    VsminputsModule,
    RouterModule.forRoot(appRoutes),
    NgDragDropModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
