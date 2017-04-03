var chile = document.getElementsByClassName("chile");
var quintaLima = document.getElementsByClassName("quintaLima");
var sextaLima = document.getElementsByClassName("sextaLima");
var img = document.getElementsByTagName("img");
var select = document.getElementById("select");
select.onchange = function(){
  if(select.value == "4taPromocionChile"){
    for(var i=0; i<img.length;i++){
      if(img[i].classList.value=="chile"){
          img[i].style.display ="inline-block";
        }
      if(img[i].classList.value=="quintaLima"){
          img[i].style.display ="none";
        }
      if(img[i].classList.value=="sextaLima"){
          img[i].style.display ="none";
        }
      }
    }

    if(select.value == "5taPromocionLima"){
      for(var i=0; i<img.length;i++){
        if(img[i].classList.value=="chile"){
            img[i].style.display ="none";
          }
        if(img[i].classList.value=="quintaLima"){
            img[i].style.display ="inline-block";
          }
        if(img[i].classList.value=="sextaLima"){
            img[i].style.display ="none";
          }
        }
      }

      if(select.value == "6taPromocionLima"){
          for(var i=0; i<img.length;i++){
            if(img[i].classList.value=="chile"){
                img[i].style.display ="none";
              }
            if(img[i].classList.value=="quintaLima"){
                img[i].style.display ="none";
              }
            if(img[i].classList.value=="sextaLima"){
                img[i].style.display ="inline-block";
              }
            }
          }
}
