import CarModel from '../Car/Car.model.js';
import Validator from '../lib/Validator.js';
import RuleModel from '../Rule/Rule.model.js';

class RacingModel {
  /** @type {Array<CarModel>} */
  #cars;

  /** @type {number} */
  #trialNumber;

  /** @type {RuleModel} */
  #rule;

  constructor() {
    this.#rule = new RuleModel(new Validator());
  }

  /**
   *
   * @param {string} input
   */
  setCars(input) {
    this.#rule.validateCarNames(input);
    this.#cars = this.#createCars(input.split(','));
  }

  /**
   *
   * @param {Array<string>} input
   * @returns {Array<CarModel>}
   */
  #createCars(input) {
    return input.map((name) => new CarModel(name));
  }

  /**
   *
   * @param {string} input
   */
  setTrialNumber(input) {
    this.#rule.validateTrialNumber(input);
    this.#trialNumber = input;
  }

  /**
   *
   * @param {CarModel} car
   */
  #canMoveForward(car) {
    if (this.#rule.canMoveForward()) {
      car.moveForward();
    }
  }

  race() {
    this.#cars.forEach((car) => this.#canMoveForward(car));
  }
}

export default RacingModel;
