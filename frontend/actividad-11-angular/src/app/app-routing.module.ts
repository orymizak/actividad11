import { CreateCuentasComponent } from './create-cuentas/create-cuentas.component';
import { UpdateCuentasComponent } from './update-cuentas/update-cuentas.component';
import { CuentasListComponent } from './cuentas-list/cuentas-list.component';
import { ViewCuentasComponent } from './view-cuentas/view-cuentas.component';
import { Routes, RouterModule }from '@angular/router';
import { NgModule } from '@angular/core';

const routes : Routes = [
    { path: 'cuentas', component:  CuentasListComponent },
    { path: 'create-cuentas', component:  CreateCuentasComponent },
    { path: '', redirectTo:  'cuentas', pathMatch: 'full' },
    { path: 'update-cuentas/:id', component: UpdateCuentasComponent },
    { path: 'view-cuentas/:id', component: ViewCuentasComponent },
];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule],
})

export class AppRoutingModule { }