const XMLHttpPromiseObject = (method,url) => new Promise (  (resolve,reject) => {
    const xhrObject = new XMLHttpRequest()
    xhrObject.onload = () => resolve(xhrObject.responseText)
    xhrObject.onerror = reject

    xhrObject.open(method,url)
    xhrObject.send()
}  )



const XMLHttp = async (method,url) => {
    try {
        let result
        result = await XMLHttpPromiseObject(method,url)
        return JSON.parse(result)
   
    }catch (e) {
        return "Error"
    }
    
}


export {XMLHttp}