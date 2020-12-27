function makeVisible(elemID) {
  var element = document.getElementById(elemID);
  element.classList.add("visible");
}

function makeInvisible() {
    var elements = document.getElementsByClassName("visible");
    for (let elem of elements) {
	elem.classList.remove("visible");
    }
}

function escapeKeyPress(e) {
    if (e.key === "Escape") {
        makeInvisible();
    }
}

function addEscapeKeyListener() {
    window.onkeydown=escapeKeyPress;
}

window.onload = addEscapeKeyListener;
