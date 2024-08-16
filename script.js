const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-1",
    start:"50% 50%",
    end:"220% 50%",
    scrub:true,
    // markers:true,
    pin:true,
}})

tl.to(".rotate-div",{
    rotate: -15,
    scale: 0.8,
},'a')
tl.to("#row-2",{
    marginTop: "-25%"
},'a')
tl.to("#row-3",{
    marginTop: "-25%"
},'a')
tl.to("#row-4",{
    marginTop: "-30%"
},'a')
tl.to("#row-5",{
    marginTop: "-20%"
},'a')
tl.to(".overly-div h1",{
    opacity: "1",
    delay: 0.2,
},'a')
tl.to(".overly-div",{
    backgroundColor: "#000000b4",
},'a')
tl.to(".scrolling",{
    width: "100%",
},'a')
var tl2 = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"0% 70%",
    end:"50% 50%",
    scrub:true,
    markers:true,
}})

tl2.to(".wrapper-div",{
    height:0,
    marginTop: 0,
})

let tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-2",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl3.to(".content-2 .text-area-blur h1",{
    width:"100%",
})
tl3.to(".content-2 .text-area-blur h2",{
    delay: -0.4,
    width:"100%",
})
// var tl2 = gsap.timeline({scrollTrigger:{
//     trigger: ".part-2",
//     start:"50% 50%",
//     end:"100% 50%",
//     scrub:true,
//     // markers:true,
//     pin:true,
// }})
// tl2.to(".wrapper-div",{
//     height: 0,
//     marginTop: 0,
// })
// var tl = gsap.timeline({scrollTrigger:{
//     trigger : ".part-1",
//     start : "50% 50%",
//     end : "150% 50%",
//     markers : true,
//     pin : true,
//     srcub: true,

// }})
// tl.to(".rotate-div", {
//     rotate: -15,
//     scale: 0.8,
//     srcub: true,
//     delay: 1
// },'a')
// tl.to(".row-1", {
//     margingTop:"-8%",
// },'a')
// tl.to(".row-2", {
//     margingTop:"-12%",
// },'a')
// tl.to(".row-3", {
//     margingTop:"-15%",
// },'a')
// tl.to(".row-4", {
//     margingTop:"-18%",
// },'a')
// tl.to(".row-5", {
//     margingTop:"-21%",
// },'a')