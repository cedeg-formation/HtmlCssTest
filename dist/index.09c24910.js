const f = document.getElementById("imageText");
document.addEventListener("click", (ev)=>{
    f.style.transform = `translateY(${ev.clientY - 25}px)`;
    f.style.transform += `translateX(${ev.clientX - 25}px)`;
}, false);

//# sourceMappingURL=index.09c24910.js.map
