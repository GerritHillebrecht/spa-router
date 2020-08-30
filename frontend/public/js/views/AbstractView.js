import RS from '../router/lib/router-settings.js';

export default class {
  htmlFile;
  cssFile;

  constructor(params) {
    this.params = params;
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return '';
  }

  async loadHTMLFile(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', file, true);
      xhr.onloadend = () => resolve(Handlebars.compile(xhr.responseText)(this));
      xhr.send();
    });
  }

  async addStyleSheet(file) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', file, true);
      xhr.onloadend = () => {
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');
        head.appendChild(style);

        style.type = 'text/css';
        style.setAttribute(RS.styleDataAttribute, true);
        style.appendChild(document.createTextNode(xhr.responseText));

        resolve();
      };
      xhr.send();
    });
  }
}
