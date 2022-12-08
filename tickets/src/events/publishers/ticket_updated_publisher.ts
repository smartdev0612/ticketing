import { Publisher, Subjects, TicketUpdatedEvent } from '@daniel0612/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
