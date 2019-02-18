
//https://stackoverflow.com/questions/12421860/returning-xmlhttp-responsetext-from-function-as-return
//Cant return xhr response since the function will finish before 
//So pass a callback to execute on suucess

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response#Example

const getAsyncData = (cb) => {

    // create an XMLHttpRequest object,
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        if (xhr.readyState === 4 ) {
            cb(xhr.response)
        }
    }

    const url = "https://jsonplaceholder.typicode.com/posts/1"

    //open a url , true is for async
    xhr.open("GET", url,true)

    xhr.send()

}

const handleSuccess = (response) => console.log(response)

getAsyncData(handleSuccess)

//getAsyncData, the funciton itself would return undefined, as function falls finishes without waiting for the response

