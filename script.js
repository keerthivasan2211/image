var thumbnails=document.querySelectorAll(".thumbnail");
var mainimage=document.querySelector("#main-image");
for(var i=0;i<thumbnails.length;i++){
    thumbnails[0].addEventListener("click",function(){
        mainimage.src=this.src
    });

}