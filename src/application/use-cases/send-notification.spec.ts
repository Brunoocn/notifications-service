import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    const request = {
      recipientId: '123',
      content: 'Nova solicitação de amizade!',
      category: 'friendship',
    };

    await sendNotification.execute(request);

    expect(notifications).toHaveLength(1);
  });
});
