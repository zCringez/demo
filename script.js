
function handleKeyPress (ev) {
    const player = document.querySelector("player")
    player.setAttribute("cx", 100 * Math.random())
    player.setAttribute("cy", 100 * Math.random())
}


window.onkeydown = handleKeyPress
