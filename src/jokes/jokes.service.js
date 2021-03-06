import Joke from './joke';

const jokeBackend = 'http://api.icndb.com/jokes/random';

class JokesService {

  constructor($http) {
    this.$http = $http;
  }

  fetchJoke() {
    return this.$http.get(jokeBackend)
      .then(response => {
        return new Joke(response.data.value.joke);
      });
  }

}

export { JokesService }
