export class Imovel {
  nome: string;
  valor: number;
  logradouro: string;
  numero: string;
  bairro: string;
  cidade: string;
  estado: string;
  mapa: string;

  constructor(nome: string, valor: number, logradouro: string, numero: string, bairro: string, cidade: string, estado: string) {
    this.nome = nome;
    this.valor = valor;
    this.logradouro = logradouro;
    this.numero = numero;
    this.bairro = bairro;
    this.cidade = cidade;
    this.estado = estado;
    this.mapa = this.getMapa();
  }

  private getEndereco() {
    return this.logradouro + ', ' + this.numero + ' - ' + this.bairro + ', ' + this.cidade + ' - ' + this.estado;
  }

  private getMapa() {
    return 'https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap' +
   '&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318' +
   '&markers=color:red%7Clabel:C%7C40.718217,-73.998284' +
   '&key=AIzaSyA6h0hq1rnEA0XsBgT8OlQWwu6WZpV8Uh8';


    // return 'https://maps.googleapis.com/maps/api/staticmap?center='
    // + this.getEndereco()
    // + 'zoom=15&size=400x400&markers=color:red'
    // + '&key=AIzaSyA6h0hq1rnEA0XsBgT8OlQWwu6WZpV8Uh8';
  }
}
