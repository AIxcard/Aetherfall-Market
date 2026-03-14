// Fix blank page when going back
window.addEventListener("pageshow", () => {
document.body.style.opacity = "1"
})

// Hide normal cursor everywhere
const style = document.createElement("style")
style.innerHTML = `
*{cursor:none!important;}

#aetherCursor{
position:fixed;
width:34px;
height:34px;
pointer-events:none;
z-index:9999;
transform:translate(-6px,-4px) rotate(12deg);
}

#aetherCursor .arrow{
position:absolute;
width:100%;
height:100%;

background:linear-gradient(135deg,#38bdf8,#9333ea);

clip-path:polygon(0 0,100% 50%,55% 62%,62% 100%,0 0);

box-shadow:
0 0 8px #38bdf8,
0 0 18px #9333ea;
}

#aetherCursor .core{
position:absolute;
left:12px;
top:11px;

width:8px;
height:8px;

border-radius:50%;

background:linear-gradient(135deg,#60a5fa,#c084fc);

box-shadow:
0 0 6px #60a5fa,
0 0 10px #9333ea;
}

#aetherCursor .flame{
position:absolute;
left:9px;
top:6px;

width:14px;
height:20px;

opacity:0;
pointer-events:none;

background:radial-gradient(circle at 50% 80%,#ffffff 5%,#c084fc 35%,#9333ea 60%,transparent 70%);

filter:blur(1px);

animation:flameRise .6s ease forwards;
}

@keyframes flameRise{

0%{
transform:scale(.4) translateY(8px);
opacity:0;
}

40%{
opacity:1;
}

100%{
transform:scale(1.2) translateY(-8px);
opacity:0;
}

}
`
document.head.appendChild(style)

// Create cursor
const cursor = document.createElement("div")
cursor.id = "aetherCursor"

const arrow = document.createElement("div")
arrow.className = "arrow"

const core = document.createElement("div")
core.className = "core"

cursor.appendChild(arrow)
cursor.appendChild(core)

document.body.appendChild(cursor)

// Cursor movement
document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
})

// Flame effect every 10-15 seconds
function spawnFlame(){

const flame = document.createElement("div")
flame.className = "flame"

cursor.appendChild(flame)

setTimeout(()=>{
flame.remove()
},600)

}

setInterval(spawnFlame,10000 + Math.random()*5000)
