function homepageAnimation(){
    gsap.set(".slidesm",{scale:3})
    var tl = gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:"top top",
            end:"bottom bottom",
            scrub:1  
        }
    
    })
    
    tl.to(".videodiv",{
       
        '--clip': "0%",
        ease: Power2,
    },'a')
    .to(".slidesm",{
        
        scale:1,
        ease:Power2
    },'a')
    .to(".lft",{
        xPercent:-10,
        stagger:.03,
        ease: Power4
    },'b')
    .to(".rgt",{
        xPercent:10,
        stagger:.03,
        ease: Power4
    },'b')
}


function realPageAnimation(){


    gsap.to(".slide",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
           
            scrub:2
        },
        xPercent:-200,
        ease:Power4
    });
    

}

function teamAnimation(){
    document.querySelectorAll(".listitem")
    .forEach(function(el){
        el.addEventListener("mousemove",function(dets){
         gsap.to( this.querySelector(".picture"),{opacity:1, x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),  ease:Power4,duration:.5});
        })
            el.addEventListener("mouseleave",function(dets){
         gsap.to( this.querySelector(".picture"),{opacity:0,ease:Power4,duration:.5});
    
            })
    })

}

function paraAnimation(){
    var clutter = "";
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function(e){
        if(e=="") clutter+=`<span>&nbsp;</span>`
        clutter += `<span>${e}</span>`
    })
    document.querySelector(".textpara").innerHTML = clutter;
    gsap.set(".textpara span",{opacity: .1})
    gsap.to(".textpara span",{
        scrollTrigger:{
            trigger:".para",
            start:"top 60%",
            end:"bottom 90%",
            scrub: 2,
            
        },
        opacity:1,
        stagger:.03,
        ease:Power4
    })
    

}

homepageAnimation();
realPageAnimation();
teamAnimation();
paraAnimation();

