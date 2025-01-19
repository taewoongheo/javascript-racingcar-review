// @ts-check

import input from '../lib/view.js';

class RacingView {
  static QUERY = Object.freeze({
    GET_CAR_NAMES:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    GET_TRIAL_NUMBER: '시도할 횟수는 몇 회인가요?',
  });

  /**
   *
   * @returns {Promise<string>}
   */
  static async inputCarNames() {
    return input(RacingView.QUERY.GET_CAR_NAMES);
  }

  /**
   *
   * @returns {Promise<string>}
   */
  static async inputTrialNumber() {
    return input(RacingView.QUERY.GET_TRIAL_NUMBER);
  }
}

export default RacingView;
