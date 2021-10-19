import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { OneComponent } from './one/one.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {path:'one',component:OneComponent},
  {path:'two',component:StudentComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    StudentComponent,
    ],

  imports: [
    BrowserModule,AppRoutingModule,MatToolbarModule,MatListModule,MatFormFieldModule,
    BrowserAnimationsModule,MatCardModule,MatIconModule,MatSelectModule,MatRadioModule,
    MatButtonModule,MatSidenavModule,RouterModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
