import { ToastController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab7',
  templateUrl: './tab7.page.html',
  styleUrls: ['./tab7.page.scss'],
})
export class Tab7Page {

  numeroSecreto: number;
  numeroAdvinhacao: number;
  tentativasRestantes: number;
  mensagem: string;
  desabilita: boolean;

  constructor(private toastController: ToastController) {
    this.iniciaAdvinhacao();
  }

  iniciaAdvinhacao() {
    this.numeroSecreto = Math.floor(Math.random() * 10 + 1);
    this.numeroAdvinhacao = null;
    this.tentativasRestantes = 8;
    this.mensagem = '';
    this.desabilita = false;
    console.log(this.numeroSecreto);
  }

  tentarAdvinhar() {
    if (this.numeroSecreto === this.numeroAdvinhacao) {
      this.exibirMensagem('Você acertou o número secreto. Deseja jogar nova partida?');
      return;
    }
    if (this.numeroSecreto > this.numeroAdvinhacao) {
      this.mensagem = 'O número secreto é maior';
    } else {
      this.mensagem = 'O número secreto é menor';
    }
    this.tentativasRestantes--;

    if (this.tentativasRestantes === 0)  {
      this.exibirMensagem('Número de Tentativas Esgotadas. Deseja jogar nova partida?');
    }
  }

  reiniciarPartida() {
    this.iniciaAdvinhacao();
  }

  async exibirMensagem(msg: string) {
    this.desabilita = true;
    const toast = await this.toastController.create({
      message: msg,
      buttons: [
        {
          text: 'Sim',
          handler:() => {
            this.iniciaAdvinhacao();
          }
        },
        {
          text: 'Não',
          handler:() => {
            this.mensagem = 'Obrigado por jogar!';
          }
        }
      ]
    });
    toast.present();
  }
}
