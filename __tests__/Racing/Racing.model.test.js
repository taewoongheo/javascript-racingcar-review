import RacingModel from '../../src/Racing/Racing.model.js';

describe('Racing.model', () => {
  let racingModel;
  beforeEach(() => {
    racingModel = new RacingModel();
  });
  describe('setCarNames', () => {
    it('주어진 자동차의 이름들을 ,(쉼표)로 구분하고, 각 자동차의 이름이 5자 이하인 경우 에러가 발생하지 않아야 한다.', () => {
      const carNames = 'pobi,woni,jun';

      expect(() => racingModel.setCars(carNames)).not.toThrow();
    });
    it('주어진 자동차의 이름들을 ,(쉼표)로 구분하고, 각 자동차의 이름이 5자를 초과할 경우 에러가 발생해야 한다', () => {
      const carNames = 'pobipobi,woniwoni, jun';

      expect(() => racingModel.setCars(carNames)).toThrow();
    });
  });
  describe('setTrialNumber', () => {
    it('경주횟수가 공백이면 에러를 발생한다.', () => {
      expect(() => racingModel.setTrialNumber()).toThrow();
    });
  });
});
