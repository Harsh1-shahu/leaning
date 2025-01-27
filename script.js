const center = document.querySelector(".center");

const btn = document.querySelector("#throttle");


const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        console.log(now - prev, delay);
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
center.addEventListener("mousemove",throttleFunction((dets) => {
        const div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = dets.clientX+"px";
        div.style.top = dets.clientY+"px";
        const img = document.createElement("img");
        img.setAttribute("src", "https://pixlr.com/images/generator/how-to-generate.webp");
        div.appendChild(img);
        document.body.appendChild(div);
        gsap.to(img, {
            y: "0",
            ease: Power1,
            duration: .6
        });
        gsap.to(img, {
            y: "100%",
            delay: .6,
            ease: Power2,
        });
        setTimeout(() => {
            div.remove();
        }, 2000);
    }, 400));