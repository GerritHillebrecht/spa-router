import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle('Settings');
  }

  async getHtml() {
    return `<p>Die Einstellungen</p>`;
  }
}
