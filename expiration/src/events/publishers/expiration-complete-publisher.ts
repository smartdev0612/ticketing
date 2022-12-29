import { Subjects, Publisher, ExpirationCompleteEvent } from '@daniel0612/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}