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
}

export default RacingController;
