// Checking form requirements are filled. 
function ValidationCheck(form) {
    let isValid = true; 

    if (form.NameInput.value == "") {
        alert("You forgot to put anything for Name!");
        isValid = false; 
    }

    if (form.EmailInput.value == "" || form.EmailInput.value.indexOf('@') == -1) {
        alert("You did not put a valid Email!");
        isValid = false;
    }

    if (form.MessageInput.value == "") {
        alert("You forgot to put your message!");
        isValid = false; 
    }

    if (isValid) {
        alert("Message Submitted!"); 
    }
}

// Make sidebar appear on click of a button
document.addEventListener('DOMContentLoaded', function() {
    var toggleButton = document.querySelector('.toggle-content');
    var sidebar = document.querySelector('.sidebar');

    toggleButton.addEventListener('click', function() {
        sidebar.classList.toggle('show-content');
    });
});





    
    

    