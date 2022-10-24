/** We'll create a request variable and 
 * assign a new XMLHttpRequest object to it. 
 * Then we'll open a new connection with the open() method - 
 * in the arguments we'll specify the type of request as GET as 
 * well as the URL of the API endpoint. 
 * The request completes and we can access the data inside the 
 * onload function. When we're done, we'll send the request.**/

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()
// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
    // Begin accessing JSON data here

    /** We're going to use JSON.parse() to parse the response, 
 * and create a data variable that contains all the JSON as an 
 * array of JavaScript objects. Using forEach(), we'll console log out 
 * the title of each film to ensure it's working properly. */

    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
        data.forEach(movie => {
            //Create a div with a card class
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1')
            h1.textContent = movie.title
            // Create a p and set the text content to the film's description
            const p = document.createElement('p')
            movie.description = movie.description.substring(0,300) // Limit to 300 chars
            p.textContent = `${movie.description}...` // End with an ellipses
            // Append the cards to the container element
            container.appendChild(card)
             // Each card will contain an h1 and a p
            card.appendChild(h1)
            card.appendChild(p)
        })
    } else {
        const errorMessage = document.createElement('marquee')
        errorMessage.textContent = 'Gah, it´s not working'
        app.appendChild(errorMessage)
    }
}

//Send request
request.send()

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'logo.png'
const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)


