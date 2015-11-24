import ParkingLot from '../src/parkinglot';
import SmartParkingBoy from '../src/smartParkingBoy';

describe('Smart Parking Lot', () => {
  describe('Two parking lot', () => {
    it('should park to the most free space parking lot when two parking lot have different free space', () => {
      const lessFreeSpaceParkingLot = new ParkingLot(1);
      const moreFreeSpaceParkingLot = new ParkingLot(2);
      const smartParkingBoy = new SmartParkingBoy(lessFreeSpaceParkingLot, moreFreeSpaceParkingLot);
      const car = 'This is a car';

      const ticket = smartParkingBoy.park(car);

      expect(moreFreeSpaceParkingLot.get(ticket)).toBe(car);
    });

    it('should park to 1st parking lot when two parking lot have same free space', () => {
      const firstParkingLot = new ParkingLot(1);
      const secondParkingLot = new ParkingLot(1);
      const smartParkingBoy = new SmartParkingBoy(firstParkingLot, secondParkingLot);
      const car = 'This is a car';

      const ticket = smartParkingBoy.park(car);

      expect(firstParkingLot.get(ticket)).toBe(car);
    });
  });
});