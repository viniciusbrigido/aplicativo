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
    this.resultado = this.num1 + this.num2;
  }

  subtrair() {
    this.resultado = this.num1 - this.num2;
  }

  multiplicar() {
    this.resultado = this.num1 * this.num2;
  }

  dividir() {
    if (this.num1 === 0 || this.num2 === 0) {
      this.exibirToast('Divisão por zero.');
      return;
    }
    this.resultado = this.num1 / this.num2;
  }

  raiz() {
    this.resultado = this.num1 / this.num2;
  }

  fatorial() {
    this.resultado = this.num1 / this.num2;
  }

  async exibirToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      icon: 'hand-left-outline'
    });
    toast.present();
  }
}
