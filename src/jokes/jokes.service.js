class JokesService {

  constructor($http) {
    this.$http = $http;
  }

  fetchJoke() {
    return this.$http.get('http://api.icndb.com/jokes/random')
      .then(response => {
        return response.data.value.joke;
      });
  }

}

export { JokesService }
