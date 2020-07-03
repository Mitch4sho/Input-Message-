const sendBtn = document.querySelector('#sendBtn');
const messageIn = document.querySelector('#message');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendMessage);


function sendMessage() {
    let inputVal = messageIn.value;
    if (inputVal === ' ') {
        alert("Please enter a message in the field ")
    } else {
        messageOut.innerHTML = inputVal;
        messageIn.value = ' ';
    }
}