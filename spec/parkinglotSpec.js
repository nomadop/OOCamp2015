import ParkingLot from '../src/parkinglot';

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
  
  it('should be full when no free space', () => {
    const parkingLot = new ParkingLot(0);

    expect(parkingLot.isFull()).toBeTruthy();
  });
  
  it('should not be full when have free space', () => {
    const parkingLot = new ParkingLot(1);
    
    expect(parkingLot.isFull()).toBeFalsy();
  });

  it('should decrease free space when park in one car', () => {
    const parkingLot = new ParkingLot(3);
    const car = 'this is a car';

    parkingLot.park(car);

    expect(parkingLot.freeSpace).toBe(2);
  });

  it('should increase free space when pick out one car', () => {
    const parkingLot = new ParkingLot(3);
    const car = 'this is a car';
    const ticket = parkingLot.park(car);

    expect(parkingLot.freeSpace).toBe(2);
    parkingLot.get(ticket);

    expect(parkingLot.freeSpace).toBe(3);
  });
});