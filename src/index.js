//https://stackoverflow.com/a/53671249/669577

//Notice no need to create/pass request and resolve. but can be invoked with values for resolving and rejection
//Returns a promise.
const xhrRequest = (method,url) => new Promise (  (resolve,reject) => {
    const xhrObject = new XMLHttpRequest()
    xhrObject.onload = () => resolve(xhrObject.responseText)
    xhrObject.onerror = reject

    xhrObject.open(method,url)
    xhrObject.send()
}  )


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

