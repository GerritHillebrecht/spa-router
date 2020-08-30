import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  htmlFile = 'home/home.view.html';
  cssFile = 'home/home.view.css';

  people = new Array(10).fill({}).map((_) => {
    return {
      name: faker.name.findName(),
      email: faker.internet.email(),
    };
  });

  constructor() {
    super();
    this.setTitle('Startseite');
  }

  async getHtml() {
    return ``;
  }
}
