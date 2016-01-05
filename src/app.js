import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';

angular
  .module('jokesES2015App', [])
  .controller('JokesController', JokesController)
  .service('JokesService', JokesService);
