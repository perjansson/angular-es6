import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';
import { JokeDirective } from './jokes/joke.directive';

angular
  .module('jokesES2015App', [])
  .controller('JokesController', JokesController)
  .service('JokesService', JokesService)
  .directive('joke', JokeDirective);
