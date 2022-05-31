// ## The question

// Examine the form in `index.html` carefully, and answer the following questions in `script.js`. Answer all the questions
// within the function.

// 1. Extract out the email address from the form and store it in a variable named `email`

// 2. Extract out the selected phone model from the form and store it in a variable named `model`

// 3. Extract out the required services, and store it in a variable named `services`

// 4. Extact out the selected pickup point and store it in a variable named `pickup`

function getFormValues() {

    let email = null;

    let model = null;

    let services = null;

    let pickup = null;

    let submition = document.querySelector("#submit")
    submition.addEventListener('click' , () => {
        email = document.querySelector("#email-address").value
        // console.log(document.querySelector("#email-address"))
        model = document.querySelector('.phone-type').value
        services = document.querySelector('.services').checked
        pickup = document.querySelector("#pick-up").value
    })

    // leave this line alone!
    return [email, model, services, pickup];

}

// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = getFormValues;
} catch (e) {}
