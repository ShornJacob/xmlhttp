

const xhrRequest = (method,url) => new Promise (  (resolve,reject) => {
    const xhrObject = new XMLHttpRequest()
    xhrObject.onload = () => resolve(xhrObject.responseText)
    xhrObject.onerror = reject

    xhrObject.open(method,url)
    xhrObject.send()
}  )



const xhr_get = async (method,url) => {
    try {
        let result
        result = await xhrRequest(method,url)
        return JSON.parse(result)
   
    }catch (e) {
        return "Error"
    }
    
}



const data = xhr_get('GET','https://jsonplaceholder.typicode.com/posts/1')
console.log(data) //this displays the Promise Object
console.dir(data)

//this diplays the data
xhr_get('GET','https://jsonplaceholder.typicode.com/posts/1').then( (data) => console.log(data))

//this is displayed before the data as JS thread continues its execution
console.log("A statement")

export {xhr_get}
