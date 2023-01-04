import { Subjects, Publisher, PaymentCreatedEvent } from '@daniel0612/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}