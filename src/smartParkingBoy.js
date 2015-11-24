import ParkingBoy from './parking-boy';

export default class extends ParkingBoy {
  park(car) {
    const mostFreeSpaceParkingLot = this.parkingLots.reduce((result, parkingLot) => {
      if (parkingLot.freeSpace > result.freeSpace) {
        return parkingLot;
      } else {
        return result;
      }
    }, this.parkingLots[0]);
    if (!mostFreeSpaceParkingLot || !mostFreeSpaceParkingLot.freeSpace) {
      return null;
    }

    return mostFreeSpaceParkingLot.park(car);
  }
}