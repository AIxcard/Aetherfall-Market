// Fix blank page when returning with back button
window.addEventListener("pageshow", () => {
document.body.style.opacity = "1"
})

// Hide normal cursor everywhere
const style = document.createElement("style")
style.innerHTML = `
*{cursor:none!important;}

#aetherCursor{
position:fixed;
width:46px;
height:46px;
pointer-events:none;
z-index:9999;
transform:translate(-8px,-6px) rotate(14deg);
}

#aetherCursor .arrow{

position:absolute;
width:100%;
height:100%;

/* balanced arrow */
clip-path:polygon(
0 0,
100% 48%,
60% 58%,
68% 100%,
0 0
);

background:linear-gradient(135deg,#38bdf8,#9333ea);

box-shadow:
0 0 10px #38bdf8,
0 0 22px #9333ea;

}

/* crystal core */

#aetherCursor .crystal{

position:absolute;

left:19px;
top:18px;

width:10px;
height:10px;

background:linear-gradient(135deg,#7dd3fc,#c084fc);

clip-path:polygon(
50% 0%,
100% 50%,
50% 100%,
0% 50%
);

box-shadow:
0 0 8px #7dd3fc,
0 0 14px #9333ea;

}

/* flame */

#aetherCursor .flame{

position:absolute;

left:15px;
top:6px;

width:24px;
height:30px;

opacity:0;

background:radial-gradient(
circle at 50% 80%,
#ffffff 5%,
#c084fc 30%,
#9333ea 60%,
transparent 75%
);

filter:blur(1.5px);

transform:rotate(-14deg);

animation:flameRise .7s ease forwards;

}

@keyframes flameRise{

0%{
transform:rotate(-14deg) scale(.5) translateY(12px);
opacity:0;
}

40%{
opacity:1;
}

100%{
transform:rotate(-14deg) scale(1.4) translateY(-14px);
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

const crystal = document.createElement("div")
crystal.className = "crystal"

cursor.appendChild(arrow)
cursor.appendChild(crystal)

document.body.appendChild(cursor)

// Cursor movement
document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px"
cursor.style.top = e.clientY + "px"
})

// Flame spawn
function spawnFlame(){

const flame = document.createElement("div")
flame.className = "flame"

cursor.appendChild(flame)

setTimeout(()=>{
flame.remove()
},700)

}

setInterval(spawnFlame,10000 + Math.random()*5000)
