function generateTicket() {
  return Date.now().toString(16) + Math.round((Math.random() * 100000)).toString(16);
}

export default class {
  constructor() {
    this.lots = {};
  }

  park(car) {
    const ticket = generateTicket();
    this.lots[ticket] = (car);
    return ticket;
  }

  get(ticket) {
    return this.lots[ticket];
  }
}