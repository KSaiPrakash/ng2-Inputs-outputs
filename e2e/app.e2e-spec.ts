import { T003IOPage } from './app.po';

describe('t003-io App', function() {
  let page: T003IOPage;

  beforeEach(() => {
    page = new T003IOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
