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

  getDetail() {
    return { name: this.#name, position: this.#position };
  }

  get position() {
    return this.#position;
  }

  get name() {
    return this.#name;
  }
}

export default CarModel;
