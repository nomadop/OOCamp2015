import ParkingLot from '../src/parkinglot';
import ParkingBoy from '../src/parking-boy';

describe('Parking Lot', () => {
  describe('park a car and take a ticket', () => {
    let parkingLot;
    let car;
    let ticket;

    beforeEach(() => {
      parkingLot = new ParkingLot();
      car = 'This is a Car';
      ticket = parkingLot.park(car);
    });

    it('should get the right car back when with right ticket', () => {
      expect(parkingLot.get(ticket)).toBe(car);
    });

    it('should not get the right car back when with wrong ticket', () => {
      const wrongTicket = 'this is a wrong ticket';

      expect(wrongTicket).not.toBe(ticket);

      expect(parkingLot.get(wrongTicket)).not.toBe(car);
    });

    it('should not get the car twice by the same ticket', () => {
      expect(parkingLot.get(ticket)).toBe(car);

      expect(parkingLot.get(ticket)).not.toBe(car);
    });

    it('should get the car back when let parking boy to take it', () => {
      const parkingBoy = new ParkingBoy(parkingLot);

      expect(parkingBoy.pick(ticket)).toBe(car);
    });
  });

  describe('park multiple car into a parking lot', () => {
    it('should get two car back correctly', () => {
      let car = "This is a car";
      let anotherCar = "This is another car";
      let parkingLot = new ParkingLot();

      let ticket = parkingLot.park(car);
      let anotherTicket = parkingLot.park(anotherCar);

      expect(parkingLot.get(ticket)).toBe(car);
      expect(parkingLot.get(anotherTicket)).toBe(anotherCar);
    });
  });

  describe('there is a parking lot, give parking boy a car to park', () => {
    let parkingLot;
    let parkingBoy;
    let car;

    beforeEach(() => {
      parkingLot = new ParkingLot();
      parkingBoy = new ParkingBoy(parkingLot);
      car = "This is a car";
    });

    it('should get the car back when parking lot is available', () => {
      parkingLot.isFull = false;
      let ticket = parkingBoy.park(car);

      expect(parkingLot.get(ticket)).toBe(car);
    });

    it('should not park the car when parking lot is not available', () => {
      parkingLot.isFull = true;
      let ticket = parkingBoy.park(car);

      expect(ticket).toBe(null);
    });
  });

  describe('there are 2 parking lots, give parking boy a car to park', () => {
    let firstParkingLot;
    let secondParkingLot;
    let car;
    let parkingBoy;

    beforeEach(() => {
      firstParkingLot = new ParkingLot();
      secondParkingLot = new ParkingLot();
      parkingBoy = new ParkingBoy(firstParkingLot, secondParkingLot);
      car = 'This is a car';
    });

    it('should get the car back from 1st parking lot when both parking lot is available', () => {
      firstParkingLot.isFull = false;
      secondParkingLot.isFull = false;
      const ticket = parkingBoy.park(car);

      expect(firstParkingLot.get(ticket)).toBe(car);
      expect(secondParkingLot.get(ticket)).toBe(null);
    });

    it('should get the car back from 2nd parking lot when 1st parking lot is not available', () => {
      firstParkingLot.isFull = true;
      secondParkingLot.isFull = false;
      const ticket = parkingBoy.park(car);

      expect(firstParkingLot.get(ticket)).toBe(null);
      expect(secondParkingLot.get(ticket)).toBe(car);
    });

    it('should not park the car back from 2nd parking lot when both parking lot is not available', () => {
      firstParkingLot.isFull = true;
      secondParkingLot.isFull = true;
      const ticket = parkingBoy.park(car);

      expect(ticket).toBe(null);
    });

    it('should get the car back by parking boy when 1st parking lot is not available', () => {
      firstParkingLot.isFull = true;
      secondParkingLot.isFull = false;
      const ticket = parkingBoy.park(car);

      expect(parkingBoy.pick(ticket)).toBe(car);
    });
  });
});