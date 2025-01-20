import { Random } from '@woowacourse/mission-utils';
import {
  isNotEmpty,
  isNotExceedLength,
  isNumericString,
  isPositveNumberString,
} from '../lib/utils.js';

class RuleModel {
  /** @type {Validator} */
  #validator;

  constructor(validator) {
    this.#validator = validator;
  }

  static ERROR_MESSAGE = Object.freeze({
    CAR_NAMES_CAN_NOT_BE_EMPTY: '[ERROR] 이름은 공백일 수 없습니다.',
    INPUT_LENGTH_CAN_NOT_EXCEED_FIVE:
      '[ERROR] 이름은 5 자를 초과할 수 없습니다.',
    TRIAL_NUMBER_CAN_NOT_BE_EMPTY: '[ERROR] 시도 횟수는 공백일 수 없습니다.',
    TRIAL_NUMBER_SHOULD_BE_INTEGER: '[ERROR] 시도 횟수는 숫자여야 합니다.',
    TRIAL_NUMBER_SHOULD_BE_POSITIVE: '[ERROR] 시도 횟수는 0 보다 커야 합니다.',
  });

  static GAME_RULE = Object.freeze({
    MOVE_FORWARD_CONDITION: {
      RANGE_START: 0,
      RANGE_END: 9,
      CAN_MOVE_MIN_NUMBER: 4,
    },
  });

  /**
   *
   * @param {string} carNames
   * @returns {Array<string>}
   */
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
  validateCarNames(input) {
    this.#validator
      .validate(this.#parseCarNames(input))
      .with(this.#validateEmpty, {
        message: RuleModel.ERROR_MESSAGE.CAR_NAMES_CAN_NOT_BE_EMPTY,
      })
      .with(this.#validateNamesLength.bind(this), {
        message: RuleModel.ERROR_MESSAGE.INPUT_LENGTH_CAN_NOT_EXCEED_FIVE,
      });
  }

  /**
   *
   * @param {string} input
   */
  validateTrialNumber(input) {
    this.#validator
      .validate(input)
      .with(isNotEmpty, {
        message: RuleModel.ERROR_MESSAGE.TRIAL_NUMBER_CAN_NOT_BE_EMPTY,
      })
      .with(isNumericString, {
        message: RuleModel.ERROR_MESSAGE.TRIAL_NUMBER_SHOULD_BE_INTEGER,
      })
      .with(isPositveNumberString, {
        message: RuleModel.ERROR_MESSAGE.TRIAL_NUMBER_SHOULD_BE_POSITIVE,
      });
  }

  canMoveForward() {
    return (
      Random.pickNumberInRange(
        RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.RANGE_START,
        RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.RANGE_END,
      ) >= RuleModel.GAME_RULE.MOVE_FORWARD_CONDITION.CAN_MOVE_MIN_NUMBER
    );
  }
}

export default RuleModel;
