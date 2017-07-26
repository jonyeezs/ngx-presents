import { NgxPresentsPage } from './app.po';

describe('ngx-presents App', () => {
  let page: NgxPresentsPage;

  beforeEach(() => {
    page = new NgxPresentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
