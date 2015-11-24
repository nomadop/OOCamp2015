import Ticket from './ticket';

export default class {
  constructor(freeSpace = 2) {
    this.lots = {};
    this.freeSpace = freeSpace;
  }

  isFull() {
    return !this.freeSpace;
  }

  park(car) {
    if (this.isFull()) {
      return null;
    }

    const ticket = new Ticket(this);
    this.lots[ticket.token] = car;
    this.freeSpace -= 1;
    return ticket;
  }

  get(ticket) {
    const car = this.lots[ticket.token];
    delete this.lots[ticket.token];
    this.freeSpace += 1;
    return car || null;
  }
}