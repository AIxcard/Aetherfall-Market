// hide normal cursor
const style = document.createElement("style");

style.innerHTML = `
*{
cursor:none !important;
}

/* cursor */

#customCursor{
position:fixed;
width:34px;
height:34px;
pointer-events:none;
z-index:999999;
transform:translate(-50%,-50%);
}

/* glow */

#customCursor svg{
width:100%;
height:100%;

filter:
drop-shadow(0 0 6px #38bdf8)
drop-shadow(0 0 10px #9333ea);
}

/* flame */

#cursorFlame{
position:absolute;
top:-8px;
left:50%;
width:10px;
height:18px;
transform:translateX(-50%);
background:linear-gradient(
#38bdf8,
#6366f1,
#9333ea,
transparent
);
opacity:0;
filter:blur(1px);
}

@keyframes flameAnim{
0%{opacity:1; transform:translateX(-50%) scaleY(.6);}
50%{opacity:1; transform:translateX(-50%) scaleY(1.4);}
100%{opacity:0; transform:translateX(-50%) scaleY(.4);}
}
`;

document.head.appendChild(style);

// create cursor element
const cursor = document.createElement("div");
cursor.id = "customCursor";

cursor.innerHTML = `
<svg viewBox="0 0 100 100">
<polygon
points="50,5 80,45 60,95 40,95 20,45"
fill="url(#grad)"
stroke="#111"
stroke-width="4"
/>
<defs>
<linearGradient id="grad">
<stop offset="0%" stop-color="#38bdf8"/>
<stop offset="50%" stop-color="#6366f1"/>
<stop offset="100%" stop-color="#9333ea"/>
</linearGradient>
</defs>
</svg>
<div id="cursorFlame"></div>
`;

document.body.appendChild(cursor);

// follow mouse
document.addEventListener("mousemove", e => {
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// flame effect
const flame = document.getElementById("cursorFlame");

function triggerFlame(){
flame.style.animation="none";
flame.offsetHeight;
flame.style.animation="flameAnim .35s ease";
}

function randomFlame(){
triggerFlame();
setTimeout(randomFlame,5000+Math.random()*5000);
}

randomFlame();
