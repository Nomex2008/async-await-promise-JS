const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo')
    }, 3000)
})

promise1.then((value) => {
    console.log(value)
})
promise1.catch(() => {console.error(error)})

console.log(promise1)

function akaFetch() {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello frome promise')
        }, 3001)
    }))
}

akaFetch()
    .then((response) => {
        console.log(response)
        return response + '!'
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        setTimeout(console.log('End'),3002)
    })

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response => response.json()))
    .then((response) => {
        console.log(response)
    })

async function getPosts(url) {
    const response = await fetch(url)
    const posts = await response.json()
    return posts
}

getPosts('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => {
        console.log(posts[0])
    })
    .catch(console.error)

async function getPosts2(url) {
    try {
        const response = await fetch(url)
        const posts = await response.json()
        console.log(posts[1])
    } catch (error) {
        console.warn(error)
        return error
    }
}
    
getPosts2('https://jsonplaceholder.typicode.com/posts')

const photoCompilate = async (link) => {
    try {
        const photoProps = await fetch(link)
        const photos = await photoProps.json()
        console.log(photos)
    } catch (error) {
        console.warn(error)
    }
}
photoCompilate('https://jsonplaceholder.typicode.com/photos')

async function getComents() {
    const response = await fetch('https://jsonplaceholder.typicode.com/comments')
    return await response.json()
}
async function getPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    return await response.json()
}

Promise.all([getComents(),getPhotos()]).then(console.log)
Promise.allSettled([getComents(),getPhotos()]).then(console.log)
Promise.race([getComents(),getPhotos()]).then(console.log)