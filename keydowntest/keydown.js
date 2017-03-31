window.addEventListener("keydown", key_down);
function key_down(e) {
    var pacmanElement = null;
    var cameraElement = null;
    if(e.key == "a")
    {
        var current = pacmanElement.getAttribute(" ").split(" ");
        pacmanElement.setAttribute("rotation", parseInt(current[])+90);
        var current2 = pacmanElement.getAttribute(" ").split(" ");
        pacmanElement.setAttribute("rotation", parseInt(current2[])+90);
    }
    if(e.key == "d") {
pacmanElement.setAttribute("rotation", current[]-90);
    }
}