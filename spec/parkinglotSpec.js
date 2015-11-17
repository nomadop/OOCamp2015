import ParkingLot from '../src/parkinglot';

describe('Parking Lot', () => {
  const parkingLot = new ParkingLot();

  describe('park a car and take a ticket', () => {
    const car = 'This is a Car';
    const ticket = parkingLot.park(car);

    it('should get the right car back when with right ticket', () => {
      expect(parkingLot.get(ticket)).toEqual(car);
    });

    it('should not get the right car back when with wrong ticket', () => {
      const wrongTicket = 'this is a wrong ticket';

      expect(wrongTicket).not.toEqual(ticket);

      expect(parkingLot.get(wrongTicket)).not.toEqual(car);
    });
  });
});