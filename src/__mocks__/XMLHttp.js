const data = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }

const XMLHttp = (method,url) => {
    return new Promise((resolve) => {
        if ( method === "GET" && url === "https://jsonplaceholder.typicode.com/posts/1" ) {
            resolve(data)
        }
    })
}

export {XMLHttp}