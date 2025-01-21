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

  /** @type {number} */
  #round;

  constructor() {
    this.#rule = new RuleModel(new Validator());
    this.#round = 0;
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
    this.#trialNumber = Number(input);
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

  singleRace() {
    this.#cars.forEach((car) => this.#canMoveForward(car));
    this.#increaseRound();
  }

  #increaseRound() {
    this.#round += 1;
  }

  /**
   *
   * @returns {boolean}
   */
  isRacing() {
    return this.#round !== this.#trialNumber;
  }

  getCarsDetail() {
    return this.#cars.map((car) => car.getDetail());
  }

  /**
   *
   * @param {Array<CarModel>} cars
   * @returns {Array<CarModel>}
   */
  determineWinners() {
    return this.#rule.determineWinners(this.#cars);
  }
}

export default RacingModel;
