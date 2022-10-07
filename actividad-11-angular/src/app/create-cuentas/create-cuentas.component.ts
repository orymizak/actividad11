import { Component, OnInit } from '@angular/core';
import { Cuentas } from '../cuentas';
import { CuentasService } from '../cuentas.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-create-cuentas',
    templateUrl: './create-cuentas.component.html',
    styleUrls: ['./create-cuentas.component.css']
})

export class CreateCuentasComponent implements OnInit {

cuentas: Cuentas = new Cuentas();

constructor(private cuentasService : CuentasService,
    private router : Router) { }

ngOnInit(): void { }

saveCuenta() {
    this.cuentasService.createCuentas(this.cuentas).subscribe(data => {
        console.log(data);
        this.goToCuentasList();
    },
    error => console.log(error));
}

goToCuentasList() {
    this.router.navigate(['/cuentas']);
}

onSubmit() {
    console.log(this.cuentas);
    this.saveCuenta();
}

}
