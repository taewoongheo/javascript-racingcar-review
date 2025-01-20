import CarModel from '../Car/Car.model.js';
import { isNotEmpty, isNotExceedLength } from '../lib/utils.js';
import Validator from '../lib/Validator.js';

class RacingModel {
  /** @type {Array<CarModel>} */
  #cars;

  /** @type {Number} */
  #trialNumber;

  static ERROR_MESSAGE = Object.freeze({
    INPUT_CAN_NOT_BE_EMPTY: '[ERROR] 이름은 공백일 수 없습니다.',
    INPUT_LENGTH_CAN_NOT_EXCEED_FIVE:
      '[ERROR] 이름은 5 자를 초과할 수 없습니다.',
  });

  /**
   *
   * @param {Array<string>} input
   * @throws {Error}
   */
  #validateInput(input) {
    input.forEach((name) => this.#validateEmptyName(name));
  }

  /**
   *
   * @param {string} input
   * @throws {Error}
   */
  #validateEmptyName(input) {
    new Validator().validate(input).with(isNotEmpty, {
      message: RacingModel.ERROR_MESSAGE.INPUT_CAN_NOT_BE_EMPTY,
    });
  }

  /**
   *
   * @param {Array<string>} input
   * @throws {Error}
   */
  #validateLengthNames(input) {
    input.forEach((name) => this.#validateNameLength(name));
  }

  /**
   *
   * @param {string} input
   * @returns {boolean}
   */
  #isNotExceedLengthFive(input) {
    return isNotExceedLength(input, 5);
  }

  /**
   *
   * @param {string} input
   * @throws {Error}
   */
  #validateNameLength(input) {
    new Validator().validate(input).with(this.#isNotExceedLengthFive, {
      message: RacingModel.ERROR_MESSAGE.INPUT_LENGTH_CAN_NOT_EXCEED_FIVE,
    });
  }

  /**
   *
   * @param {string} input
   * @throws {Error}
   */
  #validateCars(input) {
    const splitedCarNames = input.split(',');
    this.#validateInput(splitedCarNames);
    this.#validateLengthNames(splitedCarNames);
  }

  /**
   *
   * @param {string} input
   */
  setCars(input) {
    this.#validateCars(input);
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
    this.#validateInput(input.split(','));
    this.#trialNumber = input;
  }
}

export default RacingModel;
