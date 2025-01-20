import Module from '../../src/lib/Module.js';

describe('Module', () => {
  let module;
  beforeEach(() => {
    class Model1 {
      #data = 'data1';

      getData() {
        return this.#data;
      }
    }

    class Model2 {
      #data = 'data2';

      getData() {
        return this.#data;
      }
    }

    class View {
      output(value) {
        return value;
      }
    }

    class Controller {
      #model1;

      #model2;

      #view;

      constructor({ models, views }) {
        const { Model1: model1, Model2: model2 } = models;
        const { View: view } = views;
        this.#model1 = model1;
        this.#model2 = model2;
        this.#view = view;

        this.run();
      }

      run() {
        // eslint-disable-next-line no-console
        console.log(
          this.#view.output(this.#model1.getData() + this.#model2.getData()),
        );
      }
    }

    module = new Module({
      models: [Model1, Model2],
      views: [View],
      controllers: [Controller],
    });
  });
  describe('generate', () => {
    it('객체이름을 키, 객체를 값으로 가지는 새로운 인스턴스 객체를 반환한다.', () => {
      class Test {
        #data = 'test';

        getData() {
          return this.#data;
        }
      }

      const instantiatedObjects = module.generate([Test]);

      expect(instantiatedObjects.Test).toBeInstanceOf(Test);
    });
  });
  describe('init', () => {
    it('init 실행 시 controller가 실행되어야 한다.', () => {
      const consoleSpy = jest.spyOn(console, 'log');

      module.init();

      expect(consoleSpy).toHaveBeenCalledWith('data1data2');
    });
  });
});
