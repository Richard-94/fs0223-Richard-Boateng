
let paragraph = document.getElementById("time");

  let sec = 0;
  let timer = setInterval(function(){
      paragraph.textContent=':'+sec;
      sessionStorage.setItem("setSeconds", sec);
      sec++; 
  }, 1000);




  window.onload = function(){  
    let setSeconds = sessionStorage.getItem("setSeconds");
    if(setSeconds){
        paragraph.textContent = ':' + setSeconds;
        sec = setSeconds; 
    }
}


