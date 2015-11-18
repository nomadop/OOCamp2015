function generateTicketToken() {
  return Date.now().toString(16) + Math.round((Math.random() * 100000)).toString(16);
}

export default class {
  constructor(parkingLot) {
    this.parkingLot = parkingLot;
    this.token = generateTicketToken();
  }
}