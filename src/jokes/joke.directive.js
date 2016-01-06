export function JokeDirective() {

  return {
    scope: {
      joke: '=value'
    },
    template: '<i>"{{joke.text}}"</i>'
  }

}
