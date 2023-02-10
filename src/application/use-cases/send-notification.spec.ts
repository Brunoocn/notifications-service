import { SendNotification } from './send-notification';

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();

    const request = {
      recipientId: '123',
      content: 'Nova solicitação de amizade!',
      category: 'friendship',
    };

    const response = await sendNotification.execute(request);

    expect(response.notification).toBeTruthy();
  });
});
