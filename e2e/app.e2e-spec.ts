import { SocketmessagesPage } from './app.po';

describe('socketmessages App', function() {
  let page: SocketmessagesPage;

  beforeEach(() => {
    page = new SocketmessagesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
