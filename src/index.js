//https://stackoverflow.com/a/53671249/669577

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises
//a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Creating_a_Promise_around_an_old_callback_API

const xhrRequest = (method,url) => new Promise (  (resolve,reject) => {
    const xhrObject = new XMLHttpRequest()
    xhrObject.onload = () => resolve(xhrObject.responseText)
    xhrObject.onerror = reject

    xhrObject.open(method,url)
    xhrObject.send()
}  )

//The resolve and reject functions, when called, resolve or reject the promise, respectively. 
//The executor normally initiates some asynchronous work, and then, once that completes, either calls the resolve function
// to resolve the promise or else rejects it if an error occurred.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Parameters
//executes a promise, aasync await is used


const xhr_get = async (method,url) => {
    try {
        let result
        result = await xhrRequest(method,url)
        console.log(result)
    }catch (e) {
        console.log("Eror")
    }
    
}

xhr_get('GET','https://jsonplaceholder.typicode.com/posts/1')

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#Creating_a_Promise_around_an_old_callback_API
//In an ideal world, all asynchronous functions would already return promises.
//Basically, the promise constructor takes an executor function that lets us resolve or reject a promise manually.