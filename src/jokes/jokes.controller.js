class JokesController {

  constructor(JokesService) {
    this.JokesService = JokesService;

    JokesService.fetchJoke()
      .then(joke => {
        this.joke = joke;
      })
  }

}

export { JokesController }
