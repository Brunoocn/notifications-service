import { Content } from './content';
import { Notification } from './notification';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const notification = new Notification({
      recipientId: '123',
      content: new Content('Nova solicitação de amizade!'),
      category: 'friendship',
    });

    expect(notification).toBeTruthy();
  });
});
