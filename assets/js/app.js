gsap.registerPlugin(TextPlugin);

// gsap.from("header", { y: '-100%', duration: 1, ease: "bounce" });
// gsap.from(".link", { duration: 1, delay: 1, opacity: 0, stagger: 0.5 });
// gsap.from(".left", { duration: 1, delay: 1, x: "100vw" });
// gsap.from(".right", { duration: 1, delay: 1, x: "-100vw" });

// gsap.from("button", { rotation: 360, scale: 0, duration: 0.5, delay: 2 });

// gsap.to("footer", { y: "0", duration: 1, delay: 2, ease: "elastic" });

// const timeLine = gsap.timeline({ duration: 1 });

// timeLine
//   .from("header", { y: "-100%", ease: "bounce" })
//   .from(".link", { opacity: 0, stagger: 0.5 })
//   .from(".left", { x: "-100vw" })
//   .from(".right", { x: "-100vw" })
//   .from("button", { rotation: 360, scale: 0 })
//   .to("footer", { y: "0", ease: "elastic" });

//   const button = document.querySelector('button');

//   button.addEventListener('click',()=>{
//    timeLine.timeScale(3)
//    timeLine.reverse()
//   }
//   )

// var tl = gsap.timeline();

// tl.addLabel("myLabel", 3);
// tl.addLabel("anotherLabel", 5);

// console.log(tl.labels.myLabel);
// console.log(tl.labels.anotherLabel);

const words = ["Mamun.", "A Father.", "A Husband.", "A Web Developer."];

const cursor = gsap.to(".cursor", {
  opacity: 0,
  ease: Power2.easeInOut,
  repeat: -1,
});

const boxTl = gsap.timeline();

boxTl
  .to(".box", {
    width: "18vw",
    duration: 1,
    delay: 0.5,
    ease: Power4.easeInOut,
  })
  .from(".hi", { y: "7vw", duration: 1, ease: Power3.easeOut, delay: 0.5})
  .to(".box", { height: "7vw", duration: 1, ease: Elastic.easeOut,onComplete:()=>masterTl.play()  })
  .to('.box',{autoAlpha:.7,repeat:-1,duration:2,yoyo:true})
let masterTl = gsap.timeline({repeat:-1,}).pause();

words.forEach((word) => {
  let tl = gsap.timeline({repeat:1,yoyo:true,repeatDelay:1});
  tl.to(".text", { duration: 1, text: word });
  masterTl.add(tl);
});
