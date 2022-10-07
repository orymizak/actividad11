import { CreateCuentasComponent } from './create-cuentas/create-cuentas.component';
import { CuentasListComponent }   from './cuentas-list/cuentas-list.component';
import { HttpClientModule }       from '@angular/common/http';
import { AppRoutingModule }       from './app-routing.module';
import { BrowserModule }          from '@angular/platform-browser';
import { AppComponent }           from './app.component';
import { FormsModule }            from '@angular/forms'; 
import { NgModule }               from '@angular/core';
import { UpdateCuentasComponent } from './update-cuentas/update-cuentas.component';
import { ViewCuentasComponent } from './view-cuentas/view-cuentas.component';

@NgModule({
  declarations: [
    AppComponent,
    CuentasListComponent,
    CreateCuentasComponent,
    UpdateCuentasComponent,
    ViewCuentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
