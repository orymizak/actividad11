import { Component, OnInit } from '@angular/core';
import { Cuentas } from '../cuentas';
import { CuentasService } from '../cuentas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuentas-list',
  templateUrl: './cuentas-list.component.html',
  styleUrls: ['./cuentas-list.component.css']
})

export class CuentasListComponent implements OnInit {

  cuentas : Cuentas[];

  constructor(private cuentasService : CuentasService,
    private router : Router) { }

  ngOnInit(): void {
    this.getCuentas();
  }

  private getCuentas() {
    this.cuentasService.getCuentasList().subscribe(data => {
      this.cuentas = data;
    });
  }

  updateCuentas(id: number) {
    this.router.navigate(['update-cuentas', id]);
  }

  deleteCuentas(id: number) {
    this.cuentasService.deleteCuentas(id).subscribe(data => {
      console.log(data);
      this.getCuentas();
    });
  }

  viewCuentas(id: number) {
    this.router.navigate(['view-cuentas', id])
  }

}
