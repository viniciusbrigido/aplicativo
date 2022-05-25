import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Cliente } from '../clientes/shared/cliente';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page {
  formCliente: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = this.formBuilder.group({
      nome: [cliente.nome],
      tipo: [cliente.tipo],
      genero: [cliente.genero],
      dataNascimento: [cliente.dataNascimento],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    this.formCliente.reset(new Cliente());
  }
}
