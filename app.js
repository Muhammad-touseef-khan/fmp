document.querySelectorAll(".our-team-img").forEach(function(btn){
    btn.addEventListener("mouseover" , ()=>{
        btn.children[0].classList.add("block")
    })
    btn.addEventListener("mouseout" , function(){
        btn.children[0].classList.remove("block")
    })
})
document.querySelector(".navbar-toggler").addEventListener("click" , function(){
    document.querySelector(".navbar-toggler").style.border="none"
})

var lis = document.querySelectorAll(".li");
lis.forEach(function(li){
    li.classList.add("animate__animated" , "wow");
});
function pop(th ){
    th.classList.add("bloc");
    document.body.classList.add("body")
    document.querySelectorAll(".pop").forEach(function(pop){
        pop.classList.add("pop-blur");
})}
document.querySelector(".times_pop").addEventListener("click" , function(){
    document.querySelector(".wi").classList.remove("bloc");
        document.querySelectorAll(".pop").forEach(function(p){
        p.classList.remove("pop-blur");})
        document.body.classList.remove("body")
})
document.querySelectorAll(".pop").forEach(function(p){
    p.addEventListener("click" , ()=>{
        document.querySelector(".wi").classList.remove("bloc");
        document.querySelectorAll(".pop").forEach(function(p){
        p.classList.remove("pop-blur");})
        document.body.classList.remove("body")
})});
document.querySelectorAll(".slider-btn").forEach(function(btn){
    btn.addEventListener("click" , function(){
      var a =  document.querySelector(".testimonial").clientWidth;
        if(btn.classList.contains("slider-btn-two")){
            document.querySelector(".testimonial").scrollBy(a , 0)
        }
        if(btn.classList.contains("slider-btn-one")){
            
            document.querySelector(".testimonial").scrollBy(-a , 0)
        }
    })
})


$(document).ready(function(){
        $(document).mousemove(function (event) { 
        if(event.pageY > 900){
            $(".fixed").css("display" , "block")
        }else if(event.pageY < 900){
            $(".fixed").css("display" , "none")
        }
    });
    $(".fixed").click(function (e) { 
        e.preventDefault();
        window.scrollTo(0 , 0)
    });
})
function submit(){
    Window.location.href = 'https://code.tutsplus.com';
}


