const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


var tlmain = gsap.timeline();

    tlmain.to("#one", {
    opacity: 2,
    duration: 0.5,
})
.to("#two", {
    opacity: 1,

},"a")
.to("#one", {
    opacity: 0,
},"a")
.to("#three", {
    opacity: 1,
},"b")
.to("#two", {
    opacity: 0,
},"b")
.to("#four", {
    opacity: 1,
},"c")
.to("#three", {
    opacity: 0,
},"c")
tlmain.to(".center-centent", {
   height:0,
   opacity: 0,
   zIndex: 0,
},)





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
    // markers:true,
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
let tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-4",
        start:"50% 50%",
        end: "200% 50%",
        pin: true,
        // markers: true,
        scrub: 1,
    },  
});
tl4.to(".c-one",{
    marginTop: "-25%",
    opacity:"1",
}, 'sct-1')
tl4.to(".c-two",{
    opacity:"1",
}, 'sct-2')
tl4.to(".cir-part-4",{   // left side-star
    rotate: 120,
}, 'sct-2')
tl4.to(".c-one",{
    marginTop: "-100",
    opacity:"0",
}, 'sct-2')
tl4.to(".c-three",{
    opacity:"1",
}, 'sct-3')
tl4.to(".c-two",{
    opacity:"0",
}, 'sct-3')
tl4.to(".c-one",{
    marginTop:"-180%",
}, 'sct-3')

//left-side-star
tl4.to(".cir-part-4",{
    rotate: 260,
}, 'sct-3')         
tl4.to(".c-one",{
    marginTop:"-230%",
}, 'sct-4')
tl4.to(".cir-part-4",{
    rotate: 300,
}, 'sct-4')
tl4.to(".c-three",{
    opacity:"0",
}, 'sct-4')

tl4.to(".cir-part-4",{
    marginLeft:"94%",
    rotate: 400,
    scrub: true,
})

let tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: ".content-5",
        start:"20% 50%",
        end: "100% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl5.to(".content-5 .text-area-blur-5 h1",{
    width:"100%",
})
tl5.to(".content-5 .text-area-blur-5 h2",{
    delay: -0.4,
    width:"100%",
})
let tl6 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-6",
        start:"0% 70%",
        end: "15% 50%",
        // markers: true,
        scrub: 1,
    },  
});
tl6.to(".rounded-div-wrapper-6",{
    height:"0%",
    marginTop: 0,
})

let tl7 = gsap.timeline({
    scrollTrigger:{
        trigger: ".part-7",
        start:"50% 50%",
        end: "300% 50%",
        pin:true,
        markers: true,
        scrub: 1,
    },  
});
tl7.to("#demo",{
    bottom:"5%",
})
tl7.to(".our-work-text-div",{
    height:"60vh",
}, 'height')
tl7.to(".our-work",{
    height:"60vh",
}, 'height')
tl7.to("#our",{
    left:"0%",
}, 'height')
tl7.to("#work",{
    right:"0%",
}, 'height')
tl7.to(".scroll-img",{
    marginTop:"-300%",
})