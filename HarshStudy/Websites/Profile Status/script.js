let rect = document.querySelector(".center");
let stats = document.querySelector("h5");
let addFriend = document.querySelector("button");
let imgBox = document.querySelector(".img-box");
let heart = document.querySelector("i");
let cursor = document.querySelector(".cursor");
let card = document.querySelector("#card");


rect.addEventListener("mousemove", (details) => {
    let rectangleLoc = rect.getBoundingClientRect();
    let insiderectval = details.clientX - rectangleLoc.left;
    if (insiderectval < rectangleLoc.width / 2) {
        let redcolor = gsap.utils.mapRange(0, rectangleLoc.width / 2, 255, 0, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
        });
    } else {
        let bluecolor = gsap.utils.mapRange(rectangleLoc.width / 2, rectangleLoc.width, 0, 255, insiderectval);
        gsap.to(rect, {
            backgroundColor: `rgb( 0, 0, ${bluecolor})`,
            ease: Power4,
        });
    }
});

rect.addEventListener("mouseleave", () => {
    gsap.to(rect, { backgroundColor: "#06292C" })
});

card.addEventListener("mousemove", (dets) => {
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
    cursor.style.opacity = 1;
});

card.addEventListener("mouseleave", () => {
    cursor.style.opacity = 0;
});


imgBox.addEventListener("dblclick", () => {
    heart.style.transform = 'translate(-50%, -50%) scale(1)';
    heart.style.opacity = 0.8
    setTimeout(() => {
        heart.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        heart.style.transform = 'translate(-50%, -50%) scale(0)';
    }, 2000);
});

let check = 0;

addFriend.addEventListener("click", () => {
    if (check == 0) {
        stats.innerHTML = "Friends";
        stats.style.color = "green";
        addFriend.innerHTML = "Remove Friend";
        check = 1;
    } else {
        stats.innerHTML = "Stranger";
        stats.style.color = "red";
        addFriend.innerHTML = "Add Friend";
        check = 0;
    }
});