// const nameE1 = document.getElementById("name");
// const editButton = document.getElementById("edit-button");

// editButton.addEventListener("click", () => {
//     var newName = prompt("Enter your name:");
//     nameE1.textContent = newName;
//     console.log(nameE1);
// });

console.log("page loaded...");

var requestSpan = document.querySelector("#requests");
var connectionSpan = document.querySelector("#connections");
var username = document.querySelector("#username");

function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}

function ignore(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
}

function edit() {
    username.innerText = "Marisa G";
}