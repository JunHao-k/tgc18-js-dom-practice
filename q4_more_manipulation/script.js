// ## The Questions

// 1. Select the first `<h1>` element in the list. Change it so that it now displays in green color.
let header = document.querySelector('h1').style.color = "green"

// 2. Change the text of the first `<li class="finished">` to the string "Repay credit card debt"
let textChange = document.querySelector('li.finished').innerText = "Repay credit card debt"

// 3. Select the element `<li id="urgent">`, and give it a black coloured border that has a width of '2px'. Hint: Check the `border-color`
// and the `border-width` css properties on a web page.
let urgentMatter = document.getElementById("urgent").style.border = "2px black"

// 4. Change the first element with the class `emphasis` such that it is underlined (check out the text decoration css style online)
let emphasisMatter = document.querySelector(".emphasis").style.textDecoration = "underline"

// 5. Select first element with `<p class='emphasis'>` and change its background color to orange,
//  its font size to "32px" and its line height to be "24px". 
let emphasisPara = document.querySelector("p.emphasis")
emphasisPara.style.backgroundColor = "orange"
emphasisPara.style.fontSize = "32px"
emphasisPara.style.lineHeight = "24px"


// 6. Select the `<span class="todo">` which is nested inside the `<li id="urgent">` and give
//  it a background color of 'yellow'
let changeYellow = document.querySelector("#urgent span.todo")
changeYellow.style.backgroundColor = "yellow"


// 7. Change the first `<h2>` element such that it contains another element `<span class="greetings">About Us</span>` instead.
let addSpan = document.querySelector('h2')
addSpan.innerHTML = `<span class="greetings">About Us</span>`