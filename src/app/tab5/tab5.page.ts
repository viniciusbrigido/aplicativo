import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {

  num1: number;
  num2: number;
  resultado: number;

  constructor(private toastController: ToastController) { }

  somar() {
    if (this.num1 == null || this.num2 == null) {
      this.exibirToast('Preencha os dois números.');
      return;
    }
    this.resultado = this.num1 + this.num2;
  }

  subtrair() {
    if (this.num1 == null || this.num2 == null) {
      this.exibirToast('Preencha os dois números.');
      return;
    }
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    if (this.num1 == null || this.num2 == null) {
      this.exibirToast('Preencha os dois números.');
      return;
    }
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    if (this.num1 == null || this.num2 == null) {
      this.exibirToast('Preencha os dois números.');
      return;
    }
    if (this.num1 === 0 || this.num2 === 0) {
      this.exibirToast('Divisão por zero não permitida.');
      return;
    }
    this.resultado = this.num1 / this.num2;
  }

  raiz() {
    if (this.num1 == null) {
      this.exibirToast('Preencha o número 1.');
      return;
    }
    this.resultado = Math.sqrt(this.num1);
  }

  fatorial() {
    if (this.num1 == null) {
      this.exibirToast('Preencha o número 1.');
      return;
    }
    this.resultado = this.fatorialResumido(this.num1);
  }

  fatorialResumido(value: number): number {
    if (value === 0) {
      return 1;
    } else {
      return value * this.fatorialResumido(value - 1);
    }
  }

  fatorialExtendido(value: number): number {
    let fatorial = 1;
    for (let i = 1; i <= value; i++) {
      fatorial = fatorial * i;
    }
    return fatorial;
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
