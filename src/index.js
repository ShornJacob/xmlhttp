import {XMLHttp} from './XMLHttp'

const data = XMLHttp('GET','https://jsonplaceholder.typicode.com/posts/1')
console.log(data) //this displays the Promise Object
console.dir(data)

//this diplays the data
XMLHttp('GET','https://jsonplaceholder.typicode.com/posts/1').then( (data) => console.log(data))

//this is displayed before the data as JS thread continues its execution
console.log("A statement")


