function tellMeAJoke(response) {
  console.log(response.data.answer);
  let showJoke = document.querySelector("#joke");
  new Typewriter(showJoke, {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
  });

  console.log(showJoke);
}

function findJoke() {
  let apiKey = `abf74f3d08ac0ba0527t801bd8o47a65`;
  let prompt = `Tell a wholesome joke! Do not tell the same joke. Provide answer using basic html only.`;
  let context = `You are a very funny comedian, who specializes in food jokes. You know over 100 different jokes.`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let waitingMessage = document.querySelector("#joke");
  waitingMessage.innerHTML = `Generating a joke for you...`;

  axios.get(apiUrl).then(tellMeAJoke);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", findJoke);
