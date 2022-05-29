import { Component, OnInit } from '@angular/core';
import { Imovel } from '../dto/imovel';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page implements OnInit{
  imoveis: Array<Imovel>;

  constructor() { }

  ngOnInit(): void {
    this.getImoveis();
  }

  getImoveis() {
    console.log('teste');
    this.imoveis = [
      new Imovel('Apartamento com 2 Quartos para Venda ou Aluguel, 80 m²',
      295.000, 'Rua Eduardo Viviani', '400', 'Boa Vista', 'Juiz de Fora', 'MG'),

      new Imovel('Parque Jardim dos Bandeirantes, 80 m²',
      152.074, 'Avenida Garcia Rodrigues Paes', '0', 'Jóckey Club', 'Juiz de Fora', 'MG'),

      new Imovel('Apartamento com 2 Quartos à Venda, 72 m²',
      138.000, 'Rua Aurora Tôrres', '10', 'Santa Luzia', 'Juiz de Fora', 'MG')];
  }
}
