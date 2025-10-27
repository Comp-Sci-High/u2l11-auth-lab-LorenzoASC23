// In this assignment, you will navigate a new API and make two API calls
// Task 1: Account Set up
// Find the GIPHY API, make an account, and create your API key
// MAKE SURE TO SELECT API AND NOT SDK & put "Web" as your platform
// Save your API key in a variable below


// Task 2: Endpoint Identification
// Under GIPHY API, find the GIF & Sticker endpoints
// Find the endpoint that lets you search for GIFs 
// Save the base and path in a variable below
let url1 = "https://api.giphy.com/v1/gifs/search?api_key=JXrN3XBIK6nCvc1msOBiWzNf2CGY2g94"

// Task 3: Building full request URL
// Find the request (query) parameters to build the full request URL to search for 1 raccoon GIFs
// Save it in a variable below
let url = "https://api.giphy.com/v1/gifs/search?q=raccoon&limit=1&api_key=JXrN3XBIK6nCvc1msOBiWzNf2CGY2g94"

// Task 4: Making the API call
// Define the function to fetch the data and console log the url key

async function fetchData(url) {
const reponse = await fetch(url)
const data = await reponse.json()
console.log(data)
    
}

// Call the function to test it worked
fetchData(url)

// Task 5: Running it back
// Find the endpoint that returns a random sticker
// Build the request URL for a coding sticker
let url2 = "https://api.giphy.com/v1/stickers/search?api_key=JXrN3XBIK6nCvc1msOBiWzNf2CGY2g94"

// Define and call the function that prints just the sticker URL


async function fetchSticker(url2) {
const reponse = await fetch(url2)
const data = await reponse.json()
console.log(data)
    
}
fetchSticker(url2)

