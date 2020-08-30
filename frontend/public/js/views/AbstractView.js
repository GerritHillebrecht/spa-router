export default class {
  htmlFile;
  cssFile;

  constructor(params) {
    this.params = params;
    console.log(params);
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
        console.log('adding CSS');
        const head = document.head || document.getElementsByTagName('head')[0];
        const style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        style.appendChild(document.createTextNode(xhr.responseText));

        document.head.append(`<style>${xhr.responseText}</style>`);
        resolve();
      };
      xhr.send();
    });
  }
}
