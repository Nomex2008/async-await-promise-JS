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