import { Subjects, Publisher, OrderCancelledEvent } from "@daniel0612/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}