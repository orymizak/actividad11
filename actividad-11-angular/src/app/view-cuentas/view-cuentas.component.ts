import { Component, OnInit } from '@angular/core';
import { Cuentas } from '../cuentas';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CuentasService } from '../cuentas.service';

@Component({
  selector: 'app-view-cuentas',
  templateUrl: './view-cuentas.component.html',
  styleUrls: ['./view-cuentas.component.css']
})
export class ViewCuentasComponent implements OnInit {

  id: number;
  cuentas: Cuentas;

  constructor(private route: ActivatedRoute, 
    private cuentasService: CuentasService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.cuentas = new Cuentas();
    this.cuentasService.getCuentasById(this.id).subscribe(data => {
      this.cuentas = data;
    });
  }

  // getInfoCuenta() {

  // }

}
