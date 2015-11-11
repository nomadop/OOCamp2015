import Length from '../src/length';

describe('Length', function() {
  describe('compairing two length object with same length', function() {
    it('should return true', function() {
      let length1 = new Length(10);
      let length2 = new Length(10);
      expect(length1.isEqual(length2)).toBeTruthy();
    });
  });
});
