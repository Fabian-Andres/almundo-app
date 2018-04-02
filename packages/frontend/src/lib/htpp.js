// Configure api url
const dataJSON = 'http://localhost:8080/api/'

// External URLJSON data (only view data)
// const dataJSON = 'https://api.myjson.com/bins/loj7z'

export async function getHotels() {
    return fetch(dataJSON)
    .then((response) => {
      return response.json()
    })
}

export async function searchHotels(search) {
    return fetch(`${dataJSON}${encodeURIComponent(search)}`)
    .then((response) => {
      return response.json()
    })
}

export async function searchStars(stars) {
    return fetch(`${dataJSON}stars/${stars.join(',')}`)
    .then((response) => {
      return response.json()
    })
}
