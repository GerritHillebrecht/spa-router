import AbstractView from '../AbstractView.js';

export default class extends AbstractView {
  htmlFile = 'blog/blog.view.html';
  cssFile = 'blog/blog.view.css';

  blogPosts = new Array(12).fill({}).map((_) => {
    return {
      author: faker.name.findName(),
      contact: faker.internet.email(),
      avatar: faker.image.avatar(),
      image: faker.image.image(),
      title: faker.lorem.words(3),
      previewText: faker.lorem.sentences(3),
    };
  });

  constructor(params) {
    super(params);
    this.setTitle('Blog');
  }

  async getHtml() {
    return `<p>Der Blog</p>`;
  }
}
