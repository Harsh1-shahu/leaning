const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

let timeout;

let xscale = 1;
let yscale = 1;

let xprev = 0;
let yprev = 0;

function firstPageAnim() {
    let tl = gsap.timeline();

    tl.from(".nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: "expo.inOut"
    })
        .to(".boundingelem", {
            y: 0,
            duration: 2,
            delay: -1,
            ease: "expo.inOut",
            stagger: .2
        })
        .from(".herofooter", {
            y: '-10',
            opacity: 0,
            duration: 1.5,
            delay: -1,
            ease: "expo.inOut"
        })
}

function circlesqueeze() {
    window.addEventListener("mousemove", (dets) => {
        clearTimeout(timeout);

        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouseFollow(xscale, yscale);

        timeout = setTimeout(() => {
            document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

        }, 100)

    })
}

function circleMouseFollow() {
    window.addEventListener("mousemove", (dets) => {
        document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}
circleMouseFollow();
firstPageAnim();
circlesqueeze();

const elements = document.querySelectorAll(".elem");
let rotate = 0;
let diffrot = 0;

elements.forEach((elem)=>{
   elem.addEventListener("mousemove",(dets)=>{    
   let diff = dets.clientY - elem.getBoundingClientRect().center; 
   diffrot = dets.clientX - rotate;
   rotate = dets.clientX;
   gsap.to(elem.querySelector("img"), {
    opacity: 1,
    ease: Power3,
    top: diff,
    left: dets.clientX,
    rotate: gsap.utils.clamp(-20, 20, diffrot *0.5),
   });
   }); 

   elem.addEventListener("mouseleave",(dets)=>{    
    gsap.to(elem.querySelector("img"), {
     opacity: 0,
     ease: Power3,
     duration: 0.5,
    });
    }); 
});

