/* eslint-disable no-unused-vars */
import { Component } from '../component/component';
import './footer.scss';

export class Footer extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterend');
  }

  private createTemplate() {
    return `
              <footer class="footer">
              <img class="footer__img"src="../../pikachu.png" alt="A draw of the Pikachu's face"/ width="80px">
              </footer>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
