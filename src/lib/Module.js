class Module {
  /** @type {Array<ClassConstructor>} */
  #models;

  /** @type {Array<ClassConstructor>} */
  #views;

  /** @type {Array<ClassConstructor>} */
  #controllers;

  /**
   *
   * @param {{ models: Array<ClassConstructor>, views: Array<ClassConstructor>, controllers: Array<ClassConstructor> }} dependencies
   */
  constructor({ models, views, controllers }) {
    this.#models = models;
    this.#views = views;
    this.#controllers = controllers;
  }

  /**
   *
   * @param {Array<ClassConstructor>} objects
   * @returns {Record<string, object>}
   */
  generate(objects) {
    const instantiatedObjects = {};

    objects.forEach((ObjectElement) => {
      instantiatedObjects[ObjectElement.name] = new ObjectElement();
    });

    return instantiatedObjects;
  }

  init() {
    const instantiatedModels = this.generate(this.#models);
    const instantiatedViews = this.generate(this.#views);

    this.#controllers.forEach((Controller) => {
      // eslint-disable-next-line no-new
      new Controller({ models: instantiatedModels, views: instantiatedViews });
    });
  }
}

export default Module;
