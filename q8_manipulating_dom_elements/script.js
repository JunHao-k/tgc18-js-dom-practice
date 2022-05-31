// PLACE YOUR CODE HERE
// # Q8 - Selecting Many Elements and Manipulation

// Examine the HTML file, and perform the following manipulations:

// 1. Select all elements with the class `emphasis` and change their font family to 'Verdana'

// 2. Select all `<li class='finished'>` and put a strikethrough through them (google for
// 'css text decoration')

// 3. Select all the `<li class='todo'>` that are in `<ul id='low-priority'>` and
// change their background color to blue

// 4. Select all elements with the class `alert` and change the font color to red.

let emphasisList = document.querySelectorAll('.emphasis')
for(eachEmphasis of emphasisList){
    eachEmphasis.style.fontFamily = "Verdana"
}

let finishList = document.querySelectorAll('li.finished')
for(eachFinish of finishList){
    eachFinish.style.textDecoration = "line-through"
}

let lowPriority = document.querySelectorAll('#low-priority li.todo')
for(task of lowPriority){
    task.style.backgroundColor = "blue"
}

let alertList = document.querySelectorAll('.alert')
for(eachAlert of alertList){
    eachAlert.style.backgroundColor = "red"
}