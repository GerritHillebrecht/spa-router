import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  htmlFile = 'blogPost/blogPost.view.html';
  cssFile = 'blogPost/blogPost.view.css';

  headerImage = faker.image.image();

  constructor() {
    super();
    this.setTitle('BlogPost')
  }
}
