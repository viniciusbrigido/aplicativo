import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CalculadoraService } from '../services/calculadora/calculadora.service';

@Component({
  selector: 'app-tab6',
  templateUrl: './tab6.page.html',
  styleUrls: ['./tab6.page.scss'],
})
export class Tab6Page {
  numero1 = '';
  numero2 = '';
  operacao = '';
  display = '';
  resultado: number;

  constructor(
    private toastController: ToastController,
    private calculadoraService: CalculadoraService
  ) { }

  adicionaNumero(numero: string) {
    if (this.operacao === '') {
      this.numero1 += numero;
    } else {
      this.numero2 += numero;
    }
    this.display += numero;
  }

  adicionaOperacao(operacao: string) {
    if (this.resultado === null) {
      this.exibirToast('A equação não pode começar com uma operação.');
      return;
    }
    if (this.operacao === '') {
      this.operacao = operacao;
      this.display += operacao;
      return;
    }

    if (this.numero2 !== '') {
      this.resultado = this.calculadoraService.calcular(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao);

      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = '';
      this.display = this.numero1 + operacao;
    }
  }

  calculaResultado() {
    this.resultado = this.calculadoraService.calcular(parseFloat(this.numero1), parseFloat(this.numero2), this.operacao);
    this.display = this.resultado.toString();
  }

  async exibirToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'top',
      icon: 'hand-left-outline'
    });
    toast.present();
  }
}
