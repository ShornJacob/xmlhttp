//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/response#Example

const getAsyncData = () => {

    // create an XMLHttpRequest object,
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
    //https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState
        if (xhr.readyState === 4 ) {
            console.log(xhr.response)
        }
    }

    const url = "https://jsonplaceholder.typicode.com/posts/1"

    //open a url , true is for async
    xhr.open("GET", url,true)

    xhr.send()

}

getAsyncData()
