/* 
* 1. create a post api on the server side.
* 2. client side send data via post.
* 3. set fetch method inside the fetch options (second parameter)
* 4. options will have 3 things: method  
* 5. options will have header : 'content-type' : 'application/json'
* 6. don't forgot to send data by JSON.Stringify in the body
* 7. on the server side : don't forgot to use express.json() middleware
*/