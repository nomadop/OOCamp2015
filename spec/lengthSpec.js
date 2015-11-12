import Length from '../src/length';

describe('Length', function() {
  describe('compairing two length object', function() {
    it('should return true when two length value are same', function() {
      let length1 = new Length(10);
      let length2 = new Length(10);

      let result = length1.isEqual(length2);

      expect(result).toBe(true);
    });

    it("should return false when two length value are diffrent", function () {
      let length1 = new Length(10);
      let length2 = new Length(11);

      let result = length1.isEqual(length2);

      expect(result).toBe(false);
    });
  });

  describe('compairing two length object with mm unit', function() {
    it('should return true when two length value are same', function() {
      let length1 = new Length(10, 'mm');
      let length2 = new Length(10, 'mm');

      let result = length1.isEqual(length2);

      expect(result).toBe(true);
    });

    it("should return false when two length value are diffrent", function () {
      let length1 = new Length(10, 'mm');
      let length2 = new Length(11, 'mm');

      let result = length1.isEqual(length2);

      expect(result).toBe(false);
    });
  });

  describe('compairing two length object with cm unit', function() {
    it('should return true when two length value are same', function() {
      let length1 = new Length(10, 'cm');
      let length2 = new Length(10, 'cm');

      let result = length1.isEqual(length2);

      expect(result).toBe(true);
    });

    it("should return false when two length value are diffrent", function () {
      let length1 = new Length(10, 'cm');
      let length2 = new Length(11, 'cm');

      let result = length1.isEqual(length2);

      expect(result).toBe(false);
    });
  });

  describe('compairing two length object with m unit', function() {
    it('should return true when two length value are same', function() {
      let length1 = new Length(10, 'm');
      let length2 = new Length(10, 'm');

      let result = length1.isEqual(length2);

      expect(result).toBe(true);
    });

    it("should return false when two length value are diffrent", function () {
      let length1 = new Length(10, 'm');
      let length2 = new Length(11, 'm');

      let result = length1.isEqual(length2);

      expect(result).toBe(false);
    });
  });

  describe('compairing two length object with diffrent unit', function() {
    it("should return true when length1 is 10mm and length2 is 1cm", function () {
      let length1 = new Length(10, 'mm');
      let length2 = new Length(1, 'cm');

      let result = length1.isEqual(length2);

      expect(result).toBe(true);
    });

    it("should return true when length1 is 1m and length2 is 100cm", function () {
      let length1 = new Length(1, 'm');
      let length2 = new Length(100, 'cm');

      let result = length1.isEqual(length2);

      expect(result).toBe(true);
    });

    it("should return true when length1 is 1m and length2 is 1000mm", function () {
      let length1 = new Length(1, 'm');
      let length2 = new Length(1000, 'mm');

      let result = length1.isEqual(length2);

      expect(result).toBe(true);
    });

    it("should return false when length1 is 10cm and length2 is 10m", function () {
      let length1 = new Length(10, 'cm');
      let length2 = new Length(10, 'm');

      let result = length1.isEqual(length2);

      expect(result).toBe(false);
    });
  });
});
