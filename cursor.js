// Fix blank page when using browser back button
window.addEventListener("pageshow", () => {
document.body.style.opacity = "1"
})

// Hide default cursor
document.body.style.cursor = "none"

// Create cursor element
const cursor = document.createElement("div")
document.body.appendChild(cursor)

cursor.style.position = "fixed"
cursor.style.width = "22px"
cursor.style.height = "22px"
cursor.style.pointerEvents = "none"
cursor.style.zIndex = "9999"

cursor.style.background = "linear-gradient(135deg,#38bdf8,#9333ea)"
cursor.style.clipPath = "polygon(0 0,100% 50%,55% 60%,65% 100%,0 0)"
cursor.style.boxShadow = "0 0 8px #38bdf8,0 0 16px #9333ea"

cursor.style.transform = "translate(-3px,-3px)"

// Move cursor
document.addEventListener("mousemove", e => {

cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"

})
