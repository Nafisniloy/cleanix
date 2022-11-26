function hamMenu() {
    var x = document.getElementById("myLinks");
    var hr1= document.getElementsByClassName('hr-1')[0].style
    var hr2= document.getElementsByClassName('hr-2')[0].style
    var hr3= document.getElementsByClassName('hr-3')[0].style
    var icon= document.getElementsByClassName('icon')[0].style
    if (x.style.display === "block") {
      x.style.display = "none";
      hr1.transform="rotate(0deg)"
      hr3.transform="rotate(0deg)"
      hr2.display="block"
      hr1.position="static"
      icon.top="0px"
    } else {
      x.style.display = "block";
      hr1.transform="rotate(45deg)"
      hr1.position="absolute"
      hr3.transform="rotate(135deg)"
      hr2.display="none"
      icon.top="4px"
    }
  }