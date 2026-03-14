// Fix blank page when returning with back button
window.addEventListener("pageshow", () => {
document.body.style.opacity = "1"
})

// Hide default cursor
const style = document.createElement("style")
style.innerHTML = `
*{cursor:none!important;}

#aetherCursor{
position:fixed;
width:36px;
height:36px;
pointer-events:none;
z-index:9999;
transform:translate(-3px,-2px);
}
`
document.head.appendChild(style)

// Create cursor container
const cursor = document.createElement("div")
cursor.id = "aetherCursor"

// Improved balanced arrow
cursor.innerHTML = `
<svg viewBox="0 0 24 24" width="36" height="36">
<defs>
<linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
<stop offset="0%" stop-color="#38bdf8"/>
<stop offset="100%" stop-color="#9333ea"/>
</linearGradient>
</defs>

<path d="
M2 2
L2 22
L9 16
L12 22
L15 21
L12 14
L21 14
Z"
fill="url(#grad)"
stroke="white"
stroke-width="1.6"
/>
</svg>
`

document.body.appendChild(cursor)

// Cursor movement
document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
})
