import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab8',
  templateUrl: './tab8.page.html',
  styleUrls: ['./tab8.page.scss'],
})
export class Tab8Page {

  palavras: string;
  palavraSecreta: string;
  palavraAdvinhacao: string;
  tentativasRestantes: number;
  mensagem: string;
  desabilita: boolean;

  constructor(private toastController: ToastController) {
    this.iniciaAdvinhacao();
  }

  iniciaAdvinhacao() {
    const palavras = ['amarelo', 'azul', 'verde', 'vermelho', 'rosa', 'preto'];
    this.palavras = palavras.join(', ');
    this.palavraSecreta = palavras[Math.floor(Math.random() * palavras.length)];
    this.palavraAdvinhacao = null;
    this.tentativasRestantes = 8;
    this.mensagem = '';
    this.desabilita = false;
    console.log(this.palavraSecreta);
  }

  tentarAdvinhar() {
    if (this.palavraSecreta === this.palavraAdvinhacao) {
      this.exibirMensagem('Você acertou a palavra secreta. Deseja jogar novamente?');
      return;
    }
    this.tentativasRestantes--;
    this.mensagem = 'Palavra errada';

    if (this.tentativasRestantes === 0)  {
      this.exibirMensagem('Número de Tentativas Esgotadas. Deseja jogar novamente?');
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
