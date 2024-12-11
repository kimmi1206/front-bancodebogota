import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../../../services/cliente.service';
import { Cliente } from '../../../../shared/models/cliente';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  cliente: Cliente = {} as Cliente;

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly clienteService: ClienteService
  ) {
    this.clienteService.queryData.subscribe(async (data: any) => {
      if (data?.data) {
        this.cliente = data.data;
      }
    });
  }

  goBack() {
    this.router.navigate(['/search']);
  }
}
