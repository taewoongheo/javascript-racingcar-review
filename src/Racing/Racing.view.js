import { input, output } from '../lib/view.js';

class RacingView {
  static QUERY = Object.freeze({
    GET_CAR_NAMES:
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
    GET_TRIAL_NUMBER: '시도할 횟수는 몇 회인가요?',
  });

  static MESSAGE = Object.freeze({
    RACING_START: '실행 결과',
  });

  /**
   *
   * @returns {Promise<string>}
   */
  async inputCarNames() {
    return input(RacingView.QUERY.GET_CAR_NAMES);
  }

  /**
   *
   * @returns {Promise<string>}
   */
  async inputTrialNumber() {
    return input(RacingView.QUERY.GET_TRIAL_NUMBER);
  }

  printRacing(cars) {
    cars.forEach((car) => {
      output(`${car.name} : ${'-'.repeat(car.position)}`);
    });
  }

  newLine() {
    output('');
  }

  raceStart() {
    output(`\n${RacingView.MESSAGE.RACING_START}`);
  }

  printWinners(winners) {
    const winnerStr = winners.reduce((acc, car) => `${car.name} ${acc}`, '');
    output(`최종 우승자 : ${winnerStr}`);
  }
}

export default RacingView;
