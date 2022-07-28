function nightDayHandler(self) {
    var target = document.querySelector("body");
    if (self.value === "night") {
      target.style.backgroundColor = "black";
      target.style.color = "white";
      self.value = "day";
      var everya = document.querySelectorAll("a");
      for (let i = 0; i < everya.length; i++) {
        everya[i].style.color = "white";
      }
    } else {
      target.style.backgroundColor = "white";
      target.style.color = "black";
      self.value = "night";
      for (let i = 0; i < everya.length; i++) {
        everya[i].style.color = "black";
      }
    }
  }