import { FilmWebPage } from './app.po';

describe('film-web App', () => {
  let page: FilmWebPage;

  beforeEach(() => {
    page = new FilmWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
