const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')


function generateJoke() {

  // fetch('https://icanhazdadjoke.com', {
  //   headers: {
  //     'Accept': 'application/json'
  //   }
  // })
  // i can also use headers in an vairable as shown 

  const config = {
    headers:{
      'Accept' : 'application/json'
    }
  }

  fetch('https://icanhazdadjoke.com', config)
    .then((res)=> res.json())
    .then((data)=> {
      jokeEl.innerHTML = data.joke
    } )
   

}


jokeBtn.addEventListener('click', generateJoke)
generateJoke()