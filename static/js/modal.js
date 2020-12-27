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
    console.log("Escape pressed");
    if (e.key === "Escape") {
        makeInvisible();
    }
}

function addEscapeKeyListener() {
    console.log("Add listener")
    window.onkeydown=escapeKeyPress;
}

window.onload = addEscapeKeyListener;
