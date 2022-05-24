// PLACE YOUR CODE HERE

// Now equipped with this knowledge, try the following questions:

// 1. Change the first `<h1>` element in the document to say "Hello world!"

// 2. Change the background color of the first `<span id="important">` in the document to 'red'

// 3. Change the font family and font size of the first `<li class="todo">` to be the font Verdana and font size '16px'.

let header = document.querySelector('h1').innerText = "Hello world!"

let important = document.querySelector('#important').style.backgroundColor = 'red'

let todo = document.querySelector('li.todo').style.font = "Verdana 16px"




// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}