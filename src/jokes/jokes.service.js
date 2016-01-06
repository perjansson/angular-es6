import Joke from './joke';

class JokesService {

  constructor($http) {
    this.$http = $http;
  }

  fetchJoke() {
    return this.$http.get('http://api.icndb.com/jokes/random')
      .then(response => {
        return new Joke(response.data.value.joke);
      });
  }

}

export { JokesService }
