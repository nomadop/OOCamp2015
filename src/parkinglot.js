import Ticket from './ticket';

export default class {
  constructor() {
    this.lots = {};
  }

  park(car) {
    if (this.isFull) {
      return null;
    }

    const ticket = new Ticket(this);
    this.lots[ticket.token] = car;
    return ticket;
  }

  get(ticket) {
    const car = this.lots[ticket.token];
    delete this.lots[ticket.token];
    return car || null;
  }
}