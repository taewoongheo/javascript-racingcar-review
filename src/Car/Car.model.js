class CarModel {
  /** @type {string} */
  #name;

  /** @type {number} */
  #position;

  /**
   *
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  moveForward() {
    this.#position += 1;
  }
}

export default CarModel;
