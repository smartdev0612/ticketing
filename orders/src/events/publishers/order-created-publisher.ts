import { Publisher, OrderCreatedEvent, Subjects } from '@daniel0612/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}