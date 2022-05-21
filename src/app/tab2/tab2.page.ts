import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  nota: number;
  frequencia: number;
  descricao: string;

  constructor() {}

  setSituacao() {
    this.descricao = this.getDescricaoSituacao();
  }

  getDescricaoSituacao(): string {
    let descricaoSituacao = '';
    if (this.frequencia < 75 || this.nota < 4) {
      descricaoSituacao = 'REPROVADO';
    } else if (this.nota < 6) {
      descricaoSituacao = 'RECUPERAÇÃO';
    } else {
      descricaoSituacao = 'APROVADO';
    }
    return descricaoSituacao;
  }
}
