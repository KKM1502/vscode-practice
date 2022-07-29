
function setColor(color){
  var everya = document.querySelectorAll("a");
      for (let i = 0; i < everya.length; i++) {
        everya[i].style.color = color;
        
      }
      document.querySelector("body").style.color = color;
  }
  function SetBackgroundColor(color){
    document.querySelector("body").style.backgroundColor = color;
  }
function nightDayHandler(self) {
    var target = document.querySelector("body");
    if (self.value === "night") {
      target.style.backgroundColor = "black";
      self.value = "day";
      setColor("white")
    } else {
      target.style.backgroundColor = "white";
      self.value = "night";
      setColor("black")
    }
  }