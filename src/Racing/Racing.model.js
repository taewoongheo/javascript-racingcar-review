import CarModel from '../Car/Car.model.js';
import {
  isNotEmpty,
  isNotExceedLength,
  isNumericString,
  isPositveNumberString,
} from '../lib/utils.js';
import Validator from '../lib/Validator.js';

class RacingModel {
  /** @type {Array<CarModel>} */
  #cars;

  /** @type {Number} */
  #trialNumber;

  static ERROR_MESSAGE = Object.freeze({
    CAR_NAMES_CAN_NOT_BE_EMPTY: '[ERROR] 이름은 공백일 수 없습니다.',
    INPUT_LENGTH_CAN_NOT_EXCEED_FIVE:
      '[ERROR] 이름은 5 자를 초과할 수 없습니다.',
    TRIAL_NUMBER_CAN_NOT_BE_EMPTY: '[ERROR] 시도 횟수는 공백일 수 없습니다.',
    TRIAL_NUMBER_SHOULD_BE_INTEGER: '[ERROR] 시도 횟수는 숫자여야 합니다.',
    TRIAL_NUMBER_SHOULD_BE_POSITIVE: '[ERROR] 시도 횟수는 0 보다 커야 합니다.',
  });

  #parseCarNames(carNames) {
    return carNames.split(',');
  }

  /**
   *
   * @param {Array<string>} input
   * @throws {Error}
   */
  #validateEmpty(input) {
    return input.every((name) => isNotEmpty(name));
  }

  /**
   *
   * @param {Array<string>} input
   * @throws {Error}
   */
  #validateNamesLength(input) {
    return input.every((name) => this.#isNotExceedLengthFive(name));
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
  #validateCarNames(input) {
    new Validator()
      .validate(this.#parseCarNames(input))
      .with(this.#validateEmpty, {
        message: RacingModel.ERROR_MESSAGE.CAR_NAMES_CAN_NOT_BE_EMPTY,
      })
      .with(this.#validateNamesLength.bind(this), {
        message: RacingModel.ERROR_MESSAGE.INPUT_LENGTH_CAN_NOT_EXCEED_FIVE,
      });
  }

  /**
   *
   * @param {string} input
   */
  setCars(input) {
    this.#validateCarNames(input);
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
    this.#validateTrialNumber(input);
    this.#trialNumber = input;
  }

  /**
   *
   * @param {string} input
   */
  #validateTrialNumber(input) {
    new Validator()
      .validate(input)
      .with(isNotEmpty, {
        message: RacingModel.ERROR_MESSAGE.TRIAL_NUMBER_CAN_NOT_BE_EMPTY,
      })
      .with(isNumericString, {
        message: RacingModel.ERROR_MESSAGE.TRIAL_NUMBER_SHOULD_BE_INTEGER,
      })
      .with(isPositveNumberString, {
        message: RacingModel.ERROR_MESSAGE.TRIAL_NUMBER_SHOULD_BE_POSITIVE,
      });
  }
}

export default RacingModel;
