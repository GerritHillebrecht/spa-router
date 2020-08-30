import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  htmlFile = 'test/test.view.html';

  doesWhat = 'rock';

  constructor() {
    super();
    this.setTitle('Blog');
  }

  async getHtml() {
    return '';
  }
}
