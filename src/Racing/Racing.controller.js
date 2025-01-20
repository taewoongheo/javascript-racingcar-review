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

    this.#input();
  }

  async #input() {
    this.#racingModel.setCars(await this.#racingView.inputCarNames());
    this.#racingModel.setTrialNumber(await this.#racingView.inputTrialNumber());
  }
}

export default RacingController;
