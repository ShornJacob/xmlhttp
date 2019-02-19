//https://jestjs.io/docs/en/asynchronous#promises
//testing an async - using real api
test('testing a mock function', () => {
    const method = 'GET'
    const url = 'https://jsonplaceholder.typicode.com/posts/1'

    const XMLHTTP = jest.fn()

    XMLHTTP(method,url)

    expect(XMLHTTP.mock.calls.length).toBe(1)

})
