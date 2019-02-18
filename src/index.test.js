import {xhr_get} from  './index.js'

//testing an async - using real api
test('testing an async', () => {
    const method = 'GET'
    const url = 'https://jsonplaceholder.typicode.com/posts/1'

    return xhr_get(method,url).then(data => {
        expect(data).toEqual({
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
          })
    })

  });