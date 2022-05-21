import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  peso: number
  altura: number
  resultado: string
  descricao: string

  constructor() {}

  calcular() {
    let imc: number = this.peso / (this.altura ** 2)
    this.resultado = 'IMC: ' + imc.toFixed(2);
    this.descricao = this.getDescricaoImc(imc);
  }

  getDescricaoImc(imc: number): string {
    let descricaoImc: string = ''
    if (imc < 18.5) {
      descricaoImc = 'Abaixo do peso normal'
    } else if (imc < 25) {
      descricaoImc = 'Peso normal'
    } else if (imc < 30) {
      descricaoImc = 'Excesso de peso'
    } else if (imc < 35) {
      descricaoImc = 'Obesidade classe I'
    } else if (imc < 40) {
      descricaoImc = 'Obesidade classe II'
    } else {
      descricaoImc = 'Obesidade classe III'
    }
    return descricaoImc;
  }
}
