export default class Length {
  constructor(value) {
    this.value = value;
  }

  isEqual(other) {
    return this.value === other.value;
  }
}
