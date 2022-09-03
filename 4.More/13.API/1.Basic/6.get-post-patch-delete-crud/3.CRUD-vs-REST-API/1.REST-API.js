//Non-Technical Way
/* 
NodeJS: Node JS is a runtime where we we run JS.
REST: Representatial State Transfer
API: Application Programming Interface=>Code to Code relation
In REST API, we transfer our state.
*/

/* 
Representatial, State, Resource, URI, Client Server
REST API: A way to communicate between client and server.
*/

/* 
Once upon a time when we send a request to the server, server would return us 
HTML, CSS, and JS file. But HTML doesn't work in Mobile App, iOS etc. There 
were two ways to solve this problem:
1. Keeping seperate server for all devices which is very much expensive.
2. Find out data from HTML file, and extract them and then use it to another device.
But this process is very time consuming.

So programmers think an alternative way to create a such type of server which won't
send HTML. It will provide a different type data that is usable in every device.
This server is REST API.
*/

/* 
At the beginning, XML was the holder of REST API. But it is too heavy, and difficult
to extract(almost similar to HTML extract). So, now JSON is used as the holder of
REST API because it is very light weight and easy to convert in object.

That means when data come from server, it comes in JSON format. Agin, while we send data
to server, we send it as JSON data.
*/
/* ------------------------------------------------------------------------------------*/

//Technical Way
/* 
REST API is a JSON file. 
State: State is JSON format of data. DB doesn't give us the direct data. It gives the JSON state of the data. When we use it, we convert it JSON to device languages data.
In a word, we can say REST API doesn't send data, it sends the state of data.
*/

/* 
URI: Uniform Resource Identifier is also called URL-Uniform Resource Locator.
It is unique for every task. 
Ex: facebook.com, facebook.com/profile, facebook.com/groups, facebook.com/groups/CompleteOutlet etc all are different and unique.

URL path and method(GET,POST,PUT,PATCH,DELETE) are the main factors in REST API
*/

/* 
Stateless: REST API is stateless.
Once upon a time when a user would send a request to the server, server would keep some sate about the user on it. So next time while user agin would send the request, it would see that it had the state of the user and would provide the data to user.

But REST API is stateless. Here all the requests are different. There are no relation between two requests. One request doesn't know about another request. 
Ex:
facebook.com
facebook.com/groups/complete-outlet
Here, server doesn't know that both two requests have sent from same same user.
*/

/* 
We can cache the data of REST API in our browser.
*/

/* 
REST API is the layer between client and server.
*/

/* 
By using REST API, we can store some necessary code in our server so that we can use them while necessary. 
*/