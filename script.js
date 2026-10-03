function openMessage() {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
}

function openLetter() {
    document.getElementById("message").classList.add("hidden");
    document.getElementById("letter").classList.remove("hidden");
}