import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Cliente } from '../dto/cliente';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  formCliente: FormGroup;
  clientes: Cliente[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formCliente = this.formBuilder.group({
      nome: [null, Validators.required],
      tipo: [null, Validators.required],
      genero: [null, Validators.required],
      dataNascimento: [null, Validators.required],
      observacao: [null],
      inativo: [null]
    });
  }

  onSubmit() {
    console.log(this.formCliente.value);
    this.formCliente.reset();
  }
}
