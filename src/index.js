//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequestEventTarget/onload#Example

var xmlhttp = new XMLHttpRequest(),

method = 'GET',

url = 'https://jsonplaceholder.typicode.com/posts/1';


xmlhttp.open(method, url, true);

xmlhttp.onload = function () {
    console.log(xmlhttp.response)
};

xmlhttp.send();

