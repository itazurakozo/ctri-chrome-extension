const contents = document.body;
contents.parentNode.removeChild(contents);
console.log("hello")



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
      const result = await response.text();
      chuckData = result
      console.log(chuckData)
      body.appendChild(chuckHTML())
    } catch (error) {
      console.error(error);
    }
  }
  
  let chuckData = ''
  
  function chuckHTML () {
    return `
    <div>
        <img src = "https://townsquare.media/site/115/files/2022/03/attachment-ChuckNorris.jpg?w=1200&h=0&zc=1&s=0&a=t&q=89"/>
        <p>${chuckData.value}</p>
    </div>
    `
  } 
  
  