class RacingController {
  /** @type {RacingModel} */
  #racingModel;

  /** @type {RacingView} */
  #racingView;

  constructor({ models, views }) {
    const { RacingModel: racingModel } = models;
    const { RacingView: racingView } = views;

    this.#racingModel = racingModel;
    this.#racingView = racingView;

    this.init();
  }

  async init() {
    await this.#input();
    this.#racing();
    this.#displayGameResult();
  }

  async #input() {
    this.#racingModel.setCars(await this.#racingView.inputCarNames());
    this.#racingModel.setTrialNumber(await this.#racingView.inputTrialNumber());
  }

  #racing() {
    this.#racingView.raceStart();
    while (this.#racingModel.isRacing()) {
      this.#racingModel.singleRace();
      this.#racingView.printRacing(this.#racingModel.getCarsDetail());
      this.#racingView.newLine();
    }
  }

  #displayGameResult() {
    const winners = this.#racingModel.determineWinners();
    this.#racingView.printWinners(winners);
  }
}

export default RacingController;
