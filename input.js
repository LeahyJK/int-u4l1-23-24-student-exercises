let submitButton = document.querySelector(".submit");
let messages = document.querySelector(".messages");

// CODE ALONG, PART 1 CONTINUED
// 3. Declare a variable to store the input element
let userInput = document.querySelector(".userinput")

submitButton.addEventListener("click", function() {
    // 4. Declare a variable to store the value of the input
    let inputVal = userInput.value;
    // 5. Use the console to check a value is saved.
    console.log(inputVal);
    //  - Type something and click the button to confirm it works!


    

    // CODE ALONG, PART 2
    // 6. User .innerHTML to display the value to the messages div.
    messages.innerHTML=(inputVal);
    // 7. Type something and test it out.


});