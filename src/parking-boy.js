export default class {
  constructor(...parkingLots) {
    this.parkingLots = parkingLots
  }

  park(car) {
    const firstAvailableParkingLot = this.parkingLots.find(parkingLot => {
      return !parkingLot.isFull;
    });
    if (!firstAvailableParkingLot) {
      return null;
    }
    return firstAvailableParkingLot.park(car);
  }

  pick(ticket) {
    return ticket.parkingLot.get(ticket);
  }
}