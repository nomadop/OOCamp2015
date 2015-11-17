export default class Length {
  constructor(value, unit) {
    this.value = value;
    this.unit = unit;
  }

  toCommonValue() {
    switch (this.unit) {
      case 'mm':
        return this.value;
      case 'cm':
        return this.value * 10;
      case 'm':
        return this.value * 1000;
      default:
        return this.value;
    }
  }

  isEqual(other) {
    return this.toCommonValue() === other.toCommonValue();
  }
}
