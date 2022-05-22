import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  abreGitHub() {
    window.open('https://github.com/viniciusbrigido', '_blank');
  }

  abreLinkedin() {
    window.open('https://www.linkedin.com/in/vin%C3%ADcius-brigido-721673212/', '_blank');
  }

  abreInstagram() {
    window.open('https://www.instagram.com/vinicius.brigido', '_blank');
  }

  abreTwitter() {
    window.open('https://www.twitter.com/ViniciusBrigido', '_blank');
  }
}
