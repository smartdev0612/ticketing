import { Publisher, Subjects, TicketCreatedEvent } from '@daniel0612/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
