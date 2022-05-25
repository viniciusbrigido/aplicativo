import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      nome: [cliente.nome, Validators.required],
      tipo: [cliente.tipo, Validators.required],
      genero: [cliente.genero, Validators.required],
      dataNascimento: [cliente.dataNascimento, Validators.required],
      observacao: [cliente.observacao],
      inativo: [cliente.inativo]
    })
  }

  onSubmit() {
    console.log(this.formCliente.value);
    console.log(this.formCliente);
    this.formCliente.reset(new Cliente());
  }
}
