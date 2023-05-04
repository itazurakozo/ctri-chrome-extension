const contents = document.body;
// contents.parentNode.removeChild(contents);
console.log("hello")

let kayneData = ''
async function kayne () {
    const resp = await fetch('https://api.kanye.rest');
    const data = await resp.json()
    console.log(resp)
    console.log(data)
    kayneData = data
    const kayneDiv = document.createElement('div')
    kayneDiv.innerHTML = kayneQuote(kayneData)
    document.body.appendChild(kayneDiv)
}
kayne()

function kayneQuote (data) {

    return `
    <div class="kayne">
        <h1> The word of Yeezus </h1>
        <h2>${data.quote}</h2>
    </div>
    `
}

let fbiData = ''

async function fbi() {
  const resp = await fetch(`https://api.fbi.gov/wanted/v1/list`)
  const data = await resp.json()
  fbiData = data.items
  console.log(fbiData)
  const fbiParent = document.createElement('div')
  fbiParent.innerHTML = `<h1>FBI's LIST OF PEOPLE THAT THEY WANT... MOST</h1>`
  document.body.appendChild(fbiParent)
  
  fbiHTML()


}


fbi()

function fbiHTML () {
  const mapped = fbiData.map((ele, index) => {
    const fbiDiv = document.createElement('div')
    fbiDiv.innerHTML = `
    <div class = "starWars">
      
      <h2>${ele.title}</h2>
      <h2>${ele.remarks}</h2>
      <h2>${ele.description}</h2>
    </div>
    `
    document.body.appendChild(fbiDiv)
   
  })
 
}





let starWarsData = ''
async function starWars() {
  const random = Math.ceil(Math.random() * 60)
  const resp = await fetch(`https://swapi.dev/api/people/${random}/`)
  const data = await resp.json()
  starWarsData = data
  const starWarsDiv = document.createElement('div')
  starWarsDiv.innerHTML = starWarsHTML()
  document.body.appendChild(starWarsDiv)
}


starWars()

function starWarsHTML () {
  return `
  <div class = "starWars">
    <h1>Here's a Random Star Wars Character</h1>
    <h2>${starWarsData.name}</h2>
    <h2>${starWarsData.height}</h2>
    <h2>${starWarsData.mass}</h2>
  </div>
  `
}




async function getChuckData() {
    const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-RapidAPI-Key': '7759e0a0c8mshc264a53188fff38p1949a1jsnc9ac66875e22',
        'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
      }
    };
    
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      chuckData = result
      const newDiv = document.createElement('div')
      newDiv.innerHTML = chuckHTML()
      console.log(chuckData)
      contents.appendChild(newDiv)
    } catch (error) {
      console.error(error);
    }
  }
  
  let chuckData = ''

  getChuckData()
  
  function chuckHTML () {
    return `
    <div>
        <img src = "https://townsquare.media/site/115/files/2022/03/attachment-ChuckNorris.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"/>
        <p>${chuckData.value}</p>
    </div>
    `
  } 
  

//   async function getWeather() {
//     const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=38.5&lat=-78.5';
//   const options = {
//       method: 'GET',
//       headers: {
//           'X-RapidAPI-Key': '7759e0a0c8mshc264a53188fff38p1949a1jsnc9ac66875e22',
//           'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
//       }
//   };
  
//   try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     weatherData = result
//     const weatherDiv = document.createElement('div')
//     weatherDiv.innerHTML = weatherHTML()
//     contents.appendChild(weatherDiv)
//     console.log(weatherData)
//   } catch (error) {
//       console.error(error);
//   }
//   }
  
//   let weatherData = ''
  
//   getWeather()
  
  
//   function weatherHTML () {
//     return `
//     <div>
//         <img src = "https://www.noaa.gov/sites/default/files/styles/square_width_650/public/2021-02/FocusArea__Weather-02.jpg?h=5dc006f5&itok=20VGa8_F"/>
//         <h1>Jimmy's Weather</h1>
//         <p>${weatherData.data[0].app_temp} degrees</p>
//     </div>
//     `
//   } 
  