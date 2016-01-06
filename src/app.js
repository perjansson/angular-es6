import { JokesController } from './jokes/jokes.controller';
import { JokesService } from './jokes/jokes.service';
import { Joke } from './jokes/joke.model';

angular
  .module('jokesES2015App', [])
  .controller('JokesController', JokesController)
  .service('JokesService', JokesService)
  .service('Joke', Joke);
