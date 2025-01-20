import Module from '../lib/Module.js';
import RacingController from './Racing.controller.js';
import RacingModel from './Racing.model.js';
import RacingView from './Racing.view.js';

const RacingModule = new Module({
  models: [RacingModel],
  views: [RacingView],
  controllers: [RacingController],
});

export default RacingModule;
