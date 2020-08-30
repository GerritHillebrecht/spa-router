import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Seite nicht gefunden');
  }

  async getHtml() {
    return `<p>Die Seite konnte nicht gefunden werden</p>`;
  }
}
