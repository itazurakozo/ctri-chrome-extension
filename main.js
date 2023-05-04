const contents = document.body;
contents.parentNode.removeChild(contents);
console.log("hello")



// const sportsUrl = 'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
// 		'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(sportsUrl, options);
// 	const result = await response.text();
// 	console.log(result);
//     contents.innerHTML = result
// } catch (error) {
// 	console.error(error);
// }

//create the html body using ticky points
//photos: unsplash
//stockprices
//cryptoprices
//weather
//

`
<div class = "unsplash">
    <img src ${imageSource}/>
</div>
`