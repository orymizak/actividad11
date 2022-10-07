import { CuentasService } from '../cuentas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Cuentas } from '../cuentas';

@Component({
  selector: 'app-update-cuentas',
  templateUrl: './update-cuentas.component.html',
  styleUrls: ['./update-cuentas.component.css']
})

export class UpdateCuentasComponent implements OnInit {

  id: number;
  cuentas: Cuentas = new Cuentas();

  constructor(private route : ActivatedRoute, private router : Router,
    private cuentasService : CuentasService) { }

  ngOnInit(): void {
    this.cuentas = new Cuentas();
    
    this.id = this.route.snapshot.params["id"];

    this.cuentasService.getCuentasById(this.id).subscribe(data => { 
        console.log(data);
        this.cuentas = data;
      }, error => console.log(error));
  }

  updateCuentas() {
    this.cuentasService.updateCuentas(this.id, this.cuentas)
    .subscribe(data => {
      console.log(data);
      this.cuentas = new Cuentas();
      this.gotoCuentasList();
    }, error => console.log(error));
  }

  onSubmit() {
    this.cuentasService.updateCuentas(this.id, this.cuentas).subscribe(data => {
        this.gotoCuentasList();
    }, error => console.log(error));
  }

  gotoCuentasList() {
    this.router.navigate(['/cuentas']);
  }

}
