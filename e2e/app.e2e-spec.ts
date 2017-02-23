import { GumpCmsPage } from './app.po';

describe('gump-cms App', function() {
  let page: GumpCmsPage;

  beforeEach(() => {
    page = new GumpCmsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
