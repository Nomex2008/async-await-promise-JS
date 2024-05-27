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

fetch('https://jsonplaceholder.typicode.com/photos')
    .then((response => response.json()))
    .then((response) => {
        console.log(response)
    })

async function getPosts(url) {
    const response = await fetch(url)
    const posts = await response.json()
    return posts
}

getPosts('https://jsonplaceholder.typicode.com/photos')
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
    
getPosts2('https://jsonplaceholder.typicode.com/photos')
