document.querySelectorAll(".wrap_images").forEach(function(img){
    img.addEventListener("click" , function(){
        document.querySelector(".fixe").style.display = "flex";
        document.querySelector(".images_popup").src=img.src;
        document.body.classList.add("body")
        $(document).ready(function(){
            $(".times").css("display" , "block");
            $(".times").click(function () { 
                $(".fixe").css("display" , "none");
                $(".times").css("display" , "none");
                document.body.classList.remove("body");
            });
        });
    })
        img.addEventListener("mouseover" , function(){
        img.style.filter = "grayscale()";
        img.style.transition = "0.5s"
    })
    img.addEventListener("mouseout" , function(){
        img.style.filter = "";
    })
})