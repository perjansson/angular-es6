class JokesService {

  constructor($http, Joke) {
    this.$http = $http;
    this.Joke = Joke;
  }

  fetchJoke() {
    return this.$http.get('http://api.icndb.com/jokes/random')
      .then(response => {
        this.Joke.text = response.data.value.joke;
        return this.Joke;
      });
  }

}

export { JokesService }
