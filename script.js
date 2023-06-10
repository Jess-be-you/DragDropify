let items = document.getElementsByClassName("item");
let dropBox = document.getElementById("right");
let dragBox = document.getElementById("left");
let resetButton = document.getElementById("btn");
let message = document.getElementById("success");
let resetMessage = document.getElementById("reset");


for (list of items) {
    list.addEventListener("dragstart", function (e) {
        let selected = e.target;

        dropBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        dropBox.addEventListener("drop", function (e) {
            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function execute() {
                displayMessage();
                await delay(1000);
                deleteMessage();
            }
            execute();
            dropBox.appendChild(selected);
            selected = null;
        })
        dragBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        })
        dragBox.addEventListener("drop", function (e) {
            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function execute() {
                displayMessage();
                await delay(1000);
                deleteMessage();
            }
            execute();
            dragBox.appendChild(selected);
            selected = null;
        })
    })
}
function displayMessage() {
    message.classList.add("active");
    // alert("dropped successfully");
}
function deleteMessage() {
    message.classList.remove("active");
}
function displayReset() {
    resetMessage.classList.add("active");
}
function deleteReset() {
    resetMessage.classList.remove("active");
}

resetButton.addEventListener("click", () => {
    dropBox.classList.remove("active");
    if (dropBox.hasChildNodes()) {
        for (list of items) {
            dragBox.appendChild(list);
            function delay(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
            async function execute() {
                displayReset();
                await delay(1000);
                deleteReset();
            }
            execute();
        }
    }
})


