import { CrossOverProjectPage } from './app.po';

describe('cross-over-project App', () => {
  let page: CrossOverProjectPage;

  beforeEach(() => {
    page = new CrossOverProjectPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
